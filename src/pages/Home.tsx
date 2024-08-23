import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CategoriesCard from "../components/CategoriesCard";
import { useAppDispatch, useAppSelector } from "../app/store";
import { useEffect } from "react";
import { getMixedProducts } from "../feature/products/productSlice";

function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMixedProducts());
  }, []);

  const productState = useAppSelector((state) => state.product.products);

  return (
    <section className="container mx-auto mt-2 px-60">
      <h2 className="mb-4 text-xl font-bold">Flash Sale</h2>
      <div className="flex justify-between align-middle">
        {productState &&
          productState?.map((item, index) => {
            let bgColor;
            item?.category === "men's clothing"
              ? (bgColor = "bg-[#2bd9af]")
              : (bgColor = "bg-[#ff5d84]");
            return (
              <ProductCard
                key={index}
                title={item?.title}
                image={item?.image}
                price={item?.price}
                description={item?.description}
                color={bgColor}
              />
            );
          })}
      </div>
      <h2 className="text-xl font-bold mt-7">Categories</h2>
      <div className="flex justify-between mt-3 align-middle">
        <Link to={"/mens-products"}>
          <CategoriesCard clothType={"Men's Clothing"} color={"bg-[#2bd9af]"} />
        </Link>
        <Link to={"/womens-products"}>
          <CategoriesCard
            clothType={"Women's Clothing"}
            color={"bg-[#ff5d84]"}
          />
        </Link>
      </div>
    </section>
  );
}

export default Home;
