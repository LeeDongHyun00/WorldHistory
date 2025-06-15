import { useEffect } from "react";
import EventsHeader from "./EventsHeader";
import EventsList from "./EventsList";

export default function Enlightenment({ name, description, color, events }) {
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
