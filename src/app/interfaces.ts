export interface Contact {
  id: string;
  name: string;
  surname: string;
  phone: string;
  customFields: [{ [key: string]: string }];
  link?: string;
}
