import { Star, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const PropertyHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs font-medium">
            Entire house
          </Badge>
          <Badge variant="outline" className="text-xs">
            Superhost
          </Badge>
        </div>
        
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Graham Hospitality - Dadu Bharne Heritage Home
        </h1>
        
        <div className="flex items-center gap-6 text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-foreground">4.96</span>
            <span>(127 reviews)</span>
          </div>
          
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>Malibu, California</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <span>8 guests</span>
          <span>4 bedrooms</span>
          <span>3 bathrooms</span>
          <span>Ocean view</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="rounded-full">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};