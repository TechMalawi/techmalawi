import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogCard = ({ post }) => (
	<div className="bg-malawi-red rounded-md my-4 sm:my-2 min-h-[30rem] relative">
		<Link href={`blog/${post.slug}`}>
			<a title={post.title}>
				<Image
					src={post.postImage}
					alt="Alt Text"
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
			<Link href={`blog/${post.slug}`}>
				<a className="inline-block text-2xl font-bold py-3 transition-all hover:opacity-80">
					{post.title}
				</a>
			</Link>
			<div className="pb-4">
				<p className="text-sm">{post.description}</p>
			</div>
			<Link href={`blog/${post.slug}`}>
				<a className="inline-block p-2 bg-malawi-black transition-all hover:bg-malawi-white hover:text-malawi-black-dark rounded-sm transform hover:translate-x-2 hover:-translate-y-1 hover:shadow-lg shadow-malawi-black">
					Read More
				</a>
			</Link>
		</div>
	</div>
);

export default BlogCard;
