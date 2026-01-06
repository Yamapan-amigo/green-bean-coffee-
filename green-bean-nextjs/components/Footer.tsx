'use client'

import { motion } from 'framer-motion'

const footerLinks = {
  menu: {
    title: 'MENU',
    links: ['ドリンク', 'フード', 'コーヒー豆', 'グッズ'],
  },
  company: {
    title: 'COMPANY',
    links: ['会社概要', '採用情報', 'ニュース', 'IR情報'],
  },
  support: {
    title: 'SUPPORT',
    links: ['お問い合わせ', 'よくある質問', 'プライバシー', '利用規約'],
  },
}

const socialLinks = [
  { icon: '𝕏', label: 'Twitter' },
  { icon: '📸', label: 'Instagram' },
  { icon: '▶', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-starbucks-green to-emerald-400 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                GB
              </div>
              <div>
                <div className="text-xl font-bold text-white">GREEN BEAN</div>
                <div className="text-sm text-white/40">COFFEE</div>
              </div>
            </motion.div>

            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              最高の一杯を、あなたの日常に。世界中から厳選した豆で、特別なコーヒー体験をお届けします。
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/60 hover:bg-starbucks-green hover:border-starbucks-green hover:text-white transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className="text-starbucks-green font-medium text-sm tracking-wider mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-white/50 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-starbucks-green transition-all" />
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-lg mb-1">
                ニュースレターに登録
              </h3>
              <p className="text-white/40 text-sm">
                新メニューや限定クーポンをいち早くお届け
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="メールアドレス"
                className="flex-1 md:w-64 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-starbucks-green transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-starbucks-green text-white font-medium rounded-xl hover:shadow-[0_0_30px_rgba(0,112,74,0.4)] transition-all whitespace-nowrap"
              >
                登録
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-sm">
            <p>&copy; 2026 GREEN BEAN COFFEE. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
              <a href="#" className="hover:text-white transition-colors">利用規約</a>
              <a href="#" className="hover:text-white transition-colors">サイトマップ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
