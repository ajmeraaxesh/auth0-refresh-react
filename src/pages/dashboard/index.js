import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import Link from 'next/link'

const Dashboard = () => {
    const { isAuthenticated, isLoading } = useAuth0()

    console.log(
        'Dashboard page isLoading:: ',
        isLoading,
        'isAuthenticated:: ',
        isAuthenticated
    )

    return (
        <div className="text-2xl font-semibold">
            Dashboard:
            <p>Auth Status: {isAuthenticated}</p>
            <Link href="/dashboard/users">
                <a className="underline">Users</a>
            </Link>
        </div>
    )
}

export default withAuthenticationRequired(Dashboard)
