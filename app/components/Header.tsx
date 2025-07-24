import LOGO from "../src/svgs/LOGO.svg";
import LOGOdark from "../src/svgs/LOGOdark.svg";
import TYPE from "../src/svgs/TYPE.svg";
import TYPEdark from "../src/svgs/TYPEdark.svg";
import LoginIco from "../src/svgs/Login.svg";
import LogindarkIco from "../src/svgs/Logindark.svg";
import CartIco from "../src/svgs/shopping-cart.svg";
import CartIcodark from "../src/svgs/shopping-cartdark.svg";
import Menu from "../src/svgs/menu.svg";
import Menudark from "../src/svgs/menudark.svg";
import User from "../src/svgs/user.svg";
import Userdark from "../src/svgs/userdark.svg";
import { NavLink } from "react-router";
import { Input } from "../components/ui/input";
import SearchBar from "./SearchBar";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <>
      <div className="bg-background max-sm:flex-row-reverse inline-flex items-center w-svw justify-evenly max-sm:h-10 lg:px-27 max-sm:px-3 max-sm:my-3 sm:py-3">
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
        <SearchBar />
        <div className="inline-flex gap-4 items-center sm:h-10 sm:py-2">
          <div className="inline-flex gap-1 items-center px-1 lg:px-[22.5px] max-sm:hidden">
            {/* <Button variant="ghost" size="icon">
              <img className="min-w-6 dark:hidden" src={User} alt="User" />
              <img
                className="min-w-6 hidden dark:block"
                src={Userdark}
                alt="User"
              />
            </Button>
            <div className="max-lg:hidden w-26">
              <button>حساب کاربری</button>
            </div> */}
            <Button variant="ghost" size="icon">
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
            </Button>
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
            <Button variant="ghost" size="icon">
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
            </Button>
            <button className="max-lg:hidden w-16">سبد خرید</button>
          </div>
          <div className="sm:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="flex justify-center items-center min-w-8"
            >
              <img className="dark:hidden" src={Menu} alt="Menu" />
              <img className="hidden dark:block" src={Menudark} alt="Menu" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
