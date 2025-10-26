export const PLAYER_STATES = {
  UN_STARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
} as const;

type ValueOf<T> = T[keyof T];

export type PlayerState = ValueOf<typeof PLAYER_STATES>;
