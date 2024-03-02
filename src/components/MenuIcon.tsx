import React from "react";

type Props = {
  openMenu: boolean;
};

export default function MenuIcon({ openMenu }: Props) {
  return (
    <div className="h-[26px] w-11 relative flex justify-center z-30">
      <div
        className={`h-1.5 w-9 bg-blueCustomer  absolute rounded-sm  ${
          openMenu
            ? "top-0 bottom-0 rotate-45 my-auto duration-500"
            : "top-0 duration-300"
        } `}
      />
      <div
        className={`h-1.5 w-9 bg-blueCustomer absolute top-0 bottom-0 m-auto line-center duration-300 rounded-sm ${
          openMenu ? " opacity-0" : "opacity-100 "
        }`}
      />
      <div
        className={`h-1.5 w-9 bg-blueCustomer absolute  line-bottom rounded-sm ${
          openMenu
            ? "top-0 bottom-0 -rotate-45 my-auto duration-500"
            : "bottom-0 duration-300"
        }`}
      />
    </div>
  );
}
