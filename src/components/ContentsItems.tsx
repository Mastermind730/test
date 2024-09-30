"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Define the types for the props
interface ContentsItemsProps {
    heading: string;
    paragraph: string;
    subheading: string;
}

const ContentsItems: React.FC<ContentsItemsProps> = ({ heading, paragraph, subheading }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);
    const controlAnimation = useAnimation();

    useEffect(() => {
        if (isInView) {
            // Firing the animation
            controlAnimation.start("visible");
        }
    }, [isInView, controlAnimation]);

    return (
        <div ref={ref}>
            <motion.div 
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controlAnimation}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                <h1 className='text-4xl font-bold underline underline-offset-4 text-[#00F8EC] underline-violet-700 py-3'>{heading}</h1>
                <p className='text-[18px] pb-4'>{paragraph}</p>
                <h3 className='text-[16px] font-bold underline underline-offset-4 pb-1 pl-2'>{subheading}</h3>
            </motion.div>
        </div>
    );
}

export default ContentsItems;
