import { useEffect } from "react";
import EventsHeader from "./EventsHeader";
import EventsList from "./EventsList";

export default function Ancient({ name, description, color, events }) {

  return (
    <div className="era-section">
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
