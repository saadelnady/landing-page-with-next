import Link from "next/link";
import User from "./User.js";

const Header = () => {
  return (
    <div className="border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-5 mb-lg-0 text-black py-3">
          <Link href="/" className="fs-3 fw-bold d-lg-none">
            <h1 className="cursor-pointer">Exclusive</h1>
          </Link>
          <User />
        </div>
      </div>
    </div>
  );
};

export default Header;
