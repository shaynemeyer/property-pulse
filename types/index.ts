import { ReactNode } from "react";

export type InfoBoxProps = {
  heading: string;
  backgroundColor?: string;
  textColor?: string;
  buttonInfo: {
    link: string;
    text: string;
    backgroundColor: string;
  };
  children: ReactNode;
};

export interface IProperty {
  _id: string;
  owner: string;
  name: string;
  type: string;
  description: string;
  location: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: {
    nightly?: number;
    weekly?: number;
    monthly?: number;
  };
  seller_info: {
    name: string;
    email: string;
    phone: string;
  };
  images: string[];
  is_featured: boolean;
}

export interface PropertyProps {
  property: {
    _id: string;
    owner: string;
    name: string;
    type: string;
    description: string;
    location: {
      street: string;
      city: string;
      state: string;
      zipcode: string;
    };
    beds: number;
    baths: number;
    square_feet: number;
    amenities: string[];
    rates: {
      nightly?: number;
      weekly?: number;
      monthly?: number;
    };
    seller_info: {
      name: string;
      email: string;
      phone: string;
    };
    images: string[];
    is_featured: boolean;
    createdAt?: string;
    updatedAt?: string;
  };
}
