import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <>
      <section className="grid grid-cols-2 w-screen h-45 bg-shade-6">
        <div className="flex flex-col gap-1 justify-center">
          <p className="text-body4">
            برای دریافت آخرین اخبار و تخفیف های جدید،ایمیل خود را وارد نمایید
          </p>
          <div className="relative">
            <input className="h-10 w-98 px-2 py-1.5 peer" type="text" />
            <label
              className="absolute top-1.5 right-2 text-body5 peer-focus:hidden"
              htmlFor="footerEmail"
            >
              ایمیل شما
            </label>
            <Button className="">click me</Button>
          </div>
        </div>
        <div></div>
      </section>
      <section className="grid grid-cols-2 h-89 bg-primary">
        <div></div>
        <div></div>
      </section>
      <ModeToggle />
    </>
  );
}
