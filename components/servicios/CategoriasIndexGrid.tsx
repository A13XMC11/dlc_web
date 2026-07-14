"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  ShieldCheck, Home, DoorOpen, Zap, Code2, Wrench,
} from "lucide-react";
import { categoriasIndex } from "./categorias-data";

const INDEX_ICON_MAP: Record<string, LucideIcon> = {
  ShieldCheck, Home, DoorOpen, Zap, Code2, Wrench,
};

export default function CategoriasIndexGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categoriasIndex.map((categoria, index) => {
        const IndexIcon = INDEX_ICON_MAP[categoria.iconName];
        return (
          <motion.div
            key={categoria.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <Link
              href={categoria.href}
              className="relative group flex flex-col justify-between bg-dark-slate/40 border border-[#242424] hover:border-[rgba(12,192,223,0.5)] hover:shadow-[0_8px_32px_rgba(12,192,223,0.12)] p-8 rounded-3xl cursor-pointer transition-all duration-300 ease-in-out overflow-hidden min-h-[280px]"
            >
              {/* Top row: icon + arrow */}
              <div className="flex items-start justify-between mb-7">
                <div className="w-[72px] h-[72px] rounded-2xl bg-[#1a1a1a]/80 border border-[#242424] flex items-center justify-center group-hover:border-brand-cyan/40 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(12,192,223,0.2)] transition-all duration-300 ease-out">
                  {IndexIcon && (
                    <IndexIcon
                      size={36}
                      className="text-slate-400 group-hover:text-cyan-neon transition-colors duration-300"
                    />
                  )}
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-neon group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-[1.15] transition-all duration-200 ease-in-out mt-1" />
              </div>

              {/* Title */}
              <h3 className="font-sans text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-neon transition-colors duration-300">
                {categoria.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed font-sans flex-1">
                {categoria.description}
              </p>

              {/* Count */}
              <div className="mt-6 pt-5 border-t border-[#242424]/80 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/50 group-hover:bg-brand-cyan transition-colors duration-300 flex-shrink-0" />
                <span className="text-xs text-slate-400 font-sans">
                  {categoria.cardCount} {categoria.cardCountLabel}
                </span>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-cyan-neon transition-all duration-[400ms] ease-in-out" />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
