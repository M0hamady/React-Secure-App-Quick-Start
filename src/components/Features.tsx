// src/pages/Home/components/Features.tsx
import React from 'react';
import { farmSections } from '../utilities/initialData';

const Features: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-secondary text-center mb-6">Our Farm Sections</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {farmSections.map((section) => (
          <div key={section.id} className="bg-white text-primary p-4 rounded shadow-lg">
            <img src={section.image} alt={section.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-primary mt-4">{section.name}</h3>
            <p className="text-sm">{section.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
