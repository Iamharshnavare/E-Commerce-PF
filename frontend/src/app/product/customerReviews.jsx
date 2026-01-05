import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CustomerReviews() {
  const reviews=[
    {
      id:1,
      name:"Review-1",
      rating:5,
      review: "qwertyuiop",
      reviewed:"2 days ago"
    },
    {
      id:2,
      name:"Review-2",
      rating:4,
      review:"qwertyuiop",
      reviewed:"1 week ago"
    }
  ];
  const filters=[
    { label:"All Reviews",count:100 },
    { label:"5 Stars",count:100 },
    { label:"4 Stars",count:100 },
    { label:"With Photos",count:100 }
  ];
  const renderStars = () => {
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">☆</span>
                ))}
      </div>
    );
  };
  const averageRating = 4.5; //dummy
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Customer Reviews</h2>
        <div className="flex items-center gap-3">
          {renderStars}
          <span className="text-2xl font-bold text-gray-800">{averageRating}</span>
          <span className="text-gray-600">out of 5</span>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-56 shrink-0">
          <h3 className="font-bold text-lg mb-4 text-gray-800">FILTERS</h3>
          <div className="space-y-2">
            {filters.map((filter, index)=>(
              <Button
                key={index}
                variant="outline"
                className="w-full justify-between bg-white hover:bg-[#c8d9be] transition-colors"
              >
                <span>{filter.label}</span>
                <span className="text-gray-500 text-sm">({filter.count})</span>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="flex-1 space-y-4">
          {reviews.map((review)=>(
            <Card key={review.id} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-1">
                      {review.name}
                    </h4>
                    <span className="text-sm text-gray-500">{review.reviewed}</span>
                  </div>
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {review.review}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}