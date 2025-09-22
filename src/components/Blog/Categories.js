import React from "react";
import Category from "./Category";
import { slug } from "github-slugger";

const Categories = ({ categories, currentSlug }) => {
  return (
    <div className="w-full flex justify-center overflow-x-auto py-2">
      <div className="flex flex-nowrap gap-2 md:gap-3 items-center">
        {categories.map((cat) => (
          <Category
            key={cat}
            link={`/categories/${cat}`}
            name={cat}
            active={currentSlug === slug(cat)}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
