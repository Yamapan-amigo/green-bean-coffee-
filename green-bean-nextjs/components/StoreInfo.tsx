'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const storeDetails = [
  { icon: '📍', label: '住所', text: '東京都豊島区東池袋1-19-1' },
  { icon: '🕐', label: '営業時間', text: '7:00 - 22:00' },
  { icon: '📞', label: '電話', text: '03-1234-5678' },
  { icon: '🚃', label: 'アクセス', text: '池袋駅東口より徒歩4分' },
]

export default function StoreInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="store" className="py-32 px-4 bg-neutral-950" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-starbucks-green text-sm font-medium tracking-[0.3em] mb-4"
          >
            LOCATION
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            店舗情報
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Google Map with Custom Pin */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative h-[450px] rounded-3xl overflow-hidden group"
          >
            {/* Google Map iframe */}
            <iframe
              src="https://maps.google.com/maps?q=ハレザ池袋&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Custom 3D Pin Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ scale: 0, y: -50 }}
                animate={isInView ? { scale: 1, y: 0 } : {}}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="relative"
              >
                {/* Pin Shadow */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-black/40 rounded-full blur-md"
                />

                {/* 3D Pin */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  {/* Pin Body */}
                  <div className="relative">
                    {/* Outer glow */}
                    <div className="absolute inset-0 bg-starbucks-green rounded-full blur-xl opacity-50 scale-150" />

                    {/* Pin shape */}
                    <div className="relative w-16 h-16 bg-gradient-to-br from-starbucks-green via-emerald-500 to-teal-400 rounded-full shadow-2xl flex items-center justify-center border-4 border-white">
                      <span className="text-white font-bold text-xl">GB</span>
                    </div>

                    {/* Pin pointer */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] border-l-transparent border-r-transparent border-t-white drop-shadow-lg" />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[14px] border-l-transparent border-r-transparent border-t-starbucks-green" />
                  </div>

                  {/* Pulse rings */}
                  <motion.div
                    animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-starbucks-green rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-starbucks-green rounded-full"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Overlay border */}
            <div className="absolute inset-0 pointer-events-none border-2 border-white/10 rounded-3xl" />

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md rounded-2xl p-4 pointer-events-none"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-starbucks-green rounded-xl flex items-center justify-center text-white font-bold text-sm">
                  GB
                </div>
                <div>
                  <div className="text-white font-bold text-sm">GREEN BEAN COFFEE</div>
                  <div className="text-white/60 text-xs">Hareza池袋</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Store Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-white mb-2">
              GREEN BEAN COFFEE
            </h3>
            <p className="text-starbucks-green font-medium mb-8">Hareza池袋店</p>

            <div className="space-y-4">
              {storeDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-neutral-900/50 rounded-2xl border border-white/5 hover:border-starbucks-green/30 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 bg-starbucks-green/10 rounded-xl flex items-center justify-center text-2xl">
                    {detail.icon}
                  </div>
                  <div>
                    <div className="text-white/40 text-sm">{detail.label}</div>
                    <div className="text-white font-medium">{detail.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-8">
              <motion.a
                href="https://www.google.com/maps/search/?api=1&query=ハレザ池袋"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 py-4 bg-starbucks-green text-white font-semibold rounded-2xl hover:shadow-[0_0_40px_rgba(0,112,74,0.3)] transition-all text-center"
              >
                Google Mapで開く
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all"
              >
                お問い合わせ
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
