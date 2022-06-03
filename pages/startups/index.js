import AppLayout from '../../core/layout/AppLayout';
import getIndustries from '../../core/utils/get-industries';
import IndustryCard from './components/industry-card';
import Link from 'next/link';
import React from 'react';

const Startups = () => {
	return (
		<AppLayout>
			<div
				style={{
					backgroundImage: `url('../bg.jpg')`,
					backgroundSize: 'cover',
					backgroundPosition: 'top',
					backgroundRepeat: 'no-repeat',
				}}
				className="md:h-1.5/4"
			>
				<div className="md:m-15 md-20 flex items-center justify-center flex-col">
					<div className="p-4 flex items-center flex-col md:gap-4 gap-2 md:m-40">
						<div className="title-text text-center  text-malawi-blue">
							Malawian Startups Directory
						</div>
						<p className="display-text text-center text-white">
							A central place where you can discover, engage, or invest into start-ups.
						</p>
						<div className="w-3/6 flex justify-center items-center">
							<input className="text-input" type="text" placeholder="Search Startup" />
						</div>

						<Link href="/startups/founder">
							<a className="   mr-4 py-2  ">I am a startup founder</a>
						</Link>
					</div>
				</div>
			</div>

			<div className="grid md:grid-cols-6 grid-cols-2 md:mx-20 md:mt-20 m-10 gap-2">
				{getIndustries().map((industry) => (
					<IndustryCard key={industry} name={industry} />
				))}
			</div>

			<div className="grid md:grid-cols-5 my-10 pb-10 grid-cols-2 p-10 md:mx-20 md:mt-20 m-10 gap-4 bg-gray-50">
				<div className="bg-malawi-blue p-2 text-center">Startup 1</div>
				<div className="bg-malawi-blue p-2 text-center">Startup 1</div>
				<div className="bg-malawi-blue p-2 text-center">Startup 1</div>
				<div className="bg-malawi-blue p-2 text-center">Startup 1</div>
				<div className="bg-malawi-blue p-2 text-center">Startup 1</div>
				<div className="bg-malawi-blue p-2 text-center">Startup 1</div>
				<div className="bg-malawi-blue p-2 text-center">Startup 1</div>
				<div className="bg-malawi-blue p-2 text-center">Startup 1</div>
				<div className="bg-malawi-blue p-2 text-center">Startup 1</div>
				<div className="bg-malawi-blue p-2 text-center">Startup 1</div>
				<div className="bg-malawi-blue p-2 text-center">Startup 1</div>
				<div className="bg-malawi-blue p-2 text-center">Startup 1</div>
				<div className="bg-malawi-blue p-2 text-center">Startup 1</div>
				<div className="bg-malawi-blue p-2 text-center">Startup 1</div>
				<div className="bg-malawi-blue p-2 text-center">Startup 1</div>
			</div>
		</AppLayout>
	);
};

export default Startups;
