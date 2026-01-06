'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: '🌱',
    title: 'サステナブル調達',
    description: '環境に配慮した農園から直接仕入れ。エシカルな選択をあなたの一杯に。',
    stat: '100%',
    statLabel: 'フェアトレード',
  },
  {
    icon: '🔥',
    title: '毎日の自家焙煎',
    description: '店舗で毎朝焙煎。最高の鮮度で香り高いコーヒーをお届けします。',
    stat: '24h',
    statLabel: '焙煎から提供まで',
  },
  {
    icon: '👨‍🍳',
    title: '熟練バリスタ',
    description: '国内外の大会受賞歴を持つバリスタが、心を込めて一杯一杯お作りします。',
    stat: '10+',
    statLabel: '受賞歴',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="py-32 px-4 bg-black relative overflow-hidden" ref={ref}>
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-starbucks-green text-sm font-medium tracking-[0.3em] mb-4"
          >
            WHY CHOOSE US
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            私たちのこだわり
          </motion.h2>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-starbucks-green/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative p-8 bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-3xl hover:border-starbucks-green/30 transition-all">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-5xl mb-6"
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-starbucks-green transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 leading-relaxed mb-8">
                  {feature.description}
                </p>

                {/* Stat */}
                <div className="pt-6 border-t border-white/10">
                  <div className="text-4xl font-bold bg-gradient-to-r from-starbucks-green to-emerald-400 bg-clip-text text-transparent">
                    {feature.stat}
                  </div>
                  <div className="text-sm text-white/40 mt-1">
                    {feature.statLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 p-8 md:p-12 bg-gradient-to-r from-starbucks-green/20 to-emerald-500/20 rounded-3xl border border-starbucks-green/20 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                最高の一杯を体験しませんか？
              </h3>
              <p className="text-white/60">
                初回ご来店の方にドリンク1杯無料クーポンをプレゼント
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-starbucks-green text-white font-semibold rounded-full whitespace-nowrap hover:shadow-[0_0_40px_rgba(0,112,74,0.5)] transition-all"
            >
              クーポンを受け取る
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
