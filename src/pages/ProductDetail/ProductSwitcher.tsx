// ProductSwitcher.tsx
import React, { useState } from 'react';
import { MonthsTable } from './MonthsTable';
import { Product } from '../../utilities/initialData';

interface ProductSwitcherProps {
  product: Product;
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const ProductSwitcher: React.FC<ProductSwitcherProps> = ({ product }) => {
  const [activeTypes, setActiveTypes] = useState<string[]>([]);

  const toggleType = (typeName: string) => {
    setActiveTypes(prev =>
      prev.includes(typeName) ? prev.filter(type => type !== typeName) : [...prev, typeName]
    );
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <div className="flex">
        <div className="w-1/2">
          <p className="text-lg font-semibold">{product.category}</p>
          <p className="text-sm">{product.description}</p>
        </div>
        <div className="w-1/2 flex flex-wrap">
          {product.types.map((type) => (
            <div
              key={type.name}
              onClick={() => toggleType(type.name)}
              className={`cursor-pointer p-4 m-2 border ${activeTypes.includes(type.name) ? 'border-black' : 'border-gray-300'}`}
            >
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full" style={{ backgroundColor: type.color }}></div>
                <span className="ml-2">{type.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <MonthsTable activeTypes={activeTypes} productTypes={product.types} />
      </div>
    </div>
  );
};
