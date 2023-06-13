type CoverImage = {
  icons: string[];
  base64: string;
  url: string;
};

type Images = {
  imageUrls: string[];
  base64: string[];
};

export type ProjectDTO = {
  objectFit: "scale-down" | "contain" | "cover" | "none" | "fill";
  links: {
    text: string;
    url: string;
  }[];
  coverImage: CoverImage;
  description: string;
  duration: string;
  images: Images;
  name: string;
  date: string;
  slug: string;
  tags: string;
  id: string;
};
