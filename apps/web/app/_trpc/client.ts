import { createTRPCReact } from '@trpc/react-query';
import { httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../trpc/index';

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            url: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/trpc`,
            transformer: { // Add this line
                // Specify your transformer options here, e.g., for JSON
                serialize: (data) => JSON.stringify(data),
                deserialize: (data) => JSON.parse(data),
            },
        }),
    ],
});