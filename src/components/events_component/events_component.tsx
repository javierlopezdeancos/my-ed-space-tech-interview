import { type JSX } from "react"
import { TextComponent } from "../text_component/text_component"
import { type VideoEvent } from "../../events/video_event"
import { BadgeComponent } from "../badge_component/badge_component"

export const EventsComponent = ({ title = 'Events', events }: { title?: string , events: VideoEvent[]}): JSX.Element =>  {
  return (
    <div className="flex flex-col w-full gap-5">
      <TextComponent as='h2' variant="h2" className="border-b pb-2 border-black">{title}</TextComponent>
      {events.length > 0 ? (
        <ul className='flex flex-col gap-2 overflow-x-hidden overflow-y-auto h-[385px]'>
          {events.map((event) => (
            <li key={event.timestamp} className="text-gray-700 flex items-center gap-2">
              <BadgeComponent className="w-20 inline-block">{event.type}</BadgeComponent>
              <BadgeComponent className="bg-gray-100 text-gray-600">
                {new Date(event.timestamp).toLocaleTimeString()}
              </BadgeComponent>
            </li>
          ))}
        </ul>
      ) : (
        <TextComponent as="p" variant="body" className="text-lg">No events tracked yet.</TextComponent>
      )}
    </div>
  )
}
