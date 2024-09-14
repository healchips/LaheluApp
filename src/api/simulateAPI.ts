import { PostType } from "../types/post";

export const getPosts = async (page: number): Promise<PostType[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const posts = Array.from({ length: 10 }).map((_, index) => ({
          id: `post_${page}_${index}`,
          username: 'theundertaker02',
          imageUri: 'https://assets.kompasiana.com/items/album/2023/05/15/9a24d48eafa6ba090c13cb91bcda5323-6462152e08a8b53812152342.jpg?t=o&v=300',
          caption: 'Sudah kubilang jangan lawan King Indonesia',
          koin: 43,
          tag: 'lucu',
        }));
        resolve(posts);
      }, 1000);
    });
  };
  