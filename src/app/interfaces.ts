export interface Contact {
  id: number;
  name: string;
  surname: string;
  phone: number;
  customFields: [{ [key: string]: string }];
  link?: string;
}
