import Image from 'next/image';
import useBlurData from '../hooks/useBlurData';
import { useEffect, useState } from 'react';

const Intro: React.FC = (): JSX.Element => {
	const [blurDataUrls] = useBlurData(['L7H.Qb?b~q%MD%~q-;WBIUIUM{IU']);
	const [blurData, setBlurData] = useState<string>();

	useEffect(() => {
		if (blurData) return;
		setBlurData(blurDataUrls[0]);
	}, [blurDataUrls, blurData]);

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
						Now, I&apos;m looking for an internship, starting September this year. So far I&apos;ve
						done everything from creating a simple web page in just HTML / CSS, to making web
						applications using Next.js and Typescript (like this website). I have worked a lot with
						different APIs, Node.js and React. I&apos;m looking forward to learn and contribute a
						lot more during an internship. I don&apos;t know yet which my career goals are. All I
						know is that I&apos;m 100% sure it has to do with some sort of programming. Right now,
						I&apos;m still exploring all the possibilities code has to offer, and all the different
						ways I can express my creativity with it. Don&apos;t hesitate to contact me if you wish
						to know more about me.
					</p>
					<div className='my-5 flex items-center'>
						<a
							className='font-bold text-white bg-charcoal px-5 py-3 rounded-lg opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-90'
							href='mailto:birk.kensen@hyperisland.se'
						>
							Contact
						</a>
						<a
							className='flex flex-col items-center justify-center w-40 h-10 ml-4 group transition-all duration-300 ease-in-out'
							href='/resume/cv.pdf'
							download
						>
							<div className='text-charcoal font-bold'>Download CV</div>
							<div className='mt-2 w-11/12 h-[2px] rounded bg-charcoal transition-all duration-300 ease-in-out group-hover:w-0'></div>
						</a>
					</div>
				</div>
				<div className='w-full sm:w-1/2 md:w-96 overflow-hidden rounded-2xl'>
					{blurData && (
						<Image
							className='rounded-2xl md:w-96 transition-all duration-500 ease-linear'
							src='/images/me/meOnABike.jpeg'
							alt='Me on my bike:)'
							width='100%'
							height='150%'
							layout='responsive'
							objectFit='cover'
							priority={true}
							placeholder='blur'
							blurDataURL={blurData}
						/>
					)}
				</div>
			</section>
		</>
	);
};

export default Intro;
