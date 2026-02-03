
export enum AppMode {
  CHAT = 'chat',
  IMAGE = 'image',
  VIDEO = 'video',
  LIVE = 'live'
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ImageResult {
  id: string;
  url: string;
  prompt: string;
  timestamp: Date;
}

export interface VideoResult {
  id: string;
  url: string;
  prompt: string;
  timestamp: Date;
  status: 'pending' | 'completed' | 'failed';
}

export interface LiveTranscription {
  role: 'user' | 'model';
  text: string;
}
