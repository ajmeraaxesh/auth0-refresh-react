import '@styles/globals.css'
import Router from 'next/router'

//  import Nav from '@components/Nav'

// const onRedirectCallback = (appState) => {
//     console.log('onRedirectCallback:', { appState })
//     Router.replace(appState?.returnTo || '/dashboard')
// }

function MyApp({ Component, pageProps }) {
    return (
        // As no navigation redirect and checks needs to be done
        // <Nav />
        <Component {...pageProps} />
    )
}

export default MyApp
