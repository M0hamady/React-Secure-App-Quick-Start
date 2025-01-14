import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import initialProducts from "../../../utilities/initialData";

// TypeScript interface for the product
interface ProductType {
  id: string;
  name: string;
  img: string; // Add image field for each product
  category: string;
}

const FruitsAndVeggies: React.FC = () => {
  // List of products from initial data
  const items = initialProducts.map((product) => ({
    title: product.name,
    productId: product.id,
    img: product.img, // Use image path for each product
  }));

  // State for tracking the active item
  const [activeIndex, setActiveIndex] = useState(0);

  // Cycle through the items every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length); // Loop back to the first item after the last
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [items.length]);

  return (
    <div className="h-auto bg-[#334b35] px-4 py-8" id="fruits" >
      {/* Title Section */}
      <div className="text-center text-white mb-8">
        <h1 className="text-lg font-semibold uppercase leading-[30px]">
          Foods And Vegetables
        </h1>
        <h2 className="text-3xl font-light font-primary">
          Quality Fruits & Vegetables
        </h2>
      </div>

      {/* Grid Container */}
      <div className="flex flex-row gap-8 justify-center items-center flex-wrap">
        {items.map((item, index) => (
          <Link
            key={index}
            to={`/products/${item.productId}`} // Use productId for routing
            className={`rounded-[15px] p-6 backdrop-blur-[50px] flex flex-col items-center text-center transition duration-500 ease-in-out transform ${
              index === activeIndex
                ? "bg-[#f7c35f] scale-105" // Active state with color and scale
                : "bg-[#d9d9d9]/10"
            } hover:bg-[#4b7551] hover:scale-110`} // Hover color and scaling
          >
            {/* Product Image */}
            <img
              src={item.img} // Use the product image
              alt={item.title}
              className={`w-[60px] h-[60px] rounded-full object-cover mb-4 transition duration-500 ease-in-out transform ${
                index === activeIndex ? "scale-110" : "scale-100"
              }`} // Add hover effect for image scaling
            />

            {/* Title */}
            <div
              className={`text-xs font-thin font-primary transition duration-500 ease-in-out ${
                index === activeIndex ? "text-primary" : "text-white"
              } hover:text-[#a0ff7f]`} // Hover title color
            >
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FruitsAndVeggies;
