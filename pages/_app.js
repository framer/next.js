import '../styles/globals.css'

globalThis.navigator ??= { userAgent: "" }
globalThis.window ??= globalThis

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
