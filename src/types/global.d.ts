declare global {
  interface Window {
    dataLayer?: Array<{
      event: string;
      formType?: string;
      sourcePage?: string;
      [key: string]: any;
    }>;
  }
}

export {};