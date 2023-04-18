export interface DonationCase {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export type Donations = Array<DonationCase>;
