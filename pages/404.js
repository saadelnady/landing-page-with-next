import Link from "next/link";

const NotfoundPage = () => {
  return (
    <div className="min-vh-100 bg-light d-flex justify-content-center align-items-center flex-column">
      404
      <p className="mb-3"> NotfoundPage</p>
      <Link href="/">
        <a className="btn btn-danger">Back to HomePage </a>
      </Link>
    </div>
  );
};

export default NotfoundPage;
