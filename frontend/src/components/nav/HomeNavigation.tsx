import { Link } from "react-router-dom";

const HomeNavigation = () => {
  return (
    <>
      <Link
        to={"/auth/login"}
        className="text-white p-2 uppercase font-black text-xs cursor-pointer"
      >
        Iniciar Sesión
      </Link>
      <Link
        to={"/auth/register"}
        className="bg-lime-500 text-slate-800 p-2 uppercase font-black text-xs cursor-pointer rounded-lg"
      >
        Iniciar Sesión
      </Link>
    </>
  );
};

export default HomeNavigation;
