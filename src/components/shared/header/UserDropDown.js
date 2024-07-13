import Link from "next/link";
import userImg from "./assets/images/ic-user.png";
import iconLogout from "./assets/images/ic-logout.png";
import Image from "next/image";

const UserDropDown = () => {
  return (
    <div className="dropdown text-center text-black">
      <button
        className="user-logo rounded-pill dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Image src={userImg} alt="user-logo" className="" />
      </button>
      <ul className="dropdown-menu  p-3">
        <li className="d-flex justify-content-between align-items-center mb-2">
          <Image
            src={userImg}
            alt="user-logo"
            className=" rounded user-logo rounded-pill"
            width={"50px"}
            height={"50px"}
          />

          <Link className="dropdown-item bg-transparent  " href={`/profile`}>
            Manage my account
          </Link>
        </li>

        <li className="d-flex justify-content-between align-items-center mb-2">
          <Image src={iconLogout} alt="user-logo" className=" rounded" />
          <button className="dropdown-item bg-transparent  ">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
