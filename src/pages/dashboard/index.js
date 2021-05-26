import Link from 'next/link'

const Dashboard = () => {
    return (
        <div className="text-2xl font-semibold">
            Dashboard:
            <Link href="/dashboard/users">
                <a className="underline">Users</a>
            </Link>
        </div>
    )
}

export default Dashboard
