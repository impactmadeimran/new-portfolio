/* eslint-disable @next/next/no-page-custom-font */
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />


    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Poppins&display=swap" rel="stylesheet" />
  </>
}
