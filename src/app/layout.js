import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'Oluwaseyi',
  description: 'This is Oluwaseyi Smith Bayode portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* Header */}
        <Header />

        {/* NavBar */}

        {/* SearchBox */}
        
        
        
        
        {children}</body>
    </html>
  )
}
