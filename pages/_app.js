import '../styles/globals.css'
import { SessionProvider } from '@auth/nextjs/client'


export default function App({ Component, pageProps }) {
return (
<SessionProvider session={pageProps.session}>
<Component {...pageProps} />
</SessionProvider>
)
}
