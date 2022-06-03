import MainNavBar from '../components/navigation/MainNavBar';
import MainFooter from '../components/navigation/MainFooter';

function AppLayout({ children }) {
	return (
		<div className="bg-malawi-black  w-full">
			<MainNavBar />
			<div className="h-full w-full">{children}</div>

			<MainFooter />
		</div>
	);
}

export default AppLayout;
