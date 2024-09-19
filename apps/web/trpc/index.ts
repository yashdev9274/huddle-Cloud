import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { publicProcedure, router } from './trpc'
import { TRPCError } from '@trpc/server';
import { db, User } from '../../../packages/db/index'
// import { drizzle } from 'drizzle-orm/node-postgres';
// import * as schema from '../../../packages/db/schema'
// import { client } from '../../web/app/_trpc/client'

export const appRouter = router({

    authCallback: publicProcedure.query(async () => {
        const { getUser } = getKindeServerSession();
        const user = await getUser()
        // const db = drizzle(client, { schema });

        if (!user || !user.id || !user.email)
            throw new TRPCError({ code: 'UNAUTHORIZED' })

        console.log('User: ', User);
        console.log('DB:', db);

        const dbUser = await db.query.User.findFirst({
            with: {
                id: User.id,
            }
        })

        if (!dbUser) {
            await db.insert(User).values({

                id: Number(User.id),
                email: user.email,

            });
        }

        return { success: true }
    }),

});

export type AppRouter = typeof appRouter;