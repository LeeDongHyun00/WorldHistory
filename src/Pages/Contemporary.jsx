import EventsHeader from "./EventsHeader";
import EventsList from "./EventsList";
import { useEffect } from "react";

export default function Contemporary({ name, description, color, events }) {
  return (
    <div>
          <div>
            <EventsHeader
              name={name}
              description={description}
              color={color}
            ></EventsHeader>
            <EventsList events={events}></EventsList>
          </div>
        </div>
  );
}
