import { Link } from "react-router-dom";
import companyLogoImg from "../images/company-logo.png";
import { useAppSelector } from "../app/store";

function Header() {
  // const getTokenFromLocalStorage: { token?: string } | null = JSON.parse(localStorage.getItem("user") as string);
// console.log("local: ", getTokenFromLocalStorage);

const userState = useAppSelector((state) => state?.user?.user);
console.log(userState);


  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-between pl-2 pr-10 border-b-4">
      <Link className="flex items-center gap-1" to={"/home"}>
        <img className="h-10" src={companyLogoImg} alt="company-logo" />
        <h1 className="py-2 text-3xl font-bold">
          Modern Walk
        </h1>
      </Link>
      {userState !== null ? (<button className="px-4 py-1 font-bold text-white transition-all duration-300 bg-red-600 border-2 border-red-800 cursor-pointer rounded-xl hover:bg-red-500" onClick={handleLogout}>Log Out</button>) : (<div></div>)}
    </div>
  );
}

export default Header;
