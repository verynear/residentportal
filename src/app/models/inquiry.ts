export class Inquiry {
    id: number;
    createDate: Date;
    managementUserId: string;
    message: string;
    messageType: string;
    rentalsitesId: number;
    subject: string;
    isRead: boolean;
    selected?: boolean;
    attachmentSize: number;
    isUrgent: number;
    generalInquiryAttachments: GeneralInquiryAttachments[];
}

export class GeneralInquiryAttachments {
  url: string;
  fileName: string;
  fileSizeKB: number;
  fileType: string;
  createDate: Date;
}
