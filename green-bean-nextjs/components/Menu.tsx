'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const menuItems = [
  {
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80',
    name: 'ドリップコーヒー',
    description: '毎日変わるシングルオリジン。豆本来の風味をお楽しみください。',
    price: '¥380',
    tag: 'POPULAR',
  },
  {
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80',
    name: 'カフェラテ',
    description: 'エスプレッソとスチームミルクの絶妙なハーモニー。',
    price: '¥450',
    tag: 'BEST',
  },
  {
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80',
    name: '抹茶ラテ',
    description: '京都産宇治抹茶を使用。濃厚で香り高い一杯。',
    price: '¥480',
    tag: 'NEW',
  },
  {
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&q=80',
    name: 'コールドブリュー',
    description: '12時間かけて水出し抽出。すっきりまろやかな味わい。',
    price: '¥420',
    tag: null,
  },
]

export default function Menu() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="menu" className="py-32 px-4 bg-neutral-950" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-starbucks-green text-sm font-medium tracking-[0.3em] mb-4"
          >
            OUR MENU
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            厳選されたメニュー
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            世界中から集めた最高品質の豆を使用した、こだわりのドリンクをご用意しています
          </motion.p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group relative bg-neutral-900 rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />

                {/* Tag */}
                {item.tag && (
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      item.tag === 'NEW' ? 'bg-emerald-500 text-white' :
                      item.tag === 'BEST' ? 'bg-amber-500 text-white' :
                      'bg-white/20 backdrop-blur text-white'
                    }`}>
                      {item.tag}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-starbucks-green transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-starbucks-green">
                    {item.price}
                  </span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Order Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full py-3 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-starbucks-green hover:border-starbucks-green transition-all"
                >
                  注文する
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,112,74,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-starbucks-green text-starbucks-green font-semibold rounded-full hover:bg-starbucks-green hover:text-white transition-all"
          >
            すべてのメニューを見る →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
