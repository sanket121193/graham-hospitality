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
          <div className="text-2xl font-bold text-foreground mb-1">
            $450 <span className="text-base font-normal text-muted-foreground">/ night</span>
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
          Reserve
        </Button>

        <p className="text-center text-sm text-muted-foreground mb-4">
          You won't be charged yet
        </p>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm">$450 × 6 nights</span>
            <span className="text-sm">$2,700</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Cleaning fee</span>
            <span className="text-sm">$75</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Service fee</span>
            <span className="text-sm">$150</span>
          </div>
          
          <Separator />
          
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>$2,925</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};