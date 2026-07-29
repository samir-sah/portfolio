import { Analytics } from '@vercel/analytics/next'
import { Montserrat } from 'next/font/google'
import { Providers } from '@/components/providers'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata = {
  title: 'Samir Sah | Software Engineer',
  description:
    'Final-year Information Science student and Software Engineer specializing in full-stack development, scalable backend systems, REST APIs, modern web applications, distributed systems, and cloud technologies.',
  generator: 'v0.app',
  metadataBase: new URL('https://samirsah.vercel.app'),
  openGraph: {
    title: 'Samir Sah | Software Engineer',
    description:
      'Building reliable software systems with a focus on performance, scalability, and thoughtful user experience.',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Samir Sah — Software Engineer' }],
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F7F4' },
    { media: '(prefers-color-scheme: dark)', color: '#151311' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`bg-background ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased grain">
        <Providers>{children}</Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
