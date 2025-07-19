import LOGO from "../../public/LOGO.svg";
import LOGOdark from "../../public/LOGOdark.svg";
import TYPE from "../../public/TYPE.svg";
import TYPEdark from "../../public/TYPEdark.svg";
import SearchIco from "../../public/search-normal.svg";
import LoginIco from "../../public/Login.svg";
import LogindarkIco from "../../public/Logindark.svg";
import CartIco from "../../public/shopping-cart.svg";
import CartIcodark from "../../public/shopping-cartdark.svg";
import Menu from "../../public/menu.svg";
import Menudark from "../../public/menudark.svg";
import User from "../../public/user.svg";
import Userdark from "../../public/userdark.svg";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <>
      <div className="dark:bg-black max-sm:flex-row-reverse inline-flex items-center w-svw justify-evenly max-sm:h-10 lg:px-27 max-sm:px-3 max-sm:my-3 sm:py-3">
        <div className="inline-flex gap-1 sm:px-3 max-sm:h-10 h-12.5">
          <img className="dark:hidden" src={LOGO} alt="logo" />
          <img className="hidden dark:block" src={LOGOdark} alt="logo" />
          <img
            className="dark:hidden max-sm:hidden"
            src={TYPE}
            alt="typelogo"
          />
          <img
            className="hidden dark:max-sm:hidden dark:block"
            src={TYPEdark}
            alt="typelogo"
          />
        </div>
        <div className="relative max-lg:flex-1 mx-6 max-sm:mx-3">
          <input
            className="max-sm:h-8 h-12 max-xl:w-full xl:w-[596px] max-sm:py-0 max-sm:px-3 p-6 rounded-2xl border border-gray-300 dark:border-gray-600 peer"
            type="search"
            name="search"
            id="search"
          />
          <label
            className="absolute text-gray-500 max-sm:top-0.5 max-sm:right-3 right-6 top-2.5 peer-focus:hidden"
            htmlFor="search"
          >
            جستجو
          </label>
          <NavLink
            to={""}
            className="absolute max-sm:top-2 top-3 max-sm:left-3 left-6 max-sm:w-4"
          >
            <img src={SearchIco} alt="SearchIco" />
          </NavLink>
        </div>
        <div className="inline-flex gap-4 items-center sm:h-10 sm:py-2">
          <div className="inline-flex gap-1 items-center px-1 lg:px-[22.5px] max-sm:hidden">
            {/* <button>
              <img className="min-w-6 dark:hidden" src={User} alt="User" />
              <img
                className="min-w-6 hidden dark:block"
                src={Userdark}
                alt="User"
              />
            </button>
            <div className="max-lg:hidden w-26">
              <button>حساب کاربری</button>
            </div> */}
            <button>
              <img
                className="min-w-6 dark:hidden"
                src={LoginIco}
                alt="LoginIco"
              />
              <img
                className="min-w-6 hidden dark:block"
                src={LogindarkIco}
                alt="LoginIco"
              />
            </button>
            <div className="max-lg:hidden w-26">
              <span>
                <button>ورود</button>
              </span>{" "}
              |{" "}
              <span>
                <button>ثبت نام</button>
              </span>
            </div>
          </div>
          <div className="inline-flex gap-1 items-center px-3 lg:px-[16.5px] max-sm:hidden">
            <button>
              <img
                className="min-w-6 dark:hidden"
                src={CartIco}
                alt="CartIco"
              />
              <img
                className="min-w-6 hidden dark:block"
                src={CartIcodark}
                alt="CartIco"
              />
            </button>
            <button className="max-lg:hidden w-16">سبد خرید</button>
          </div>
          <div className="sm:hidden">
            <button className="flex justify-center items-center min-w-8">
              <img className="dark:hidden" src={Menu} alt="Menu" />
              <img className="hidden dark:block" src={Menudark} alt="Menu" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
