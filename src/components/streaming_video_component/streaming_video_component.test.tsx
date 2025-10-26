
/*
/// <reference types="vitest/globals" />

import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { StreamingVideoComponent } from './streaming_video_component';
import { useAuthContextHook } from '../../contexts/auth_context_hook';
import YouTube from 'react-youtube';

// Mock the useAuth hook
vi.mock('../../contexts/auth_context_hook', () => ({
  useAuthContextHook: vi.fn(),
}));

// Mock the react-youtube component
vi.mock('react-youtube', () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid="mock-youtube-player"></div>),
}));

describe('StreamingViewComponent', () => {
  const onTrackEvent = vi.fn();
  const mockedUseAuth = useAuthContextHook as vi.Mock;
  const MockYouTube = vi.mocked(YouTube);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should display a login message when the user is not authenticated', () => {
    // Arrange
    mockedUseAuth.mockReturnValue({ isLoggedIn: false });

    // Act
    render(<StreamingVideoComponent onTrackEvent={onTrackEvent} />);

    // Assert
    expect(screen.getByText('Please log in to view the livestream.')).toBeInTheDocument();
    expect(MockYouTube).not.toHaveBeenCalled();
  });

  it('should display the YouTube player when the user is authenticated', () => {
    // Arrange
    mockedUseAuth.mockReturnValue({ isLoggedIn: true });

    // Act
    render(<StreamingVideoComponent onTrackEvent={onTrackEvent} />);

    // Assert
    expect(screen.queryByText('Please log in to view the livestream.')).not.toBeInTheDocument();
    expect(MockYouTube).toHaveBeenCalledOnce();
    expect(screen.getByTestId('mock-youtube-player')).toBeInTheDocument();
  });

  it('should track events correctly when the player state changes', () => {
    // Arrange
    mockedUseAuth.mockReturnValue({ isLoggedIn: true });

    // Act
    render(<StreamingVideoComponent onTrackEvent={onTrackEvent} />);

    // Get the onStateChange prop from the mocked YouTube component
    const onStateChange = MockYouTube.mock.calls[0][0].onStateChange;
    expect(onStateChange).toBeInstanceOf(Function);

    const mockEvent = (data: number) => ({
      data,
      target: {},
    });

    // Simulate PLAY event
    onStateChange(mockEvent(1));
    expect(onTrackEvent).toHaveBeenCalledWith(expect.objectContaining({ type: 'play' }));

    // Simulate PAUSE event
    onStateChange(mockEvent(2));
    expect(onTrackEvent).toHaveBeenCalledWith(expect.objectContaining({ type: 'pause' }));

    // Simulate SEEK (via BUFFERING) event
    onStateChange(mockEvent(3));
    expect(onTrackEvent).toHaveBeenCalledWith(expect.objectContaining({ type: 'seek' }));

    // Assert total calls
    expect(onTrackEvent).toHaveBeenCalledTimes(3);
  });
});
*/
