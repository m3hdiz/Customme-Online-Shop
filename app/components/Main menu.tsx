import { Button } from "./ui/button";
import magicpen from "../src/svgs/magicpen.svg";

export default function Mainmenu() {
  return (
    <div className="h-16 flex gap-2 justify-center items-center sm:px-14 lg:px-27">
      <Button className="bg-primary0 text-btn2 w-46 h-12">
        <img src={magicpen} alt="magicpen" />
        خودت طراحیش کن !
      </Button>
      <div className="flex gap-8 px-6 py-5">
        <Button variant="ghost" className="text-neutral-gray9 text-body3">
          پوشاک
        </Button>
        <Button variant="ghost" className="text-neutral-gray9 text-body3">
          لوازم خانه
        </Button>
        <Button variant="ghost" className="text-neutral-gray9 text-body3">
          قاب موبایل
        </Button>
        <Button variant="ghost" className="text-neutral-gray9 text-body3">
          اکسسوری
        </Button>
        <Button variant="ghost" className="text-neutral-gray9 text-body3">
          مدرسه و اداره
        </Button>
        <Button variant="ghost" className="text-neutral-gray9 text-body3">
          کارت و پوستر
        </Button>
        <Button variant="ghost" className="text-neutral-gray9 text-body3">
          جشن و مهمانی
        </Button>
      </div>
    </div>
  );
}
