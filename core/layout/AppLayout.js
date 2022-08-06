import MainFooter from '../components/navigation/MainFooter';
import MainNavBar from '../components/navigation/MainNavBar';

const AppLayout = ({ children }) => (
	<div className="  w-full">
		<MainNavBar />
		<div className="h-full w-full">{children}</div>

		<MainFooter />
	</div>
);

export default AppLayout;
