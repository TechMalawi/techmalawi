import React from 'react';

const BlogHeader = () => (
	<section className="bg-blog-hero bg-cover bg-center w-full mx-auto h-[35vh]">
		<div className="flex flex-col justify-center items-center text-white bg-black bg-opacity-70 w-full h-full text-center">
			<h2 className="text-3xl md:text-4xl block font-black uppercase">Blog</h2>
			<br />
			<p className="text-md font-">
				<em>&quot;Read various topics from various bloggers and contributors.&quot;</em>
			</p>
		</div>
	</section>
);

export default BlogHeader;
