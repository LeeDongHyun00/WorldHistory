import EventsHeader from "./EventsHeader";
import EventsList from "./EventsList";

export default function Contemporary({ name, description, events }) {
  return (
    <div>
          <div>
            <EventsHeader
              name={name}
              description={description}
            ></EventsHeader>
            <EventsList events={events}></EventsList>
          </div>
        </div>
  );
}
