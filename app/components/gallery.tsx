"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const images = [
    {
      src: "/7.jpg?height=600&width=400",
      alt: "Art piece 1",
      title: "Trucking Company Marketplace",
    },
    {
      src: "/8.jpg?height=600&width=400",
      alt: "Art piece 2",
      title: "Trusted Freight Forwarding Network",
    },
    {
      src: "/5.jpg?height=600&width=400",
      alt: "Art piece 3",
      title: "Digital Nostalgia",
    },
  ];

  return (
    <section className="relative py-20">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Works
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg "
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="aspect-[3/3] overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="h-full opacity-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
