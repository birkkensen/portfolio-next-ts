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
  coverImage: CoverImage;
  description: string;
  duration: string;
  links: string[];
  images: Images;
  order: number;
  tags: string;
  slug: string;
  date: string;
  name: string;
  id: string;
};
