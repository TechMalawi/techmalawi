import Image from 'next/image';

import AppLayout from '../../core/layout/AppLayout';

const BlogArticle = () => (
	<AppLayout>
		<div className="py-16 text-malawi-black ">
			<article className="w-full px-4 md:w-3/4 lg:w-2/5 mx-auto">
				<Image
					src="/blog-hero-open-book.jpg"
					alt="Alt Text"
					width={600}
					height={400}
					blurDataURL
					placeholder="blur"
				/>
				<br />
				<small className="text-md p-2 pl-0">Posted On: 8 August, 2022</small>
				<div className="">
					<h2 className="text-3xl font-bold py-4">Blog Title</h2>
					<p className="text-sm md:text-md">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod voluptatibus sunt
						dolore, distinctio necessitatibus aperiam saepe nemo recusandae mollitia!
					</p>
				</div>
			</article>
		</div>
	</AppLayout>
);

export default BlogArticle;
