import Link from 'next/link';

const MainFooter = () => (
	<footer className="bg-malawi-black-dark flex flex-col justify-center text-malawi-white p-4 sm:px-12 items-center  ">
		<div className="max-w-[1400px] w-full flex flex-col sm:flex-row sm:gap-12 justify-center px-2 gap-4">
			<div className="flex flex-col sm:w-[50%] gap-1">
				<h4 className="text-lg font-bold font-montserrat">TechMalawi</h4>
				<p className="text-sm">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua.
				</p>
			</div>
			<div className="flex sm:w-[50%] gap-4">
				<div className="flex flex-col w-1/2">
					<h4 className="text-lg font-bold font-montserrat">Community</h4>
					<Link href="/blog/">
						<a>Blog</a>
					</Link>
					<Link href="/trainings/">
						<a>Trainings</a>
					</Link>
					<Link href="/live-events/">
						<a>Live events</a>
					</Link>
				</div>
				<div className="flex flex-col w-1/2">
					<h4 className="text-lg font-bold font-montserrat">Quick Links</h4>
					<Link href="/projects/">
						<a>Projects</a>
					</Link>
					<Link href="/events/">
						<a>Events</a>
					</Link>
					<Link href="/startups/">
						<a>Startups</a>
					</Link>
				</div>
			</div>
		</div>
		<p className="text-center opacity-80 mt-8"> Tech Malawi © {new Date().getFullYear()}</p>
	</footer>
);

export default MainFooter;
