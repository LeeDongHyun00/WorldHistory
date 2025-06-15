import EventsHeader from "./EventsHeader";
import EventsList from "./EventsList";

export default function Renaissance({ name, description, events }) {
  return (
    <div>
      <EventsHeader name={name} description={description}/>
      <EventsList events={events} />
    </div>
  );
}