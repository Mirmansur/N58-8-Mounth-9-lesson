import { Carousel } from "antd";
import Image from "next/image";
import cars from "../../assets/images/cars.png"; // Tasvirni to'g'ri import qilish

const Carusel = () => {
  const onChange = (currentSlide: number) => {
    console.log(`Current slide: ${currentSlide}`);
  };

  return (
    <Carousel afterChange={onChange} autoplay>
      <div className="carousel-slide">
        <Image src={cars} alt="Company Logo" layout="fill" objectFit="cover" />
      </div>
      <div className="carousel-slide">
        <Image src={cars} alt="Company Logo" layout="fill" objectFit="cover" />
      </div>
      <div className="carousel-slide">
        <Image src={cars} alt="Company Logo" layout="fill" objectFit="cover" />
      </div>
      <div className="carousel-slide">
        <Image src={cars} alt="Company Logo" layout="fill" objectFit="cover" />
      </div>
    </Carousel>
  );
};

export default Carusel;
