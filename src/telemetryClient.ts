export enum MessageType {
  Success,
  Warning,
  Error,
}

export interface Message {
  text: string;
  type?: MessageType;
}

export class TelemetryClient {
  constructor() { }

  public async log(message: Message): Promise<void> {
  }
}
