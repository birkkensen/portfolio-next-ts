import Image from 'next/image';
// TODO: Fix type <any>
interface IProps {
	images: string[];
	alt: string;
	objectFit: any;
}
const ShowcaseImages: React.FC<IProps> = ({ images, alt, objectFit }): JSX.Element => {
	return (
		<>
			{images.map((image, i) => {
				return (
					<div key={i} className='mt-0 mx-5 mb-6 shadow-2xl bg-transparent rounded-2xl'>
						<Image
							className='rounded-2xl bg-transparent'
							src={image}
							alt={alt}
							objectFit={objectFit}
							width={1140}
							height={690}
							layout='responsive'
						/>
					</div>
				);
			})}
		</>
	);
};

export default ShowcaseImages;
