import '@styles/globals.css'
import Router from 'next/router'
import { Auth0Provider } from '@auth0/auth0-react'
import Nav from '@components/Nav'

const onRedirectCallback = (appState) => {
    console.log('onRedirectCallback:', { appState })
    Router.replace(appState?.returnTo || '/dashboard')
}

function MyApp({ Component, pageProps }) {
    return (
        <Auth0Provider
            domain={process.env.NEXT_PUBLIC_DOMAIN}
            clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
            audience={process.env.NEXT_PUBLIC_AUDIENCE}
            redirectUri={
                typeof window !== 'undefined' &&
                `${window.location.origin}/dashboard`
            }
            onRedirectCallback={onRedirectCallback}
        >
            <Nav />
            <Component {...pageProps} />
        </Auth0Provider>
    )
}

export default MyApp
