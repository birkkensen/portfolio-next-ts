import Image from "next/image";
// TODO: Fix type <any>
interface IProps {
  images: string[];
  alt: string;
  objectFit: any;
}
const ProjectImages: React.FC<IProps> = ({ images, alt, objectFit }): JSX.Element => {
  return (
    <>
      {images.map((image, i) => {
        return (
          <div key={i} className="mt-0 mx-5 mb-6 shadow-xl">
            <Image
              className="rounded-2xl"
              src={image}
              alt={alt}
              objectFit={objectFit}
              width={1140}
              height={690}
              layout="responsive"
            />
          </div>
        );
      })}
    </>
  );
};

export default ProjectImages;
