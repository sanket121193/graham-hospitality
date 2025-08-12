import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const PropertyDescription = () => {
  return (
    <div className="space-y-8">
      {/* Host information */}
      <Card className="shadow-soft">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder.svg" alt="Host Sarah" />
              <AvatarFallback className="bg-primary text-primary-foreground font-semibold">SM</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">Hosted by Sarah</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Superhost</span>
                <span>•</span>
                <span>5 years hosting</span>
              </div>
            </div>
            <Badge variant="secondary" className="ml-auto">
              Superhost
            </Badge>
          </div>
          
          <p className="text-muted-foreground">
            Welcome to our stunning modern villa! I'm Sarah, and I've been hosting guests for over 5 years. 
            I live nearby and I'm always available to help make your stay perfect.
          </p>
        </CardContent>
      </Card>

      {/* Property description */}
      <Card className="shadow-soft">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">About this place</h3>
          <div className="prose text-muted-foreground space-y-4">
            <p>
              Escape to this breathtaking modern villa perched on the cliffs of Malibu, offering 
              unparalleled ocean views and luxurious amenities. This architectural masterpiece 
              features floor-to-ceiling windows, an infinity pool, and spacious indoor-outdoor living.
            </p>
            
            <p>
              The villa boasts 4 elegantly appointed bedrooms, each with stunning ocean views, 
              3 full bathrooms with premium fixtures, and a gourmet kitchen equipped with top-of-the-line 
              appliances. The open-concept living area flows seamlessly to the outdoor terrace, 
              perfect for entertaining or simply relaxing while watching the sunset.
            </p>
            
            <p>
              Located in an exclusive gated community, you'll enjoy privacy and security while being 
              just minutes from Malibu's pristine beaches, world-class dining, and shopping. 
              The property includes a private gym, meditation garden, and direct beach access.
            </p>

            <div className="bg-accent/50 p-4 rounded-lg mt-6">
              <h4 className="font-semibold mb-2">Perfect for:</h4>
              <ul className="text-sm space-y-1">
                <li>• Romantic getaways and special celebrations</li>
                <li>• Family vacations with teens and adults</li>
                <li>• Corporate retreats and team building</li>
                <li>• Photography and filming projects</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};