"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, Layers, Compass } from "lucide-react";
import { useTranslation } from "@/i18n";

const JAKARTA = '"Plus Jakarta Sans", sans-serif';
const INTER = 'Inter, sans-serif';
const GRADIENT = 'linear-gradient(135deg, #1FA6C1, #A15BF1)';

interface ServiceCardData {
  icon: React.ReactNode;
  titleKey: string;
  descKey: string;
  linkKey: string;
  href: string;
}

const serviceData: ServiceCardData[] = [
  {
    icon: <Cpu className="w-7 h-7" strokeWidth={1.5} />,
    titleKey: "threeWaysCard1Title",
    descKey: "threeWaysCard1Desc",
    linkKey: "threeWaysCard1Link",
    href: "/services/agents",
  },
  {
    icon: <Layers className="w-7 h-7" strokeWidth={1.5} />,
    titleKey: "threeWaysCard2Title",
    descKey: "threeWaysCard2Desc",
    linkKey: "threeWaysCard2Link",
    href: "/services/infrastructure",
  },
  {
    icon: <Compass className="w-7 h-7" strokeWidth={1.5} />,
    titleKey: "threeWaysCard3Title",
    descKey: "threeWaysCard3Desc",
    linkKey: "threeWaysCard3Link",
    href: "/services/consulting",
  },
];

function ServiceCard({ card, index, translations }: { card: ServiceCardData; index: number; translations: Record<string, string> }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col h-full bg-white border border-[#E2E8F0] rounded-2xl p-9 md:p-10 transition-all duration-200 hover:border-[#1FA6C1] hover:-translate-y-1"
    >
      {/* Icon Circle */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center text-white shrink-0"
        style={{ background: GRADIENT }}
      >
        {card.icon}
      </div>

      {/* Title */}
      <h3
        className="text-[20px] font-bold text-[#0F1729] mt-5"
        style={{ fontFamily: JAKARTA, fontWeight: 700 }}
      >
        {translations[card.titleKey]}
      </h3>

      {/* Description */}
      <p
        className="text-[15px] leading-[1.6] text-[#2B3650] mt-2.5 flex-grow"
        style={{ fontFamily: INTER, fontWeight: 400 }}
      >
        {translations[card.descKey]}
      </p>

      {/* Link */}
      <Link
        to={card.href}
        className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#1FA6C1] mt-5 hover:underline"
        style={{ fontFamily: INTER, fontWeight: 600 }}
      >
        {translations[card.linkKey]}
      </Link>
    </motion.div>
  );
}

export function IndustryCards() {
  const t = useTranslation();
  const hp = t.homepage as unknown as Record<string, string>;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-semibold text-[#1FA6C1] uppercase tracking-[2px] mb-4"
            style={{ fontFamily: INTER }}
          >
            {hp.threeWaysEyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[32px] md:text-[44px] leading-[1.15] font-extrabold text-[#0F1729] max-w-[640px] mx-auto"
            style={{ fontFamily: JAKARTA, fontWeight: 800 }}
          >
            {hp.threeWaysTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[18px] leading-[1.55] text-[#2B3650] max-w-[580px] mx-auto mt-4"
            style={{ fontFamily: INTER, fontWeight: 400 }}
          >
            {hp.threeWaysSubtitle}
          </motion.p>
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {serviceData.map((card, index) => (
            <ServiceCard key={index} card={card} index={index} translations={hp} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p
            className="text-[16px] text-[#2B3650] inline"
            style={{ fontFamily: INTER, fontWeight: 400 }}
          >
            {hp.threeWaysFooterText}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-white font-semibold text-[15px] rounded-lg py-3 px-6 ml-3 transition-transform duration-200 hover:scale-[1.02]"
            style={{
              background: GRADIENT,
              fontFamily: INTER,
              fontWeight: 600,
            }}
          >
            {hp.threeWaysCtaText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
