import imageUrlBuilder from '@sanity/image-url';
import { useEffect, useState } from 'react';

import sanityClient from '../../../core/sanity/sanity-client';

const EventCard = ({ event }) => {
	const { mainImage } = event;
	const [imageUrl, setImageUrl] = useState('');
	useEffect(() => {
		const imageBuilder = imageUrlBuilder(sanityClient);
		setImageUrl(imageBuilder.image(mainImage));
	}, [mainImage]);

	return (
		<div className="shadow p-4">
			<h4>{event.eventName}</h4>
			<h4>{event.eventDate}</h4>
			<hr />
			<h4>Speakers: {event.speakers}</h4>
			{imageUrl && <img className="img-fluid" src={imageUrl} />}
		</div>
	);
};

export default EventCard;
