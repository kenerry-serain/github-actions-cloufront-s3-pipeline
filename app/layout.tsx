
import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'DevOps na Nuvem',
  description: 'Evento',
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P2F835BH');
          `}
        </Script>
        {/* <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '793378049539320');
            fbq('track', 'PageView');
          `}
        </Script> */}
        <noscript>
          <img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=793378049539320&ev=PageView&noscript=1" />
        </noscript>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            html, body {
              background: linear-gradient(to bottom right, #000000, #0f172a, #1e3a8a) !important;
              background-attachment: fixed !important;
              margin: 0 !important;
              padding: 0 !important;
              min-height: 100vh !important;
              min-height: 100dvh !important;
            }
            
            @supports (-webkit-touch-callout: none) {
              html, body {
                min-height: -webkit-fill-available !important;
              }
            }
          `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P2F835BH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  )
}
