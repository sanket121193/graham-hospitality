import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import propertyHero from "@/assets/property-hero.jpg";
import livingRoom from "@/assets/living-room.jpg";
import bedroom from "@/assets/bedroom.jpg";
import kitchen from "@/assets/kitchen.jpg";

const images = [
  { src: propertyHero, alt: "Property exterior with pool" },
  { src: livingRoom, alt: "Modern living room" },
  { src: bedroom, alt: "Master bedroom" },
  { src: kitchen, alt: "Gourmet kitchen" },
];

export const PropertyGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative mb-8">
      <div className="relative aspect-[16/9] lg:aspect-[2/1] overflow-hidden rounded-2xl">
        <img
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          className="w-full h-full object-cover transition-all duration-500"
        />
        
        {/* Navigation buttons */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-soft"
          onClick={prevImage}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <Button
          variant="secondary"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-soft"
          onClick={nextImage}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        {/* Image indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImage ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail grid */}
      <div className="grid grid-cols-4 gap-2 mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`aspect-square overflow-hidden rounded-lg transition-all ${
              index === currentImage 
                ? "ring-2 ring-primary opacity-100" 
                : "opacity-70 hover:opacity-100"
            }`}
            onClick={() => setCurrentImage(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};