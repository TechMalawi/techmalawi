import Image from 'next/image';
import Link from 'next/link';

import Button from '../../../core/components/elements/button/index';

const BlogCardsContainer = ({ dummyPostsData }) => (
	<section className="w-full px-4 md:px-0 mx-auto py-16">
		<div className="w-full md:w-5/6 mx-auto max-w-screen-lg">
			<h1 className="text-4xl text-malawi-black-dark font-black text-center py-4">Recent Posts</h1>
			<div className="flex flex-col w-full mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:space-x-0 sm:gap-6 justify-between items-center py-6">
				{dummyPostsData &&
					dummyPostsData.map((post) => (
						<div className="bg-malawi-black rounded-md my-4 sm:my-2">
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
								<div className="mt-2 mb-3">
									<small className="mr-4">{post.date}</small>
									{post &&
										post.tags.map((tag) => (
											<small key={tag}>
												<Link href="/">
													<a className="mr-2 text-malawi-blue bg-malawi-black-dark hover:text-malawi-white px-2 rounded-full text-xs">
														{tag}
													</a>
												</Link>
											</small>
										))}
								</div>
								<hr />
								<Link href={`/blog/${post.slug}`}>
									<a className="font-montserrat sub-title-text inline-block py-4 hover:opacity-80">
										{post.title}
									</a>
								</Link>
								<div className="pb-4">
									<p className="text-sm">{post.description}</p>
								</div>
								<Link href={`/blog/${post.slug}`}>
									<a>
										<Button title="Read More" variant="primary">
											Read More
										</Button>
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
