import React from 'react';
import { Card, Divider, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from 'next/image';
import styles from './NeonCard.module.css'; // Assuming you save the CSS in a NeonCard.module.css file



interface CustomCardProps {
  className?: string;
  headerText?: string;
  bodyContent?: string;
  footerText?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonText?: string;
  imageClassName?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  className = "",
  headerText = "Neon Header",
  bodyContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  footerText = "Neon Footer",
  imageSrc = "", // Assuming this is your image 
  imageAlt = "Card background",
  buttonText = "Learn more",
  imageClassName = ""
}) => {
  return (
    <div className={`${styles['neon-card']}`}>
      <Card className={`py-4 ${className} flex justify-between h-[100%]`}>
        <CardHeader className={`${styles['neon-card-header']}`}>
          {headerText}
        </CardHeader>
        <CardBody className={`${styles['neon-card-body']} `}>
          <Image
            alt={imageAlt}
            src={imageSrc}
            width={400}
            height={200}
            className={`${imageClassName} object-cover rounded-xl`}
            
          />
          <p className="mt-4">{bodyContent}</p>
        </CardBody>
        <CardFooter   className={`${styles['neon-card-footer']}`}>
          <small>{footerText}</small>
          <button className={`${styles['neon-button']}`}>{buttonText}</button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CustomCard;
