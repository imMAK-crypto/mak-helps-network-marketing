'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '+91XXXXXXXXXX';

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, '')}?text=${encodeURIComponent(
    'Hi M.A.K Helps — I’d like a luxury website for my network marketing business.'
  )}`;

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-[70]"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-black shadow-[0_18px_70px_rgba(0,0,0,0.55)] transition hover:scale-[1.02] active:scale-[0.99]"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </Link>
    </motion.div>
  );
}

