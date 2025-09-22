import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold border-2 border-solid border-light transition-transform duration-200 ease-in-out cursor-pointer hover:scale-105 text-sm sm:text-base md:text-base",
        active
          ? "bg-dark text-light border-dark"
          : "bg-light text-dark border-light"
      )}
      {...props}
    >
      #{name}
    </Link>
  );
};

export default Category;
