"use client";
import { useState } from "react";
import {Button} from "@/components/ui/button"
import Image from "next/image"
export default function ProductDetails(){
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
                <button className="text-2xl">♡</button>
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
                            <Button variant="outline" className="w-12 h-12 border-2 border-black bg-white hover:bg-gray-100">S</Button>
                            <Button variant="outline" className="w-12 h-12 border-2 border-black bg-white hover:bg-gray-100">M</Button>
                            <Button variant="outline" className="w-12 h-12 border-2 border-black bg-white hover:bg-gray-100">L</Button>
                            <Button variant="outline" className="w-12 h-12 border-2 border-black bg-white hover:bg-gray-100">XL</Button>
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <div className="flex items-center gap-4 mb-2">
                        <h5 className="text-lg font-bold w-24">COLOR</h5>
                        <div className="flex gap-2">
                            <Button className="w-12 h-12 border-2 border-black bg-[#C4A777] hover:bg-[#B39667]"></Button>
                            <Button className="w-12 h-12 border-2 border-black bg-[#B47B7B] hover:bg-[#A36B6B]"></Button>
                            <Button className="w-12 h-12 border-2 border-black bg-[#7EAE7E] hover:bg-[#6E9E6E]"></Button>
                            <Button className="w-12 h-12 border-2 border-black bg-[#9B7BA9] hover:bg-[#8B6B99]"></Button>
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
        <div className="max-w-7xl mx-auto bg-[#D4E4CA] rounded-3xl p-12 mb-16">
            <h2 className="text-4xl font-bold mb-8">Recommendation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#E8E4D8] rounded-3xl h-50">1</div>
                <div className="bg-[#E8E4D8] rounded-3xl h-50">2</div>
                <div className="bg-[#E8E4D8] rounded-3xl h-50">3</div>
            </div>
        </div>
        
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Customer Reviews</h2>
            <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">☆</span>
                ))}
            </div>
            
            <div className="flex gap-8">
                <div className="w-48">
                    <h3 className="font-bold text-lg mb-4">FILTERS</h3>
                    <Button className={"mt-2 ml-2"}>Label 1</Button>
                    <Button className={"mt-2 ml-2"}>Label 2</Button>
                    <Button className={"mt-2 ml-2"}>Label 3</Button>
                    <Button className={"mt-2 ml-2"}>Label 4</Button>
                </div>
                
                <div className="flex-1 space-y-6">
                    <div className="bg-[#E8E4D8] rounded-3xl p-6 h-32">
                        <h4 className="font-bold text-lg mb-2">NAME</h4>
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-xl">☆</span>
                            ))}
                        </div>
                        <p className="font-bold">REVIEW</p>
                    </div>
                    
                    <div className="bg-[#E8E4D8] rounded-3xl p-6 h-32">
                        <h4 className="font-bold text-lg mb-2">NAME</h4>
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-xl">☆</span>
                            ))}
                        </div>
                        <p className="font-bold">REVIEW</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}