import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/store";
import ProductCard from "../components/ProductCard";
import { getWomensProducts } from "../feature/products/productSlice";

function WomensProducts() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWomensProducts());
  }, []);

  const productState = useAppSelector((state) => state.product.womensProducts);

  return (
    <section className="container mx-auto mt-2 px-60">
      <h2 className="mb-4 text-xl font-bold">Women's Clothing</h2>
      <div className="grid grid-cols-4 gap-10 mt-4 gap-y-8">
        {productState &&
          productState?.map((item, index) => {
            return (
              <ProductCard
                key={index}
                title={item?.title}
                image={item?.image}
                price={item?.price}
                description={item?.description}
                color="bg-[#2bd9af]"
              />
            );
          })}
      </div>
    </section>
  );
}

export default WomensProducts;
