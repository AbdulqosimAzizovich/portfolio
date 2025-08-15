"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "logistic service", "interest", "study"];

  const works = [
    {
      id: 1,
      title: "Vabank Mc",
      category: "logistic service",
      image: "/1.jpg?height=400&width=600",
      year: "2025",
    },
    {
      id: 2,
      title: "MedifyGdrive",
      category: "interest",
      image: "/2.jpg?height=400&width=600",
      year: "2023",
    },
    {
      id: 3,
      title: "Sima Freights LLC",
      category: "logistic service",
      image: "/3.jpg?height=400&width=600",
      year: "2025",
    },
    {
      id: 4,
      title: "Special English Course",
      category: "study",
      image: "/4.jpg?height=400&width=600",
      year: "2024",
    },
    {
      id: 5,
      title: "3d phone in telegram app",
      category: "interest",
      image: "/5.jpg?height=400&width=600",
      year: "2024",
    },
    {
      id: 6,
      title: "The Recruiting",
      category: "logistic service",
      image: "/9.png?height=400&width=600",
      year: "2025",
    },
  ];

  const filteredWorks = works.filter((work) =>
    selectedCategory === "all" ? true : work.category === selectedCategory
  );

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden bg-zinc-900">
                  <CardContent className="p-0">
                    <div className="group relative">
                      <img
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        className="w-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3 className="text-xl font-semibold text-white">
                          {work.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-300">
                          {work.year}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
