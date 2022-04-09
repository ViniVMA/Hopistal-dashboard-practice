import { createContext, ReactNode, useState } from "react";
import { useFetch } from "../hooks/useFetch";

interface Users {
  refetch: () => void;

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

export const PacientsContext = createContext<any>([]);

export const PacientsProvider = ({ children }: PacientsProviderProps) => {
  const [refetchData, setRefetchData] = useState(10);

  const { data: user, refetch } = useFetch<Users[]>(
    `https://randomuser.me/api/?results=${refetchData}`,
  );

  const handleRefetch = async () => {
    console.log("before async");
    console.log(refetchData);
    await setRefetchData(refetchData + 10);
    console.log(refetchData);

    refetch();
    console.log("after refetch");
  };

  return (
    <PacientsContext.Provider value={{ user, handleRefetch }}>
      {children}
    </PacientsContext.Provider>
  );
};
