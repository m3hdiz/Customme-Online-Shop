import { Button } from "./ui/button";
import { Input } from "./ui/input";
import youtube from "../src/svgs/YouTube svg.svg";
import facebook from "../src/svgs/facebook-icon.svg";
import pintrest from "../src/svgs/Pinterest svg.svg";
import instagram from "../src/svgs/Instagram svg.svg";
import enamad from "../src/svgs/01.svg";
import samandehi from "../src/svgs/02.svg";
import etehadie from "../src/svgs/03.svg";
import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <section className="grid sm:grid-cols-2 w-screen h-45 text-primary-foreground bg-shade-6 dark:bg-shade-6 dark:text-foreground">
        <div className="max-sm:hidden flex items-center lg:pr-26.5 sm:pr-14">
          <div className="flex flex-col gap-1 justify-center">
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
              <Button className="w-20 h-10 bg-primary0 hover:ring-2 text-btn1">
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
      <section className="max-sm:hidden h-89 bg-primary0 sm:px-7 md:px-14 lg:px-27 text-primary-foreground dark:text-foreground dark:bg-background">
        <div className="grid grid-cols-5 pt-13.25">
          <div className="col-span-3 flex justify-between max-xl:px-3 xl:pl-28">
            <div>
              <p className="pb-8 text-caption1 underline underline-offset-8">
                همراه با کاستومی
              </p>
              <div className="flex flex-col gap-5">
                <p className="text-body4">فروش محصولات</p>
                <p className="text-body4">فرصت همکاری</p>
                <p className="text-body4">تماس با ما</p>
                <p className="text-body4">نقشه سایت</p>
              </div>
            </div>
            <div>
              <p className="pb-8 text-caption1 underline underline-offset-8">
                خدمات مشتریان
              </p>
              <div className="flex flex-col gap-5">
                <p className="text-body4">سوالات متداول</p>
                <p className="text-body4">حریم خصوصی</p>
                <p className="text-body4">ثبت شکایت</p>
                <p className="text-body4">ضمانت نامه محصولات</p>
              </div>
            </div>
            <div>
              <p className="pb-8 text-caption1 underline underline-offset-8">
                راهنمای خرید
              </p>
              <div className="flex flex-col gap-5">
                <p className="text-body4">راهنمای ثبت سفارش</p>
                <p className="text-body4">شیوه های پرداخت</p>
                <p className="text-body4">نحوه ارسال سفارش ها</p>
                <p className="text-body4">شرایط بازگرداندن محصول</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col items-center">
            <h6>فروشگاه اینترنتی کاستومی</h6>
            <div className="flex gap-8 justify-center mt-10.25 mx-2">
              <p className="text-body5">تماس با پشتیبانی : ۳۴۵۶۰۰۰-۰۲۱</p>
              <p className="text-body5">پاسخگویی ۲۴ ساعته ، ۷ روز هفته</p>
            </div>
            <div className="flex w-56.5 h-16 justify-between mt-18">
              <Link to="http://enamad.ir//">
                <img src={enamad} alt="enamad" />
              </Link>
              <Link to="http://samandehi.ir/">
                <img src={samandehi} alt="samandehi" />
              </Link>
              <Link to="http://ecunion.ir//">
                <img src={etehadie} alt="اتحادیه کشوری کسب و کارهای مجازی" />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-caption4 pt-9">
          تمام حقوق این وبسایت متعلق به فروشگاه آنلاین کاستومی می باشد
        </p>
      </section>
    </>
  );
}
