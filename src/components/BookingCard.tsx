import { Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export const BookingCard = () => {
  return (
    <Card className="sticky top-8 shadow-elegant border-0 bg-gradient-to-br from-card to-accent/30">
      <CardContent className="p-6">
        <div className="mb-6">
          <div className="text-xl font-bold text-foreground mb-3">
            Book Your Stay
          </div>
          <div className="flex items-center gap-1 text-sm">
            <span className="font-medium">4.96</span>
            <span className="text-muted-foreground">• 127 reviews</span>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="checkin" className="text-xs font-medium uppercase tracking-wide">
                Check-in
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="checkin"
                  placeholder="Add date" 
                  className="pl-9 border-border focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="checkout" className="text-xs font-medium uppercase tracking-wide">
                Check-out
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="checkout"
                  placeholder="Add date" 
                  className="pl-9 border-border focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests" className="text-xs font-medium uppercase tracking-wide">
              Guests
            </Label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                id="guests"
                placeholder="1 guest" 
                className="pl-9 border-border focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </div>

        <Button className="w-full mb-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-medium py-3 rounded-xl">
          Check Availability
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Contact host for pricing details
        </p>
      </CardContent>
    </Card>
  );
};