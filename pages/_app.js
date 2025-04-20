import '../styles/globals.css'
import { useVisitorTracking } from '../lib/hooks'

function MyApp({ Component, pageProps }) {
  // Track visitor IP on all page loads
  useVisitorTracking();
  
  return <Component {...pageProps} />
}

export default MyApp 