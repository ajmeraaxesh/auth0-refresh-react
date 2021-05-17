import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from 'next/router'

const Nav = () => {
    const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0()
    const router = useRouter()

    console.log(
        'NAV: loading: ',
        isLoading,
        ' AUTHENTICATED :: ',
        isAuthenticated,
        'router Pathname:: ',
        router.pathname
    )

    if (isLoading) return <div>Loading Page...</div>

    if (!isAuthenticated) {
        let returnToUrl = undefined
        if (typeof window !== 'undefined' && window.location.pathname !== '/') {
            returnToUrl = window.location.pathname
        }
        console.log(
            'NAV calling loginWithRedirect:: returnToUrl:: ',
            returnToUrl
        )

        loginWithRedirect({
            appState: {
                returnTo: returnToUrl,
            },
        })
        return null
    }

    console.log('NAV: isAuthenticated and now returning null')
    return null
}

export default Nav
