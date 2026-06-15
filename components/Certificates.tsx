"use client";

import { useState } from "react";
import { certificates } from "@/data/portfolio";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal = (index: number) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  const prev = () => {
    if (activeIndex === null) return;
    setActiveIndex(
      (activeIndex - 1 + certificates.length) % certificates.length
    );
  };

  const next = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % certificates.length);
  };

  return (
    <section id="certificates" className="py-24 px-8 max-w-6xl mx-auto">
      <p className="font-mono text-xs text-purple-500 tracking-[0.2em] uppercase mb-3">
        {"// 04 — certificates"}
      </p>

      <div className="h-px bg-gradient-to-r from-purple-700 to-transparent opacity-40 mb-3" />

      <h2 className="font-space font-bold text-[clamp(1.6rem,3vw,2.2rem)] text-white mb-12">
        Credentials
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((cert, index) => (
          <div
            key={cert.name}
            onClick={() => openModal(index)}
            className="cursor-pointer bg-[#111827] border border-purple-900/30 rounded-xl p-5 flex flex-col gap-3 hover:border-purple-600 hover:-translate-y-1 transition-all duration-200"
          >
            <div>
              <div className="font-mono text-[0.68rem] text-gray-500 uppercase tracking-widest">
                {cert.issuer}
              </div>
              <div className="font-space font-medium text-white text-sm">
                {cert.name}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.7rem] text-gray-500">
                {cert.date}
              </span>

              <span className="text-green-300 text-[0.65rem] font-mono">
                Verified
              </span>
            </div>

            {/* PDF PREVIEW */}
            <div className="w-full h-48 rounded-lg overflow-hidden border border-purple-900/30 bg-white">
              <iframe
                src={`${cert.pdf}#toolbar=0`}
                className="w-full h-full"
                title={cert.name}
              />
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          {/* Close */}
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close certificate preview"
            className="absolute top-5 right-5 text-white"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous certificate"
            className="absolute left-5 text-white"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            aria-label="Next certificate"
            className="absolute right-5 text-white"
          >
            <ChevronRight size={40} />
          </button>

          {/* PDF VIEWER */}
          <div className="w-[90%] max-w-4xl h-[80vh] bg-[#111827] rounded-lg overflow-hidden border border-purple-900/30">
            <iframe
              src={`${certificates[activeIndex].pdf}#toolbar=0`}
              className="w-full h-full"
              title={certificates[activeIndex].name}
            />
          </div>
        </div>
      )}
    </section>
  );
}