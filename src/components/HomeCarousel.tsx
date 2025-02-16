
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
      image: "https://th.bing.com/th/id/R.b5b77b559455154c6f41af95d13f46d7?rik=ieVjPQ7zsplQzg&pid=ImgRaw&r=0",
      title: t("hero", "title"),
      description: t("hero", "subtitle"),
    },
    {
      image: "https://th.bing.com/th/id/R.6cd6ea0be812d9a3891cdef7ea05397e?rik=cDqjBT8LaD7OSA&riu=http%3a%2f%2fwww.a2mh.com%2fwp-content%2fuploads%2f2018%2f01%2fPassage-au-banc-dune-pompe-hydraulique-EATON.jpg&ehk=XDbh6AcA1L9wC%2bkwwoybP%2bdDguyTGdfdXj6qDppSAeI%3d&risl=&pid=ImgRaw&r=0",
      title: t("services", "title"),
      description: t("services", "items")[0].description,
    },
    {
      image: "https://www.mon-energie-verte.com/wp-content/uploads/sites/2/2019/10/258-l-hydroelectricite-2048x1366.jpg",
      title: t("services", "title"),
      description: t("services", "items")[1].description,
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
                alt={slide.title as string}
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
