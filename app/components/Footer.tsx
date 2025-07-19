export default function Footer() {
  return (
    <>
      <section className="grid grid-cols-2 w-screen h-45 bg-shade-6">
        <div className="flex flex-col gap-1 justify-center">
          <p>
            برای دریافت آخرین اخبار و تخفیف های جدید،ایمیل خود را وارد نمایید
          </p>
          <div className="relative">
            <input className="h-10 w-98 px-2 py-1.5 peer" type="text" />
            <label
              className="absolute top-1.5 right-2 peer-focus:hidden"
              htmlFor="footerEmail"
            >
              ایمیل شما
            </label>
          </div>
        </div>
        <div></div>
      </section>
      <section className="grid grid-cols-2 h-134 bg-primary">
        <div></div>
        <div></div>
      </section>
    </>
  );
}
