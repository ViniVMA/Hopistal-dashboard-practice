import { createContext, ReactNode, useState } from "react";
import { useFetch } from "../hooks/useFetch";

interface Users {
  setCallNumber: number;
  email: string;
  name: {
    first: string;
    last: string;
  };
  login: {
    uuid: string;
  };
  picture: {
    thumbnail: string;
    large: string;
  };
  gender: string;

  dob: {
    date: string;
    age: number;
  };
  phone: string;
  url: string;
  nat: "string";

  location: {
    street: {
      name: string;
      number: number;
    };
    country: string;
    state: string;
  };
}

interface PacientsProviderProps {
  children: ReactNode;
}

export const PacientsContext = createContext<Users[] | null>([]);

export const PacientsProvider = ({ children }: PacientsProviderProps) => {
  const { data: user } = useFetch<Users[]>(
    `https://randomuser.me/api/?results=200`,
  );

  return (
    <PacientsContext.Provider value={user}>{children}</PacientsContext.Provider>
  );
};
