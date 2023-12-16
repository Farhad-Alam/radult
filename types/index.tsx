type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface Banners extends Base {
  description: string;
  header2: string;
  hedaer1: string;
}
export interface Movie extends Base {
  author: Author[];
  casts: string;
  country: string;
  director: string;
  doodStream: string;
  streamSB: string;
  fileMoon: string;
  downloadLink: string;
  gdriveLink: string;
  zipFile: string;
  genre: string;
  genres: Featured[];
  language: Featured[];
  quality: Featured[];
  type: Featured[];
  year: Featured[];
  dramas: Featured[];
  rating: number;
  duration: number;
  released: number;
  categories: Category[];
  bannerImg: Image[];
  mainImage: Image[];
  screenImage: Image[];
  comments: Comments[];
  title: string;
  slug: Slug;
  description: string;
  dramasLink: DramasLink[];
}
export interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}
export interface Comments extends Base {
  _createdAt: string;
  comment: string;
  name: string;
}
export interface About extends Base {
  title: string;
  desc: string;
  image: Image;
}
export interface MustWatch extends Base {
  title: string;
  link: string;
  mainImage: Image;
}
export interface Member extends Base {
  title: string;
  work: string;
  image: Image;
}
export interface Category extends Base {
  title: string;
  slug: Slug;
  description: string;
  image: Image;
}
export interface Featured extends Base {
  title: string;
}
export interface DramasLink extends Base {
  title: string;
  watchLink: string;
  downloadLink: string;
}
export interface Profile extends Base {
  title: string;
  work: string;
  image: Image;
  images: Images;
  description: string;
}

export interface Image {
  _type: "image";
  asset: Reference;
}
export interface Images {
  _key: string;
  _type: "image";
  asset: Reference;
}
export interface Reference {
  _ref: string;
  _type: "reference";
}
export interface Slug {
  _type: "slug";
  current: string;
}
export interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

export interface Block {
  _key: "slug";
  _type: "block";
  children: Span[];
  style: "normal" | "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}
