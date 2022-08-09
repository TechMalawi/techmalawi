import Image from 'next/image';
import Link from 'next/link';

const BlogCardsContainer = ({ dummyPostsData }) => (
	<section className="w-full px-4 md:px-0 mx-auto py-16">
		<div className="w-full md:w-5/6 mx-auto max-w-screen-lg">
			<h1 className="text-3xl text-malawi-black-dark font-black text-center pt-4">Recent Posts</h1>
			<div className="flex flex-col w-full mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:space-x-0 sm:gap-6 justify-between items-center py-6">
				{/* Map through the posts data */}
				{dummyPostsData &&
					dummyPostsData.map((post) => (
						<div className="bg-malawi-red rounded-md my-4 sm:my-2 min-h-[30rem] relative">
							<Link href={`/blog/${post.slug}`}>
								<a title={post.title}>
									<Image
										src={post.postImage}
										alt={post.title}
										width={400}
										height={200}
										placeholder="blur"
										blurDataURL
									/>
								</a>
							</Link>
							<div className="p-4 pb-6 text-malawi-white">
								<div className="pt-2 pb-3">
									<small className="font-bold mr-4">{post.date}</small>
									{post &&
										post.tags.map((tag) => (
											<small
												key={tag}
												className="mr-2 text-malawi-green bg-malawi-black-dark font-bold px-2 rounded-full text-xs"
											>
												{tag}
											</small>
										))}
								</div>
								<hr />
								<Link href={`/blog/${post.slug}`}>
									<a className="inline-block text-2xl font-bold py-3 transition-all hover:opacity-80">
										{post.title}
									</a>
								</Link>
								<div className="pb-4">
									<p className="text-sm">{post.description}</p>
								</div>
								<Link href={`/blog/${post.slug}`}>
									<a className="inline-block p-2 bg-malawi-black transition-all hover:bg-malawi-white hover:text-malawi-black-dark rounded-sm transform hover:translate-x-2 hover:-translate-y-1 hover:shadow-lg shadow-malawi-black">
										Read More
									</a>
								</Link>
							</div>
						</div>
					))}
			</div>
		</div>
	</section>
);

export default BlogCardsContainer;
