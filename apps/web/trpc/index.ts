import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { publicProcedure, router } from './trpc'
import { TRPCError } from '@trpc/server';
import { db, users } from '../../../packages/db/index'

export const appRouter = router({

    authCallback: publicProcedure.query(async () => {
        const { getUser } = getKindeServerSession();
        const user = await getUser()

        if (!user.id || !user.email)
            throw new TRPCError({ code: 'UNAUTHORIZED' })

        const dbUser = await db.query.users.findFirst({
            with: {
                id: user.id,
            }
        })

        if (!dbUser) {
            await db.insert(users).values({
                // Change 'user' to the correct table reference

                id: Number(user.id),
                email: user.email // Ensure to include email here

            })
        }

        return { success: true }
    }),

});

export type AppRouter = typeof appRouter;