import { useSelector } from "react-redux";
import CategoryPreview from "../../components/categorie-preview/categories-preview.component";
import { selectCategoriesMap } from "../../store/categorie/categories-selector";
import { Fragment } from "react";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
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
