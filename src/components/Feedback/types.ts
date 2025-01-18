export interface IAuthor {
  name: string;
  location: string;
  image: string;
}

export interface IFeedback {
  stars: number;
  title: string;
  text: string;
  author: IAuthor;
}
