
import YouTube from 'react-youtube';
import { type VideoEvent } from '../../events/video_event';
import { type YouTubePlayer } from 'react-youtube';
import { VIDEO_EVENT_TYPES } from '../../events/video_event';

export const STREAMING_VIDEO_WIDTH = 800;

export const STREAMING_VIDEO_HEIGHT = STREAMING_VIDEO_WIDTH * (9 / 16);

const STREAMING_VIDEO_OPTIONS = {
  width: STREAMING_VIDEO_WIDTH,
  height: STREAMING_VIDEO_HEIGHT,
  playerVars: {
    autoplay: 0,
    controls: 1,
  },
};

const PLAYER_STATES = {
  UN_STARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
} as const;

type ValueOf<T> = T[keyof T];

export type PlayerState = ValueOf<typeof PLAYER_STATES>;

export function StreamingVideoComponent({ onTrackEvent }: {
  onTrackEvent: (event: VideoEvent) => void;
}) {
  const handlePlayerStateChange = (event: { data: number; target: YouTubePlayer }) => {
    const timestamp = Date.now();

    switch (event.data) {
      case PLAYER_STATES.PLAYING:
        onTrackEvent({ type: VIDEO_EVENT_TYPES.PLAY, timestamp });
        break;
      case PLAYER_STATES.PAUSED:
        onTrackEvent({ type: VIDEO_EVENT_TYPES.PAUSE, timestamp });
        break;
      case PLAYER_STATES.BUFFERING:
        // NOTE:
        // A buffering event often precedes a seek action.
        // This is a common way to approximate seek tracking.
        onTrackEvent({ type: VIDEO_EVENT_TYPES.SEEK, timestamp });
        break;
    }
  };

  return (
    <div className="w-full">
      <YouTube
        videoId="hzYOA4-xNaA"
        opts={STREAMING_VIDEO_OPTIONS}
        onStateChange={handlePlayerStateChange}
        className="w-full h-full"
      />
    </div>
  );
}
