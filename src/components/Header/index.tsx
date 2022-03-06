import Image from "next/image";
import Logo from "../../../public/logo.svg";

export const Header = () => {
  return (
    <div className="navbar fixed z-higher backdrop-blur bg-black/50">
      <div className="navbar-start">
        <div className="dropdown">
          <label className="btn btn-ghost lg:hidden"></label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>aaa</a>
            </li>
          </ul>
        </div>
        <Image width={128} height={60} src={Logo} />
      </div>

      <div className="navbar-end">
        <a className="btn btn-primary">Get started</a>
      </div>
    </div>
  );
};
