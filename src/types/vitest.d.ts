import 'vitest';
import { type VideoEvent } from '../events/video_event';

declare global {
  const vi: typeof import('vitest');
  interface Window {
    mockOnTrackEvent: (event: VideoEvent) => void;
  }
}
