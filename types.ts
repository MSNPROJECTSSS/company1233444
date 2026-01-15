export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Student {
  id: number;
  name: string;
  email: string;
  status: 'Pending' | 'Approved';
  projectStatus?: 'Pending' | 'Approved';
  paymentDetails?: {
    totalFee: number;
    amountPaid: number;
    status: 'Paid' | 'Pending' | 'Partially Paid';
  };
  projectDocuments?: string[];
}