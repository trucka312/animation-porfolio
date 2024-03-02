import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { menuHeader } from "../constants";
import MenuIcon from "./MenuIcon";

export default function Navbar() {
  const [openMenuIcon, setOpenMenuIcon] = useState<boolean>(false);

  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center  fixed top-0 z-20  scroll-smooth ${
        scrolled
          ? "h-16 duration-300 bg-transparent"
          : "h-24 duration-300 bg-black"
      }`}
    >
      <div className="lg:max-w-7xl mx-auto  flex items-center justify-between w-full lg:w-[90%]">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setOpenMenuIcon(!openMenuIcon)}
        >
          <MenuIcon openMenu={openMenuIcon} />
        </div>
        <div>
          <SocialIcon
            url="https://www.facebook.com/profile.php?id=100033127445154"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/PhongThanh0907"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/phong-ph%E1%BA%A1m-034480248/"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
      </div>

      {openMenuIcon ? (
        <div className="absolute top-[75px] z-10 text-swhite bg-menuHeader flex flex-col pl-8 lg:pl-16 rounded-md text-lg lg:text-xl h-72 lg:w-96 opacity-100 duration-500 -left-0 w-full">
          {menuHeader.map((item, index) => (
            <div
              onClick={() => setOpenMenuIcon(false)}
              key={index}
              className="relative w-full py-6"
            >
              <a
                className="hover:text-mgreen absolute left-[10px] opacity-100 group"
                href={item.path}
                style={{ transition: `all ${item.delay}ms` }}
              >
                {item.title}
                <div className="h-0.5 w-0 bg-blueCustomer opacity-0 group-hover:opacity-100 group-hover:w-full duration-500" />
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className=" absolute lg:top-[75px] z-0 text-swhite bg-menuHeader -top-[500px]  flex-col pt-6 pl-8 text-lg lg:text-xl gap-y-3  h-0 lg:w-96 duration-500 opacity-0 -left-0 w-full">
          {menuHeader.map((item, index) => (
            <div key={index} className="relative w-full py-3.5">
              <Link
                className="hover:text-mgreen absolute left-1/2 opacity-0"
                to={item.path}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
