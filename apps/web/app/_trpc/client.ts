import type { AppRouter } from '../../trpc';
import { createTRPCReact } from '@trpc/react-query';

export const trpc: ReturnType<typeof createTRPCReact<AppRouter>> = createTRPCReact<AppRouter>({})