import { Button } from "./ui/button";
import { Input } from "./ui/input";
import youtube from "../src/svgs/YouTube svg.svg";
import facebook from "../src/svgs/facebook-icon.svg";
import pintrest from "../src/svgs/Pinterest svg.svg";
import instagram from "../src/svgs/Instagram svg.svg";
import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <section className="grid sm:grid-cols-2 w-screen h-45 text-primary-foreground bg-shade-6 dark:bg-shade-6 dark:text-foreground">
        <div className="max-sm:hidden flex justify-center items-center">
          <div className="flex flex-col gap-1 justify-center max-md:pr-5">
            <p className="text-body4">
              برای دریافت آخرین اخبار و تخفیف های جدید،ایمیل خود را وارد نمایید
            </p>
            <div className="relative flex gap-3.5">
              <Input className="h-10 lg:w-98 px-2 py-1.5 peer" type="email" />
              <label
                className="absolute top-2.5 right-2 text-body5 text-neutral-gray6 peer-focus:hidden"
                htmlFor="footerEmail"
              >
                ایمیل شما
              </label>
              <Button className="w-20 h-10 bg-primary0 text-btn1 hover:bg-primary0/60">
                ثبت
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col max-sm:gap-4 gap-6 items-center">
            <p className="max-sm:hidden text-body4">
              ما را در شبکه های اجتماعی دنبال کنید
            </p>
            <p className="sm:hidden text-body-light">
              تماس با پشتیبانی : ۳۴۵۶۰۰۰-۰۲۱
            </p>
            <p className="sm:hidden text-body-light">
              پاسخگویی ۲۴ ساعته ، ۷ روز هفته
            </p>
            <div className="flex w-44 justify-between">
              <Link to="http://www.youtube.com/">
                <img className="h-6 max-sm:h-5" src={youtube} alt="youtube" />
              </Link>
              <Link to="http://www.pintrest.com/">
                <img className="h-6 max-sm:h-5" src={pintrest} alt="pintrest" />
              </Link>
              <Link to="http://www.facebook.com/">
                <img className="h-6 max-sm:h-5" src={facebook} alt="facebook" />
              </Link>
              <Link to="http://www.instagram.com/">
                <img
                  className="h-6 max-sm:h-5"
                  src={instagram}
                  alt="instagram"
                />
              </Link>
            </div>
            <p className="sm:hidden text-caption4">
              تمام حقوق این وبسایت متعلق به فروشگاه آنلاین کاستومی می باشد
            </p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 h-89 bg-primary0">
        <div></div>
        <div></div>
      </section>
    </>
  );
}
