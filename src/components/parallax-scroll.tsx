"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/app/utils/cn";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const half = Math.ceil(images.length / 2);

  const firstPart = images.slice(0, half);
  const secondPart = images.slice(half);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 items-start max-w-5xl mx-auto gap-10 py-36 px-8"
        ref={gridRef}
      >
        <div className="grid gap-12">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <Image
                src={el}
                className="h-96 w-full object-cover object-left-top rounded-lg border-2 border-black border-solid border-gradient !m-0 !p-0"
                height="600"
                width="850"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-12">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Image
                src={el}
                className="h-96 w-full object-cover object-left-top rounded-lg border-2 border-black border-solid border-gradient gap-10 !m-0 !p-0"
                height="600"
                width="850"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
