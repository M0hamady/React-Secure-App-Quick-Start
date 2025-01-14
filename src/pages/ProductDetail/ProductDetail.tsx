import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import initialProducts from "../../utilities/initialData";

// Define TypeScript interface for product
interface ProductType {
  type: string;
  color: string;
  months: string[];
}

interface Product {
  name: string;
  category: string;
  description: string;
  types: ProductType[];
  img: string;
}

const ProductDetail: React.FC = (initialProduct) => {
  const { id } = useParams(); // Get the product ID from URL parameters
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedTypeIndices, setSelectedTypeIndices] = useState<Set<number>>(new Set()); // Set of selected indices

  useEffect(() => {
    // Fetch the product details based on the ID
    const fetchedProduct = initialProducts.find((p) => p.id === id);
    console.log(product);
    setProduct(fetchedProduct || null); // Update state with the fetched product
  }, [id]);

  const handleTypeClick = (index: number) => {
    setSelectedTypeIndices((prevIndices) => {
      const newIndices = new Set(prevIndices);
      if (newIndices.has(index)) {
        newIndices.delete(index); // Remove if already selected
      } else {
        newIndices.add(index); // Add if not selected
      }
      return newIndices;
    });
  };

  const monthsWithColors = product?.types
    .filter((_, index) => selectedTypeIndices.has(index))
    .flatMap((type) =>
      type.months.map((month) => ({
        month,
        color: type.color,
      }))
    );

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-end gap-9 p-4 md:p-8 max-sm:flex-col-reverse">
      {/* Type Switcher */}
      <div className="flex flex-wrap gap-4 flex-col ">
        {product.types.map((type, index) => (
          <div
            key={index}
            className="flex justify-start items-center gap-4 cursor-pointer flex-row px-2 py-1"
            onClick={() => handleTypeClick(index)}
          >
            <div className="w-[58px] h-[38px] relative">
              {/* Background track */}
              <div className="p-3 left-0 top-0 absolute opacity-50 justify-start items-center inline-flex">
                <div
                  className={`w-[34px] h-3.5 ${
                    selectedTypeIndices.has(index)
                      ? "bg-blue-500" // Active background color
                      : "bg-gray-300" // Inactive background color
                  } rounded-full`}
                ></div>
              </div>
              {/* Slider */}
              <div
                className={`p-[9px] left-[${
                  selectedTypeIndices.has(index) ? "20px" : "0"
                }] top-0 absolute transition-all duration-300 ease-in-out`}
              >
                <div
                  className={`w-5 h-5 ${
                    selectedTypeIndices.has(index)
                    ? "bg-blue-500" 
                      : "bg-gray-500"
                  } rounded-full shadow`}
                ></div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className={`text-white text-base font-normal border  rounded px-2 py-1`}  style={{borderColor: type.color }} >{type.type}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Info Container */}
      <div className="flex flex-col justify-top items-end gap-6 md:w-[300px] text-2xl w-full md:h-[521.31px] h-auto ">
        <div className="relative flex w-full justify-between">
          <div className="text-white text-lg font-normal font-secondary tracking-wider">
            {product.name.toUpperCase()}
          </div>
          <div className="w-0.5 h-6 bg-[#00eac7] absolute top-0 left-0"></div>
          <div className="text-white text-xl font-normal font-['Livvic'] leading-7 tracking-wide mt-1">
            {product.category.toLowerCase()}
          </div>
        </div>
        <div className="text-[#bccbd6] text-base font-light font-lora leading-normal ">
          {product.description}
        </div>

        {/* Table Display */}
        <div className="flex flex-wrap flex-row  gap-2 md:gap-4 w-full items-end align-bottom h-full">
          {monthsWithColors &&
            monthsWithColors.map((item, index) => (
              <div
                key={index}
                className="w-1/4 md:w-1/6 flex flex-col justify-start items-center border  rounded-lg p-2  "
              >
                <div className="flex justify-center items-center w-full h-12 bg-white/20 backdrop-blur-sm max-sm:h-[80px]">
                  <div className="text-white text-xs md:text-base font-lora leading-normal -rotate-90 max-sm:text-xl">
                    {item.month}
                  </div>
                </div>
                <div
                  className="w-5 h-5 mt-1 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
              </div>
            ))}
        </div>
      </div>

      {/* Product Image */}
      <img
        className="rounded-lg shadow-md w-full md:w-[753px] h-auto md:h-[471px] text-white object-cover"
        src={product.img}
        alt={product.name}
      />
    </div>
  );
};

export default ProductDetail;
