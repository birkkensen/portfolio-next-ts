import Image from 'next/image';
import blurData from '../public/blurDataUrl.json';
import { useState } from 'react';

const Intro = () => {
	const [loading, setLoading] = useState<boolean>(true);

	return (
		<>
			<section className='flex flex-wrap justify-between'>
				<div className='md:w-1/2 w-full'>
					<h2 className='font-bold text-5xl text-charcoal mb-6'>
						Hello, I&apos;m <br />
						Birk Kensén
					</h2>

					<div className='flex flex-col gap-4'>
						<p className=' text-gray-600'>
							I am soon graduating from Hyper Island. I am currently finishing up my internship at
							G-Loot, where I have been working as a frontend developer. Throughout my time at
							G-Loot, I have gained a strong understanding of technologies such as React and
							TypeScript. I have also had the opportunity to lead the frontend team of interns,
							giving me valuable experience in team management and leadership. I am now actively
							seeking a full-time position as a frontend developer, where I can continue to grow and
							develop my skills in this field and pursue my love for coding.
						</p>
						<p className=' text-gray-600'>
							Don&apos;t hesitate to contact me if you wish to know more about me.
						</p>
					</div>
					<div className='my-5 flex items-center'>
						<a
							className='font-bold text-white bg-charcoal px-5 py-3 rounded-lg opacity-100 transition-all duration-300 ease-in-out hover:opacity-90 hover:rounded-3xl'
							href='mailto:birk.kensen@hyperisland.se'
						>
							Contact
						</a>
						<a
							className='flex flex-col items-center justify-center w-40 h-10 ml-4 group transition-all duration-300 ease-in-out'
							href='/resume/Resume-min.pdf'
							download
						>
							<span className='text-charcoal font-bold'>Download CV</span>
							<span className='mt-2 w-11/12 h-[2px] bg-charcoal transition-all duration-300 ease-in-out group-hover:w-0' />
						</a>
					</div>
				</div>
				<div
					className={
						loading
							? 'placeholder-blob w-full sm:w-1/2 md:w-96 overflow-hidden'
							: 'blob w-full sm:w-1/2 md:w-96 overflow-hidden'
					}
				>
					<Image
						className='md:w-96'
						src='/images/me/meOnABike.jpeg'
						alt='Me on my bike:)'
						width='384px'
						height='576px'
						layout='responsive'
						objectFit='cover'
						priority={true}
						placeholder='blur'
						blurDataURL={`data:image/jpeg;base64,${blurData.base64}`}
						onLoadingComplete={() => setLoading(false)}
					/>
				</div>
			</section>
		</>
	);
};

export default Intro;
