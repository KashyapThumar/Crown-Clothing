import { useContext } from "react";
import { ProductsContex } from "../../contex/product.contex";
import ProductCard from "../../components/product-card/product-card.component";
import "../shop/shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContex);

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
