import Link from 'next/link';
import { ImLinkedin, ImGithub } from 'react-icons/im';
const Navbar: React.FC = (): JSX.Element => {
	return (
		<nav className='flex items-center justify-between mt-8 mb-16'>
			<Link href='/'>
				<a className='text-4xl font-bold text-charcoal'>birk</a>
			</Link>
			<ul className='flex text-3xl text-charcoal opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-90'>
				<li>
					<a href='https://github.com/birkkensen' target='_blank' rel='noreferrer'>
						<ImGithub />
					</a>
				</li>
				<li className='ml-4'>
					<a href='https://www.linkedin.com/in/birkkensen/' target='_blank' rel='noreferrer'>
						<ImLinkedin />
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
