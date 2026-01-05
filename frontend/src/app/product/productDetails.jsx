"use client";
import { useState } from "react";
import {Button} from "@/components/ui/button"
import Image from "next/image"
import Recommendation from "./recommendation";
import CustomerReviews from "./customerReviews";
export default function ProductDetails(){
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const sizes = ['S', 'M', 'L', 'XL'];
    const colors = [
        { name: 'Tan',value: '#C4A777',hover:'#B39667' },
        { name: 'Rose',value: '#B47B7B',hover:'#A36B6B' },
        { name: 'Green',value: '#7EAE7E',hover:'#6E9E6E' },
        { name: 'Purple',value: '#9B7BA9',hover:'#8B6B99' }
    ];
    const [quantity, setQuantity]=useState(1);
    const incrementQuantity=() => setQuantity(prev => prev+1);
    const decrementQuantity=() => setQuantity(prev => prev>1 ? prev-1:1);
    return(
        <div className="min-h-screen bg-[#F5F1E8] p-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 mb-16">
            <div className="flex-1 flex items-center justify-center">
                <Image src="/jute-bag.png" alt="Jute Bag" width={500} height={500} className="object-contain"/>
            </div>
            <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-5xl font-bold">JUTE BAG</h1>
                 <button>♡</button>
            </div>
            <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">☆</span>
                ))}
            </div>
            <h3 className="text-lg font-semibold mb-6">200$</h3>
            <div className="mb-6">
                <p className="font-semibold mb-1">DESCRIPTION OF BAG</p>
            </div>
            <div className="bg-[#E8E4D8] border-2 border-[#C4BFA8] rounded-lg p-6">
                <div className="mb-4">
                    <div className="flex items-center gap-4 mb-2">
                        <h5 className="text-lg font-bold w-24">SIZE</h5>
                        <div className="flex gap-2">
                            {sizes.map((size) => (
                                <Button 
                                    key={size}
                                    variant="outline" 
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-12 h-12 border-2 border-black hover:bg-gray-100 ${
                                        selectedSize === size 
                                            ? 'bg-black text-white hover:bg-black hover:text-white' 
                                            : 'bg-white text-black'
                                    }`}
                                >
                                    {size}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <div className="flex items-center gap-4 mb-2">
                        <h5 className="text-lg font-bold w-24">COLOR</h5>
                        <div className="flex gap-2">
                           {colors.map((color) => (
                                        <Button 
                                            key={color.name}
                                            onClick={() => setSelectedColor(color.name)}
                                            className={`w-12 h-12 border-2 ${
                                                selectedColor === color.name 
                                                    ? 'border-4 border-black' 
                                                    : 'border-black'
                                            }`}
                                            style={{ 
                                                backgroundColor: color.value,
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = color.hover}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = color.value}
                                        />
                                    ))}
                        </div>
                    </div>
                </div>
               <div className="grid grid-cols-[auto_1fr] gap-4">
                <div className="flex items-center bg-[#C4BFA8] rounded-full px-4 py-2">
                    <button 
                        onClick={decrementQuantity}
                        className="text-2xl px-3 hover:opacity-70"
                    >
                        −
                    </button>
                    <span className="text-xl font-semibold px-4 min-w-[3ch] text-center">{quantity}</span>
                    <button 
                        onClick={incrementQuantity}
                        className="text-2xl px-3 hover:opacity-70"
                    >
                        +
                    </button>
                </div>
                <Button className="bg-[#A8B491] hover:bg-[#98A481] text-black font-semibold rounded-full py-6">
                    ADD TO CART
                </Button>
            </div>
                <Button className="w-full mt-4 bg-[#A8B491] hover:bg-[#98A481] text-black font-semibold rounded-full py-6">
                    BUY NOW
                </Button>
            </div>
            
            </div>
        </div>
        <Recommendation/>
        <CustomerReviews/>
        </div>
    )
}