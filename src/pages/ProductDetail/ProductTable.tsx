import React from 'react';

// Define interfaces for the product types
interface ProductType {
  name: string;
  color: string;
  months: string[]; // Array of months when the type is available
}

interface Product {
  name: string;
  category: string;
  description: string;
  types: ProductType[];
}

// Define props for the ProductTable component
interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="flex flex-col gap-8">
      {products.map((product, productIndex) => (
        <div
          key={productIndex}
          className="w-[300px] flex-col justify-start items-end gap-[50px] inline-flex"
        >
          {/* Product name and category */}
          <div className="flex items-center">
            <div className="w-[147.98px] text-white text-[22px] font-['Luckiest Guy']">
              {product.name}
            </div>
            <div className="w-0.5 h-[23.53px] bg-[#00eac7] mx-2"></div>
            <div className="text-white text-2xl font-['Livvic']">
              {product.category}
            </div>
          </div>
          {/* Product description */}
          <div className="text-[#bccbd6] text-base font-light font-['Livvic']">
            {product.description}
          </div>
          {/* Render the months */}
          <div className="grid grid-cols-4 gap-4">
            {months.map((month, monthIndex) => (
              <div key={monthIndex} className="w-16 flex-col items-center">
                <div className="text-white origin-top-left -rotate-90 text-base font-['Luckiest Guy']">
                  {month}
                </div>
                <div className="flex justify-center items-center mt-2">
                  {product.types.map((type, typeIndex) =>
                    type.months.includes(month) ? (
                      <div
                        key={typeIndex}
                        className="w-5 h-5 rounded-full shadow"
                        style={{ backgroundColor: type.color }}
                      ></div>
                    ) : null
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductTable;
