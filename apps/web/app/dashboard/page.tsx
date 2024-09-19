import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'
import { db, User } from '../../../../packages/db';

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
        <div>
            DashboardPage
            <div>
                {user.email}
            </div>
        </div>

    )
}

export default DashboardPage