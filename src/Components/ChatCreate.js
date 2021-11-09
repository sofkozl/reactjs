import { nanoid } from 'nanoid';

const createChatMock = (i) => ({
  id: nanoid(),
  name: `user ${i}`
});

export const CHATS = Array.from({ lrngth: 10}).map((_,i) =>
  createChatMock(i)
);