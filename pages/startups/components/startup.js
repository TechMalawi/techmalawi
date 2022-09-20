import imageUrlBuilder from '@sanity/image-url';
import React, { useEffect, useState } from 'react';

import sanityClient from '../../../core/sanity/sanity-client';

const Startup = ({ startup }) => {
	const { logo } = startup;
	const [imageUrl, setImageUrl] = useState('');
	useEffect(() => {
		const imageBuilder = imageUrlBuilder(sanityClient);
		setImageUrl(imageBuilder.image(logo));
	}, [logo]);
	return (
		<div className="shadow bg-gray-50 p-2">
			{startup.name}
			{startup.founded}
			{imageUrl && <img className="img-fluid" src={imageUrl} />}
		</div>
	);
};
export default Startup;
