import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    id: 1,
    author: "Michael Chen",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "March 2024",
    comment: "Absolutely stunning property with breathtaking views! Sarah was an incredible host and the villa exceeded all our expectations. The infinity pool and outdoor spaces were perfect for our group.",
  },
  {
    id: 2,
    author: "Emma Rodriguez",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "February 2024",
    comment: "This place is pure magic! The modern design, ocean views, and luxurious amenities made our anniversary trip unforgettable. Would definitely book again!",
  },
  {
    id: 3,
    author: "David Johnson",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "January 2024",
    comment: "Perfect for our family vacation. The kids loved the pool and the adults enjoyed the peaceful atmosphere and stunning sunsets. Sarah's attention to detail is exceptional.",
  },
];

export const PropertyReviews = () => {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          4.96 • 127 reviews
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 lg:grid-cols-2">
          {reviews.map((review) => (
            <div key={review.id} className="space-y-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={review.avatar} alt={review.author} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
                    {review.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{review.author}</span>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};