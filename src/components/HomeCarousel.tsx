
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";

const HomeCarousel = () => {
  const { t } = useLanguage();

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      title: t("hero", "title"),
      description: t("hero", "subtitle"),
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      title: t("services", "items", "0.title"),
      description: t("services", "items", "0.description"),
    },
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      title: t("services", "items", "1.title"),
      description: t("services", "items", "1.description"),
    },
  ];

  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[60vh] w-full overflow-hidden rounded-lg">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-lg">{slide.description}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};

export default HomeCarousel;
