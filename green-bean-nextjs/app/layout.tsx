import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GREEN BEAN COFFEE | グリーンビーンコーヒー',
  description: '一杯のコーヒーが、あなたの一日を特別に。厳選された豆を丁寧に焙煎。最高の一杯をお届けします。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="text-starbucks-dark">{children}</body>
    </html>
  )
}
