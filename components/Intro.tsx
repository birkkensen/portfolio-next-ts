import Image from 'next/image';
import base64 from '../public/images/me/base64.json';

const Intro: React.FC = (): JSX.Element => {
	return (
		<>
			<section className='flex flex-wrap justify-between'>
				<div className='md:w-1/2 w-full'>
					<h2 className='font-bold text-5xl text-charcoal mb-6'>
						Hello, I&apos;m <br />
						Birk Kensén
					</h2>
					<p className=' text-gray-600'>
						I&apos;m currently studying the Frontend Developer program at Hyper Island in Stockholm.
						Now, I&apos;m looking for an internship, starting in September this year. So far
						I&apos;ve done everything from creating a simple web page in just HTML / CSS, to making
						web applications using Next.js and Typescript (like this website). I&apos;ve also worked
						a lot with different APIs, Node.js and Phaser. I&apos;m looking forward to learning and
						contributing a lot more during an internship.
						<br />
						<br />I don&apos;t know what my career goal is. All I know is that I&apos;m 100% sure it
						has to do with some sort of programming. Right now I&apos;m still exploring all the
						possibilities code has to offer, all the different ways I can express my creativity with
						it. Don&apos;t hesitate to contact me if you have any questions. :)
					</p>
					<div className='my-5 flex items-center'>
						<a
							className='font-bold text-white bg-charcoal px-5 py-3 rounded-lg opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-90'
							href='mailto:birk.kensen@gmail.com'
						>
							Contact
						</a>
						<a
							className='flex flex-col items-center justify-center w-40 h-10 ml-4 group transition-all duration-300 ease-in-out'
							href='/resume/cv-new.pdf'
							download
						>
							<div className='text-charcoal font-bold'>Download CV</div>
							<div className='mt-2 w-11/12 h-[2px] rounded bg-charcoal transition-all duration-300 ease-in-out group-hover:w-0'></div>
						</a>
					</div>
				</div>
				<div className='w-full sm:w-1/2 md:w-96'>
					<Image
						className='rounded-2xl md:w-96'
						src='/images/me/meOnABike.jpeg'
						alt='Me on my bike:)'
						width='100%'
						height='150%'
						layout='responsive'
						objectFit='cover'
						priority={true}
						placeholder='blur'
						blurDataURL={base64.image.data}
					/>
				</div>
			</section>
		</>
	);
};

export default Intro;
