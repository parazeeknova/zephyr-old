export interface Chat {
  id: number;
  name: string;
  lastMessage: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  avatarUrl: string;
}

export interface SharedFile {
  type: string;
  name: string;
  color: string;
}
