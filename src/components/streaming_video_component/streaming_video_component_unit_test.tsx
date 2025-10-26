/// <reference types="vitest/globals" />

import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import YouTube from 'react-youtube';
import { StreamingVideoComponent } from './streaming_video_component';
import { PLAYER_STATES } from './streaming_video_states';
import { VIDEO_EVENT_TYPES } from '../../events/video_event';

vi.mock('react-youtube', () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid="mock-youtube-player"></div>),
}));

describe('StreamingViewComponent', () => {
  const onTrackEvent = vi.fn();
  const MockYouTube = vi.mocked(YouTube);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should display the YouTube player', () => {
    render(<StreamingVideoComponent onTrackEvent={onTrackEvent} />);

    expect(MockYouTube).toHaveBeenCalledOnce();
    expect(screen.getByTestId('mock-youtube-player')).toBeInTheDocument();
  });

  it('should track events correctly when the player state changes', () => {
    render(<StreamingVideoComponent onTrackEvent={onTrackEvent} />);

    const onStateChange = MockYouTube.mock.calls[0][0].onStateChange;
    expect(onStateChange).toBeInstanceOf(Function);

    const mockEvent = (data: number) => ({
      data,
      target: {},
    });

    // PLAY event
    onStateChange(mockEvent(PLAYER_STATES.PLAYING));
    expect(onTrackEvent).toHaveBeenCalledWith(
      expect.objectContaining({ type: VIDEO_EVENT_TYPES.PLAY })
    );

    // PAUSE event
    onStateChange(mockEvent(PLAYER_STATES.PAUSED));
    expect(onTrackEvent).toHaveBeenCalledWith(
      expect.objectContaining({ type: VIDEO_EVENT_TYPES.PAUSE })
    );

    // SEEK (via BUFFERING) event
    onStateChange(mockEvent(PLAYER_STATES.BUFFERING));
    expect(onTrackEvent).toHaveBeenCalledWith(
      expect.objectContaining({ type: VIDEO_EVENT_TYPES.SEEK })
    );

    // Assert total calls
    expect(onTrackEvent).toHaveBeenCalledTimes(3);
  });
});
