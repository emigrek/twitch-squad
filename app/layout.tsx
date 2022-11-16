import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className='bg-black overflow-x-hidden m-0 p-0'>
          {children}
        </div>
      </body>
    </html>
  )
}
