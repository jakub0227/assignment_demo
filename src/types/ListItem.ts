export type ListItem = {
  id: number;
  from: string;
  sent_date: string;
  is_unread: boolean;
  subject: string;
  snippet?: string;
};
