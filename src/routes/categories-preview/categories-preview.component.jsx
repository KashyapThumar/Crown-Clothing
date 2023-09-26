import { useContext } from "react";

import CategoryPreview from "../../components/categorie-preview/categories-preview.component";

import { CategoriesContext } from "../../contex/categories.contex";
import { Fragment } from "react";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
