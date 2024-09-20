import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { privateProcedure, publicProcedure, router } from './trpc'
import { TRPCError } from '@trpc/server';
import { db } from '../../../packages/db/index'
// import { drizzle } from 'drizzle-orm/node-postgres';
import { User } from '../../../packages/db/schema'
import { eq } from 'drizzle-orm';
// import { client } from '../../web/app/_trpc/client'

export const appRouter = router({

    authCallback: publicProcedure.query(async () => {
        const { getUser } = getKindeServerSession();
        const user = await getUser()
        // const db = drizzle(client, { schema });

        if (!user || !user.id || !user.email)
            throw new TRPCError({ code: 'UNAUTHORIZED' })

        // console.log('User: ', User);
        // console.log('DB:', db);

        try {
            const dbUser = await db.select().from(User).where(eq(User.id, user.id));

            if (dbUser.length === 0) {
                // If user doesn't exist, create them
                await db.insert(User).values({
                    id: user.id,
                    email: user.email,
                });
            }

            return { success: true }


        } catch (error) {
            console.error('Error in authCallback', error);
            throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: "An unexpected error occured" })
        }
    }),

    getUserFiles: privateProcedure.query(async ({ ctx }) => {

        const { userId } = ctx;

        if (!userId) {
            throw new TRPCError({ code: 'UNAUTHORIZED', message: 'User ID is required' });
        }

        try {

            return await db.query.File.findMany({
                with: {
                    userId
                }
            })

        } catch (error) {
            console.error('Error in getUserFiles:', error);
            throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'An unexpected error occurred' });
        }

    })

});

export type AppRouter = typeof appRouter;