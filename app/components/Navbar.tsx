import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-5">
      <div className="max-w-[1500px] w-[95%] mx-auto flex justify-center">
        <Link target="_blank" href={"https://github.com/Megh2005"}>
          <Image
            src={"/logo.png"}
            width={500}
            height={300}
            alt="pokedex logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
