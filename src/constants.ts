import { getAuthors } from './Authors';

export const authors: string[] = getAuthors(process.argv[2]);

export let getRandomAuthor = (): string => {
  return authors[Math.floor(Math.random() * Math.floor(authors.length))];
};
