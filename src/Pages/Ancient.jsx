import EventsHeader from "./EventsHeader";
import EventsList from "./EventsList";

export default function Ancient({ name, description, events }) {

  return (
    <div className="era-section">
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
