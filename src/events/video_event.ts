export const VIDEO_EVENT_TYPES = {
  PLAY: 'play',
  PAUSE: 'pause',
  SEEK: 'seek',
} as const;

type ValueOf<T> = T[keyof T];

export type VideoEventType = ValueOf<typeof VIDEO_EVENT_TYPES>;

export type VideoEvent = {
  type: VideoEventType;
  timestamp: number;
}
