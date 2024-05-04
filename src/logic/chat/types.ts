interface Channel {
  name: string;
  type: ChannelType;
  // recipients: User[]
  position?: number;
  messages: Message;
}

const enum ChannelType {
  DM,
  GROUP_DM,
  GUILD_TEXT,
}

interface MessageReference {
  message_id: string;
  channel_id: string;
}

export interface Attachment {
  id: string;
  filename: string;
  description?: string;
  content_type?: string;
  size: number;
  url: string;
  height?: number;
  width?: number;
}

export interface Message {
  content: string;
  author: User;
  timestamp: Date;
  message_reference?: MessageReference;
  attachments?: Attachment[];
}

export interface User {
  username: string;
  discriminator: number;
  avatar?: string;
}

export interface Emoji {
  id: string;
  name: string;
}

export interface Reaction {
  count: number;
  emoji: Emoji;
}

export enum PermissionFlag {
  ADMINISTRATOR = 1 << 0,
  SEND_MESSAGES = 1 << 1,
  MANAGE_MESSAGES,
}

export interface Role {
  name: string;
  color: string;
  hoist: boolean;
  position: number;
  permissions: string;
  mentionable: boolean;
  icon?: string;
}
