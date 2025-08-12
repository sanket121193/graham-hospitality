import { PropertyGallery } from "@/components/PropertyGallery";
import { PropertyHeader } from "@/components/PropertyHeader";
import { PropertyAmenities } from "@/components/PropertyAmenities";
import { PropertyDescription } from "@/components/PropertyDescription";
import { PropertyReviews } from "@/components/PropertyReviews";
import { BookingCard } from "@/components/BookingCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PropertyGallery />
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <PropertyHeader />
            <PropertyDescription />
            <PropertyAmenities />
            <PropertyReviews />
          </div>
          
          <div className="lg:col-span-1">
            <BookingCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
