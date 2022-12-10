import '../styles/globals.css'    
import type { AppProps } from 'next/app'
import NavMenu from '../src/Components/navigation'

export default function App({ Component, pageProps }: AppProps) {
  return (<><Component {...pageProps} />
  <NavMenu></NavMenu></>)
}
