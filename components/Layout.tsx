import Navbar from './Navbar';
import Footer from './Footer';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className='mx-5 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl md:mx-auto md:px-4'>
			<Navbar />
			<main className='animate-in'>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
