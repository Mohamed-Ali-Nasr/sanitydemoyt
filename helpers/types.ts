export interface post {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  comments: Comment[];
  description: string;
  mainImage: { asset: { url: string } };
  slug: { current: string };
  body: [Object];
}

export interface Props {
  posts: [post];
}

export interface IForm {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

export interface Comment {
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post: {
    _type: string;
    _ref: string;
  };
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
