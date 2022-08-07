import BlogCard from './BlogCard';

const BlogCardsContainer = ({ dummyPostsData }) => (
	<section className="w-full px-4 md:px-0 mx-auto py-16">
		<div className="w-full md:w-5/6 mx-auto max-w-screen-lg">
			<h1 className="text-3xl text-malawi-black-dark font-black text-center pt-4">Recent Posts</h1>
			<div className="flex flex-col w-full mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:space-x-0 sm:gap-6 justify-between items-center py-6">
				{/* Map through the posts data */}
				{dummyPostsData && dummyPostsData.map((post) => <BlogCard key={post.id} post={post} />)}
			</div>
		</div>
	</section>
);

export default BlogCardsContainer;
