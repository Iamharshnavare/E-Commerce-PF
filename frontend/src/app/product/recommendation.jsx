import {ShoppingCart } from 'lucide-react';
import { Card,CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
export default function Recommendation() {
  const products=[ //fetch from db (dummy prods)
    {
      id:1,
      title: "Title-1",
      price: "Price",
      rating: 4.5,
      reviews: 1234
    },
    {
      id:2,
      title:"Title-2",
      price:"Price",
      rating:4.5,
      reviews:1234
    },
    {
      id:3,
      title:"Title-3",
      price: "Price",
      rating: 4.5,
      reviews: 1234
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (//static stars
                    <span key={i} className="text-xl">☆</span>
                ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };
  return(
    <div className="max-w-7xl mx-auto bg-[#c8d9be] rounded-3xl p-12 mb-16">
        <h1 className="text-3xl font-semibold">Recommendations</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="aspect-square overflow-hidden">
                <Image
                    src="/jute-bag.png"
                    alt="Title"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <div className="text-2xl font-bold text-gray-900 mb-3">
                  {product.price}
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(product.rating)}
                </div>
                <Button 
                  className="w-full bg-[#c8d9be] hover:bg-[#b8c9ae] text-gray-800 font-medium gap-2"
                  size="lg">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}