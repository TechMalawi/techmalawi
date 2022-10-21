import { ArrowRightIcon } from '@primer/octicons-react';
import Link from 'next/link';

import HomeCommunityForm from '../core/components/elements/HomeCommunityForm/HomeCommunityForm';
import TextLogo from '../core/components/misc/TextLogo';
import AppLayout from '../core/layout/AppLayout';

const HomePage = () => (
	<AppLayout>
		<div className="md:m-15 md-20 flex flex-col  md:grid md:grid-cols-5">
			<div className="col-span-3 p-4  md:m-40 flex gap-2 flex-col text-malawi-white">
				<div className="title-text flex gap-2 ">
					Welcome to <TextLogo />
				</div>
				<p className="sub-title-text ">A central Hub for everything tech in Malawi.</p>
				<p className="display-text">
					Become part of the community and help in the growth of technology in malawi by
					contributing to the community projects here.
				</p>
				<div className="md:w-52 mt-4">
					<Link href="/">
						<a href="" className="duration-500 btn-primary flex items-center justify-center gap-4">
							Contribute <ArrowRightIcon />
						</a>
					</Link>
				</div>
			</div>
			<div className="flex flex-col w-full   md:col-span-2 md:pr-10 justify-center items-center">
				<img src="/sample.jpg" className="w-full p-10 md:p-20 rounded-lg" alt="" />
			</div>
		</div>

		<div className="bg-gray-50 mt-10 md:p-20 p-10">
			<h4 className="display-text text-malawi-blue">A community place to learn, grow and share</h4>
			<p>Tech Malawi is a community which is striving to showcase the tech scene in the country</p>
		</div>

		<div className="text-malawi-white mt-10 md:p-20 p-10">We are working towards a lot</div>

		<HomeCommunityForm />
	</AppLayout>
);

export default HomePage;
