import { ArrowRightIcon } from '@primer/octicons-react';
import Link from 'next/link';

import HomeCommunityForm from '../core/components/elements/HomeCommunityForm/HomeCommunityForm';
import TextLogo from '../core/components/misc/TextLogo';
import AppLayout from '../core/layout/AppLayout';

const HomePage = () => (
	<AppLayout>
		<div
			className="md:m-15 md-20 flex gap-4 flex-col justify-center items-center md:h-[60vh] h-[35vh]"
			style={{
				backgroundImage:
					'linear-gradient(to bottom, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.85)), url(../sg.jpeg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className="title-text text-white flex gap-2 ">
				Welcome to <TextLogo />
			</div>
			<p className="sub-title-text text-white ">A central Hub for everything tech in Malawi.</p>

			<div className="md:w-52 mt-4">
				<Link href="/about">
					<a href="" className="btn-primary flex items-center justify-center gap-4">
						Learn More <ArrowRightIcon />
					</a>
				</Link>
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
