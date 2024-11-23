import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const API_URL = "https://dummyjson.com/products";

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getProductData = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response?.data?.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const searchProducts = () => {
    if (!searchTerm) return products;

    return products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const searchKaResult = searchProducts();

  return (
    <div className="container-x">
      <input
        type="search"
        onChange={(event) => setSearchTerm(event.target.value)}
        className="block w-full outline-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary my-8 sm:text-sm/6"
        placeholder="Search your product"
      />

      {products.length === 0 ? "Loading...." : null}

      <div className="flex flex-wrap justify-center gap-4">
        {searchKaResult.length === 0 ? "Product not found" : null}

        {searchKaResult?.map((item) => (
          <ProductCard
            key={item.id}
            image={item.thumbnail}
            name={item.title}
            price={item.price}
            discountPercentage={item.discountPercentage}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}
