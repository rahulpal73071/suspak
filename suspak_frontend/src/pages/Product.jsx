import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductDetailCard from '../components/ProductDetailCard';
const products = [
    {
      name: 'Advanced ChatGPT course',
      description: 'This couse will tell you how you can use ChatGPT in day to day life.',
      image: 'https://imgs.search.brave.com/-dKhqKExIwya7YGMYUqYuU9jiILx2F78aXu3Ob5ydGI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9tZWxsb3ctcG9y/dHJhaXQtb2YtYS1y/b2JvdGljLXdvbWFu/LWZyZWUtcGhvdG8u/anBlZz93PTYwMCZx/dWFsaXR5PTgw',
    },
    {
      name: 'Advanced ChatGPT course',
      description: 'This couse will tell you how you can use ChatGPT in day to day life.',
      image: 'https://imgs.search.brave.com/-dKhqKExIwya7YGMYUqYuU9jiILx2F78aXu3Ob5ydGI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9tZWxsb3ctcG9y/dHJhaXQtb2YtYS1y/b2JvdGljLXdvbWFu/LWZyZWUtcGhvdG8u/anBlZz93PTYwMCZx/dWFsaXR5PTgw',
    },
    {
      name: 'Advanced ChatGPT course',
      description: 'This couse will tell you how you can use ChatGPT in day to day life.',
      image: 'https://imgs.search.brave.com/-dKhqKExIwya7YGMYUqYuU9jiILx2F78aXu3Ob5ydGI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9tZWxsb3ctcG9y/dHJhaXQtb2YtYS1y/b2JvdGljLXdvbWFu/LWZyZWUtcGhvdG8u/anBlZz93PTYwMCZx/dWFsaXR5PTgw',
    },
    {
      name: 'Advanced ChatGPT course',
      description: 'This couse will tell you how you can use ChatGPT in day to day life.',
      image: 'https://imgs.search.brave.com/-dKhqKExIwya7YGMYUqYuU9jiILx2F78aXu3Ob5ydGI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9tZWxsb3ctcG9y/dHJhaXQtb2YtYS1y/b2JvdGljLXdvbWFu/LWZyZWUtcGhvdG8u/anBlZz93PTYwMCZx/dWFsaXR5PTgw',
    },
    {
      name: 'Advanced ChatGPT course',
      description: 'This couse will tell you how you can use ChatGPT in day to day life.',
      image: 'https://imgs.search.brave.com/-dKhqKExIwya7YGMYUqYuU9jiILx2F78aXu3Ob5ydGI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9tZWxsb3ctcG9y/dHJhaXQtb2YtYS1y/b2JvdGljLXdvbWFu/LWZyZWUtcGhvdG8u/anBlZz93PTYwMCZx/dWFsaXR5PTgw',
    },
    
  ];

function Product() {
const [selectedProduct, setSelectedProduct] = useState(null);
  return (
     <div className="relative">
      {/* Product Cards */}
      <div className={`flex flex-wrap gap-6 justify-center p-6 transition ${selectedProduct ? 'blur-sm' : ''}`}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            onViewMore={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {/* Overlay for View More */}
      {selectedProduct && (
        <ProductDetailCard
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  )
}

export default Product