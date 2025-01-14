import React from 'react';
import HeroSection from '../About/component/Herosection';
import LightProduct from './Component/LightProduct';
import { initialProducts } from '../../utilities/initialData'; // Ensure to import the correct path

export default function Products() {
  return (
    <div>
      <HeroSection />
      <section id="products-section">
        {initialProducts.map((product) => (
          <LightProduct
            key={product.id}
            name={product.name}
            category={product.category}
            description={product.description}
            id={product.id}
            image={product.img}
          />
        ))}
      </section>
    </div>
  );
}
