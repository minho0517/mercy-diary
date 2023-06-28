import '@/styles/globals.css'
import Layout from '@/components/Layouts/Layouts'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
