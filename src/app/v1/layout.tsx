import { Header } from '@/components/v1/header'
import { Footer } from '@/components/v1/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {children}
      </main >
      <Footer />
    </>
  )
}
