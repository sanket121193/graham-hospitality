import { 
  Wifi, 
  Car, 
  Waves, 
  AirVent, 
  Utensils, 
  Tv, 
  Dumbbell, 
  Mountain, 
  Coffee,
  Bath
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const amenities = [
  { icon: Wifi, name: "High-speed WiFi" },
  { icon: Car, name: "Free parking" },
  { icon: Waves, name: "Private pool" },
  { icon: AirVent, name: "Air conditioning" },
  { icon: Utensils, name: "Full kitchen" },
  { icon: Tv, name: "65\" 4K TV" },
  { icon: Dumbbell, name: "Home gym" },
  { icon: Mountain, name: "Ocean view" },
  { icon: Coffee, name: "Coffee maker" },
  { icon: Bath, name: "Hot tub" },
];

export const PropertyAmenities = () => {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">What this place offers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
              <amenity.icon className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <span className="text-sm font-medium">{amenity.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};