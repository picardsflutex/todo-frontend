import { User } from "..";
import { ChatType } from "../enums";

export interface ChatParticipant {
  id: number;
  chat: Chat;
  chatId: number;
  user: User;
  userId: number;
}

export interface Chat {
  id: number;
  name?: string | null;
  type: ChatType;
  createdAt: Date;
  participants: ChatParticipant[];
  messages: Message[];
}

export interface Message {
  id: number;
  content: string;
  sender: User;
  senderId: number;
  chat: Chat;
  chatId: number;
  createdAt: Date;
  updatedAt: Date;
}