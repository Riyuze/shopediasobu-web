import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <Link to="/" className="text-center underline mt-4 block">
          Go Back Home
        </Link>
      </div>
    </>
  );
};
export default PageNotFound;
