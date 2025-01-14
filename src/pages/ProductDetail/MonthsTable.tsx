// MonthsTable.tsx
import React from 'react';
import { ProductType } from '../../utilities/initialData';

interface MonthsTableProps {
  activeTypes: string[];
  productTypes: ProductType[];
}

export const MonthsTable: React.FC<MonthsTableProps> = ({ activeTypes, productTypes }) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div className="grid grid-cols-12 gap-2">
      {months.map((month, index) => (
        <div key={index} className="text-center py-2 px-4 border border-yellow-400">
          <div className="text-sm">{month}</div>
          <div className="flex justify-center mt-2">
            {productTypes.map((type) =>
              activeTypes.includes(type.name) ? (
                <div key={type.name} className="w-5 h-5 rounded-full" style={{ backgroundColor: type.color }}></div>
              ) : null
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
