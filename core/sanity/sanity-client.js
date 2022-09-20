import { createClient } from 'next-sanity';

const sanityClient = createClient({
	projectId: 't2cw6u6b',
	dataset: 'production',
	useCdn: false,
	apiVersion: '2022-07-01',
});

export default sanityClient;
