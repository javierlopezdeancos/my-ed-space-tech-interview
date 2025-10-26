import { render, screen, act } from '@testing-library/react';
import { vi } from 'vitest';
import { MyEdSpaceApp } from './app';
import { AuthContext } from './contexts/auth_context';
import { VIDEO_EVENT_TYPES, type VideoEvent } from './events/video_event';

vi.mock(
  './components/streaming_video_component/streaming_video_component',
  () => ({
    StreamingVideoComponent: ({
      onTrackEvent,
    }: {
      onTrackEvent: (event: VideoEvent) => void;
    }) => {
      window.mockOnTrackEvent = onTrackEvent;
      return <div data-testid="streaming-video-component" />;
    },
  })
);

describe('MyEdSpaceApp', () => {
  it('should not show the video to unauthenticated users', () => {
    render(
      <AuthContext.Provider
        value={{ isLoggedIn: false, login: () => {}, logout: () => {} }}
      >
        <MyEdSpaceApp />
      </AuthContext.Provider>
    );

    expect(
      screen.getByText('Please log in to view the livestream.')
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId('streaming-video-component')
    ).not.toBeInTheDocument();
  });

  it('should track user interactions correctly', () => {
    render(
      <AuthContext.Provider
        value={{ isLoggedIn: true, login: () => {}, logout: () => {} }}
      >
        <MyEdSpaceApp />
      </AuthContext.Provider>
    );

    const playEvent = { type: VIDEO_EVENT_TYPES.PLAY, timestamp: Date.now() };

    act(() => {
      window.mockOnTrackEvent(playEvent);
    });

    expect(screen.getByText(VIDEO_EVENT_TYPES.PLAY)).toBeInTheDocument();
  });
});
