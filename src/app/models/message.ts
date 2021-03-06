export class Message {
    id: number;
    messageType: string;
    createDate: Date;
    managementUserId: string;
    message: string;
    isRead: boolean;
    rentalsitesId: number;
    subject: string;
    attachmentSize: number;
    messageAttachments: MessageAttachments[];
}

export class MessageAttachments {
  url: string;
  fileName: string;
  fileSizeKB: number;
  fileType: string;
  createDate: Date;
}
