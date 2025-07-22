import { Input } from "./input";
import SearchIco from "../../src/svgs/search-normal.svg";

export default function SearchBar() {
  return (
    <div className="relative max-lg:flex-1 mx-6 max-sm:mx-3">
      <Input
        type="search"
        name="search"
        id="search"
        className="max-sm:h-8 h-12 max-xl:w-full xl:w-[596px] max-sm:py-0 max-sm:px-3 p-6 rounded-2xl border peer"
      />
      <label
        className="absolute text-primary0 max-sm:top-0.5 max-sm:right-3 right-6 top-2.5 peer-focus:hidden"
        htmlFor="search"
      >
        جستجو
      </label>
      <button className="absolute max-sm:top-2 top-3 max-sm:left-3 left-6 max-sm:w-4">
        <img src={SearchIco} alt="SearchIco" />
      </button>
    </div>
  );
}
