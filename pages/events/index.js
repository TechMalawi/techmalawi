import groq from 'groq';
import Link from 'next/link';

import AppLayout from '../../core/layout/AppLayout';
import sanityClient from '../../core/sanity/sanity-client';
import EventsWrapper from './components/events-wraper';

const Events = ({ events }) => (
	// const [mappedPosts, setMappedPosts] = useState([]);
	// useEffect(() => {
	// 	if (posts.length) {
	// 		const imageBuilder = imageUrlBuilder(sanityClient);
	// 		setMappedPosts(
	// 			posts.map((post) => ({
	// 				...post,
	// 				mainImage: imageBuilder.image(post.mainImage).width(450).height(500),
	// 			}))
	// 		);
	// 	} else {
	// 		setMappedPosts([]);
	// 	}
	// }, [posts]);

	<AppLayout>
		<div className="text-center p-20 h-screen">
			<div className="md:m-15 md-20 flex items-center justify-center flex-col">
				<div className="grid bg-slate-200 grid-cols-4">
					<div className="col-span-3 gap-3 flex justify-center flex-col items-center">
						<h4 className="title-text text-malawi-blue text-center">Every Sunday at 6:00pm</h4>
						<p className="sub-title-text  text-center">#TechTalk -- We hold events</p>
						<Link href="/join">
							<a className="btn-primary w-52 text-sm">Request Access</a>
						</Link>
					</div>

					<div>
						<img src="/general.png" alt="" />
					</div>
				</div>
			</div>

			<div className="md:m-15 md-20 flex  py-20  flex-col">
				<h4 className="title-text text-malawi-blue text-center">More Events</h4>
				<EventsWrapper events={events} />
			</div>
		</div>
	</AppLayout>
);
export const getServerSideProps = async () => {
	const events = await sanityClient.fetch(groq`*[_type == "events"]`);

	return {
		props: {
			events,
		},
	};
};

export default Events;
