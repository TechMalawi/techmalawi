import EventCard from './event-card';

const EventsWrapper = ({ events }) => {
	if (events.length === 0) {
		return <h1>There are no events available</h1>;
	}
	return (
		<div className="grid grid-cols-4 gap-3">
			{events.map((ev) => (
				<EventCard event={ev} />
			))}
		</div>
	);
};

export default EventsWrapper;
