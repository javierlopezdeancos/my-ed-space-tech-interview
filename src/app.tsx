import { useState, type JSX } from 'react';
import clsx from 'clsx';
import { useAuthContextHook } from './contexts/auth_context_hook';
import { StreamingVideoComponent } from './components/streaming_video_component/streaming_video_component';
import { TextComponent } from './components/text_component/text_component';
import { EventsComponent } from './components/events_component/events_component';
import { type VideoEvent } from './events/video_event';
import { AppLayout } from './layouts/app_layout';

export const MyEdSpaceApp = (): JSX.Element => {
  const { isLoggedIn } = useAuthContextHook();
  const [events, setEvents] = useState<VideoEvent[]>([]);

  const handleTrackEvent = (event: VideoEvent) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  return (
    <AppLayout>
       <main className={clsx("flex flex-1 m-auto justify-center items-center gap-10", isLoggedIn && "items-start pt-20")}>
        <div>
          {isLoggedIn
            ? <StreamingVideoComponent onTrackEvent={handleTrackEvent} />
            : <TextComponent as='p' variant="body" className="text-6xl font-bold">
                Please log in to view the livestream.
              </TextComponent>
          }
        </div>
        {isLoggedIn
          ? <aside>
              <EventsComponent events={events} title='Tracked Events'/>
            </aside>
          : null}
      </main>
    </AppLayout>
  );
}
