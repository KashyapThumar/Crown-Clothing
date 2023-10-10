import { useSelector } from "react-redux";
import CategoryPreview from "../../components/categorie-preview/categories-preview.component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categorie/categories-selector";
import { Fragment } from "react";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((key) => {
          const products = categoriesMap[key];
          return <CategoryPreview key={key} title={key} products={products} />;
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
