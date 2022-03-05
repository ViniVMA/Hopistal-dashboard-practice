/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";

interface Users {
  email: string;
  name: {
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
  gender: string;

  dob: {
    date: string;
    age: number;
  };
}

export const Table = () => {
  const { data: user } = useFetch<Users[]>(
    "https://randomuser.me/api/?results=10",
  );

  return (
    <div className="overflow-x-auto w-full border border-gray-800 rounded-md">
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
          {user?.map(({ picture, name, gender, email, dob }, index) => {
            return (
              <tr key={index}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={picture.thumbnail} alt="Avatar do Usuario" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {name.first} {name.last}
                  <br />
                  <span className="badge badge-ghost badge-sm capitalize">
                    {gender}
                  </span>
                </td>

                <td>
                  {new Date(dob.date).toUTCString().slice(5, 17)}
                  <br />
                  <span className="badge badge-ghost badge-sm capitalize">
                    Idade: <strong> {dob.age}</strong>
                  </span>
                </td>

                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
