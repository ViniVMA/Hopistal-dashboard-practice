/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { PacientsContext } from "../../../Providers/pacientsContext";
import { Modal } from "../Modal";

export const Table = () => {
  const user = useContext(PacientsContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<any | null>(null);
  const [visiblePacients, setVisiblePacients] = useState(10);

  const router = useRouter();

  const handleModalOpen = () => {
    setIsModalOpen(modalData !== null ? !isModalOpen : !isModalOpen);
  };

  const handleCloseModal = () => {
    isModalOpen === false ? router.push("/") : !setIsModalOpen;
  };

  useEffect(() => {
    handleCloseModal();
  }, [isModalOpen]);

  return (
    <>
      <div className="overflow-x-auto w-full border border-gray-800 rounded-md backdrop-blur bg-white/5 shadow-xl">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Birthdate</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {user?.slice(0, visiblePacients).map((user) => {
              return (
                <tr key={user.login.uuid} id={user.login.uuid}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user.picture.thumbnail}
                            alt="Avatar do Usuario"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user.name.first} {user.name.last}
                    <br />
                    <span
                      className={`badge badge-ghost badge-sm capitalize ${
                        user.gender === "female"
                          ? "bg-pink-800 "
                          : "bg-green-800"
                      }`}
                    >
                      {user.gender}
                    </span>
                  </td>

                  <td>
                    {new Date(user.dob.date).toUTCString().slice(5, 17)}
                    <br />
                    <span className="badge badge-ghost badge-sm capitalize">
                      Idade: <strong>{user.dob.age}</strong>
                    </span>
                  </td>

                  <th>
                    <Link
                      href={`/?postId=${user.login.uuid}`}
                      as={`/post/${user.login.uuid}`}
                    >
                      <button
                        onClick={() => {
                          setModalData(user);
                          handleModalOpen();
                        }}
                        className="btn modal-button btn-ghost btn-xs"
                      >
                        details
                      </button>
                    </Link>
                  </th>
                </tr>
              );
            })}
          </tbody>
          <button onClick={() => setVisiblePacients(visiblePacients + 10)}>
            aaaaa
          </button>
        </table>
      </div>
      <Modal
        picture={modalData?.picture.large}
        first={modalData?.name.first}
        last={modalData?.name.last}
        email={modalData?.email}
        address="1"
        gender={modalData?.gender}
        id={modalData?.login.uuid}
        phone={modalData?.phone}
        url="random"
        nacionality={modalData?.nat}
        country={modalData?.location.country}
        state={modalData?.location.state}
        street={modalData?.location.street.name}
        number={modalData?.location.street.number}
        handleModalOpen={handleModalOpen}
        isModalOpen={isModalOpen}
      />
    </>
  );
};
