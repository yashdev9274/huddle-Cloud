import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'
import { db, User } from '../../../../packages/db';
import Dashboard from 'app/components/Dashboard';

const DashboardPage = async () => {

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id) redirect('/auth-callback?origin=dashboard')

    // const dbUser = await db.query.User.findFirst({
    //     with: {
    //         id: User.id,
    //     }
    // })

    return (

        <Dashboard />

    )
}

export default DashboardPage