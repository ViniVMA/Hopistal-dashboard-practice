/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

interface ModalProps {
  handleModalOpen: () => void;
  isModalOpen?: boolean;
  picture?: string;
  first?: string;
  last?: string;
  gender?: string;
  email?: string;
  phone?: string;
  nacionality?: string;
  address?: string;
  id?: string;
  url?: string;
  street?: string;
  state?: string;
  number?: number;
  country?: string;
  isOpen?: string;
}

export const Modal = ({
  handleModalOpen,
  isModalOpen,
  isOpen,
  picture,
  first,
  last,
  gender,
  email,
  phone,
  nacionality,
  id,
  url,
  street,
  state,
  number,
  country,
}: ModalProps) => {
  const [ogUrl, setOgUrl] = useState("");

  useEffect(() => {
    const host = window.location.host;
    const baseUrl = `https://${host}`;

    setOgUrl(baseUrl);
  }, []);

  return (
    <label
      onClick={handleModalOpen}
      htmlFor="my-modal-4 "
      className={`modal cursor-pointer z-40 bg-cyan-900/10 w-full h-screen absolute   ${
        isModalOpen ? "modal-open" : ""
      }  `}
    >
      <label
        onClick={(e) => e.stopPropagation()}
        className="modal-box relative max-h-128 h-full max-w-1/2 w-full overflow-visible flex-col backdrop-blur bg-black/50"
        htmlFor=""
      >
        <img
          src={picture}
          alt="Avatar do Usuario"
          className={`rounded-full  absolute -top-20 right-1.5/2 z-higher border-4 ${
            gender === "female" ? "border-pink-600" : "border-green-600"
          }`}
        />
        <div className="h-full w-full mt-12 flex flex-col align-center gap-32 text-2xl">
          <div className="flex flex-col align-center ">
            <h2 className="text-center">
              Nome: {first} {last}
            </h2>
            <span className="text-center">Genero: {gender}</span>
            <span className="text-center">
              {email} | {phone}
            </span>
            <span className="text-center">ID: {id} </span>
          </div>
          <div className="flex flex-col align-center">
            <span className="text-center">Nacionalidade: {nacionality}</span>
            <span className="text-center">
              Endereço: {street}, {number}, {state}, {country}
            </span>
            <br />
            <br />
            <span className="text-center border-2 border-purple-600 cursor-text rounded-full">
              URL: {ogUrl}
              {url}
            </span>
          </div>
        </div>
      </label>
    </label>
  );
};
