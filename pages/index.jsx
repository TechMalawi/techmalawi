import { ArrowRightIcon, CheckboxIcon } from '@primer/octicons-react';
import Link from 'next/link';

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

			<div className="flex gap-3">
				<div className="md:w-52 mt-4">
					<Link href="/join">
						<a href="" className="btn-primary flex items-center justify-center gap-4">
							Join Us <ArrowRightIcon />
						</a>
					</Link>
				</div>
				<div className="md:w-52 mt-4">
					<Link href="/about">
						<a href="" className="btn-primary-outline flex items-center justify-center gap-4">
							Learn More <ArrowRightIcon />
						</a>
					</Link>
				</div>
			</div>
		</div>

		<div
			style={{
				minHeight: '60vh',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundImage: 'url(../home-bg.svg)',
			}}
			className="flex justify-center w-full items-center"
		>
			<div className="md:p-20 p-10">
				<h4 className="title-text text-malawi-blue text-center">
					A community place to learn, grow and share
				</h4>
				<p className="sub-title-text text-malawi-white text-center">
					Tech Malawi is a community which is striving to showcase the tech scene in the country
				</p>
				<h4 className="text-white text-center">
					With TechMalawi, you are at a place where you meet like minded people who are willing to
					connect with you and share their experience.
				</h4>
			</div>
		</div>

		<div className="bg-malawi-blue md:p-20 p-10 gap-3 flex flex-col md:grid md:grid-cols-5">
			<div className="col-span-3 flex flex-col justify-between bg-slate-200 p-10 rounded">
				<div>
					<h4 className="title-text text-malawi-blue">Learn</h4>
					<p className="sub-title-text-slim ">
						Every Sunday, we have a series of events where you can learn about:
					</p>
					<ul>
						<li className="flex gap-2  items-center">
							<CheckboxIcon /> Latest Technological Advances
						</li>
						<li className="flex gap-2  items-center">
							<CheckboxIcon /> Software Development
						</li>
						<li className="flex gap-2  items-center">
							<CheckboxIcon /> Network Engineering
						</li>
						<li className="flex gap-2  items-center">
							<CheckboxIcon /> Data Science & Analytics
						</li>
						<li className="flex gap-2  items-center">
							<CheckboxIcon /> Product Design
						</li>
						<li className="flex gap-2  items-center">
							<CheckboxIcon /> Drone Technology
						</li>
						<li className="flex gap-2  items-center">
							<CheckboxIcon /> Blockchain Technology
						</li>
					</ul>
				</div>
				<div className="bg-malawi-blue p-2 rounded">
					All Malawians are welcome to be a part of this community
				</div>
			</div>
			<div>
				<img src="/das.png" alt="" />
				<img src="/lin.png" alt="" />
			</div>
		</div>

		<div className="bg-malawi-blue md:p-20 p-10 gap-3 flex flex-col md:grid md:grid-cols-5">
			<div className="md:col-span-3 gap-4 flex flex-col justify-between bg-slate-200 p-10 rounded">
				<h4 className="title-text text-malawi-blue">Share</h4>
				<p className="sub-title-text-slim">
					Any one on our platform is welcome to share their knowledge and experience.
				</p>
				<p>
					Through this platform, people are given the chance to share their knowledge with others.
					This in turn can advance one&apos;s understanding of the subject matter being shared.
				</p>

				<img src="/share.png" alt="" />
			</div>

			<div className="md:p-20 p-10 gap-3">
				<p className="sub-title-text-slim">FAQs</p>
				1. How can I organize a training ? 2. How can I organize a training ?
			</div>
		</div>

		<div className=" flex flex-col items-center justify-center bg-slate-200 md:p-20 p-10 rounded">
			<h4 className="title-text text-malawi-blue">Grow</h4>
			<p className="sub-title-text-slim ">
				Our community is growing every day. Through incredible trainings done by our fellows, their
				is a chance you can grow your professional career.
			</p>
		</div>
	</AppLayout>
);

export default HomePage;
