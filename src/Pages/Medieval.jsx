import { useEffect } from "react";
import EventsHeader from "./EventsHeader";
import EventsList from "./EventsList";

export default function Medieval({ name, description, color, events }) {
 return (
    <div>
      <EventsHeader name={name} description={description}/>
      <EventsList events={events} />
    </div>
  );
}