import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import galleryImage1 from "../assets/gallery/image-1.webp";
import galleryImage2 from "../assets/gallery/image-2.webp";
import galleryImage3 from "../assets/gallery/image-3.webp";
import galleryImage4 from "../assets/gallery/image-4.webp";
import galleryImage5 from "../assets/gallery/image-5.webp";

const galleryImages = [{ src: galleryImage4, alt: "Society celebrations" }];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeLightbox = () => setSelectedIndex(null);

  const showPrevious = (event) => {
    event.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  const showNext = (event) => {
    event.stopPropagation();
    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <main className="min-h-screen bg-[#F4FAFC]">
      {/* Gallery Header */}
      <section className="bg-[#003F53] px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-valeria text-4xl leading-tight md:text-6xl">
            Gallery
          </h1>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="mb-8 flex items-center justify-between">
          <span className="text-sm text-[#52727D]">
            {galleryImages.length} Photos
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`group relative overflow-hidden rounded-xl bg-[#E7F7FA] ${
                index % 7 === 0 ? "aspect-[3/4] sm:row-span-2" : "aspect-square"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-[#003F53]/0 transition duration-300 group-hover:bg-[#003F53]/20" />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close gallery"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous image"
            className="absolute left-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft size={28} />
          </button>

          <img
            src={galleryImages[selectedIndex].src}
            alt={galleryImages[selectedIndex].alt}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain"
          />

          <button
            type="button"
            onClick={showNext}
            aria-label="Next image"
            className="absolute right-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={28} />
          </button>

          <p className="absolute bottom-5 text-sm text-white/70">
            {selectedIndex + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </main>
  );
};

export default Gallery;
