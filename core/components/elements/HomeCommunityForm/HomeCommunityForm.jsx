import Image from 'next/image';

const HomeCommunityForm = () => (
	<section>
		<div className="container max-w-[1400px] mx-auto">
			<h1 className="text-xl mx-auto text-center font-bold text-white text-2xl md:text-5xl md:mb-4">
				Be a part of the Community
			</h1>
			<div className="flex flex-col sm:flex-row justify-center items-center gap-8 p-4 text-white rounded-sm bg-gray-linear">
				<div className="w-full h-[320px] sm:h-[400px] relative">
					<Image src="/images/community-section-image.svg" alt="Tech Malawi" layout="fill" />
				</div>
				<form className="w-full flex flex-col gap-2 sm:gap-5 md:gap-8 lg:gap-14">
					<h2 className="text-lg md:text-3xl font-bold">Sign up for a free account</h2>
					<div className="flex items-center gap-2">
						<input type="text" className="text-input w-1/2" placeholder="First Name" />
						<input type="text" className="text-input w-1/2" placeholder="Last Name" />
					</div>
					<input type="email" className="text-input" placeholder="Email address" />
					<input type="password" className="text-input" placeholder="Create password" />
					<input type="submit" className="btn-primary hover:duration-500 sm:w-[30%] cursor-pointer" value="Register" />
				</form>
			</div>
		</div>
	</section>
);

export default HomeCommunityForm;
