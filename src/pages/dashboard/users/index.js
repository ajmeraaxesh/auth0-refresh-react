import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react'

const Users = () => {
    const { isAuthenticated } = useAuth0()
    console.log('Users Page: ', isAuthenticated)
    return <div>Users Home page</div>
}

export default withAuthenticationRequired(Users)
