import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import cardData from '../assets/cardData.json';
import Image from 'next/image';
import Link from 'next/link';

interface CardData {
  image: string;
  name: string;
  role: string;
  linkedin: string;
  description: string;
}

function Card_S() {
  return (
    <div className="py-16 w-[80%] ">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {cardData.map((card: CardData, index: number) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-white transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <Image
                src={card.image} 
                alt={card.name}
                
                width={150} height={150}
                className="mb-4 text-center object-cover rounded-full" 
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-1">{card.name}</h3>
                <p className="text-blue-400 mb-2">{card.role}</p>
                <Link 
                  href={card.linkedin} 
                  className="text-blue-500 underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
                <p className="mt-4 text-sm text-gray-300">{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Card_S;
