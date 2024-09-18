'use client'

import { trpc } from "app/_trpc/client";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
    const router = useRouter();
    const searchParam = useSearchParams();
    const origin = searchParam.get('origin')

    // const apiResponse = await fetch('/api/whatever')
    // const data = await apiResponse.json()

    const { data, error } = trpc.authCallback.useQuery(undefined, {
        retry: true,
        retryDelay: 500,
    });

    if (error) {
        if (error.data?.code === 'UNAUTHORIZED') {
            router.push('/sign-in');
        }
    }

    if (data?.success) {
        // user is synced to db
        router.push(origin ? `/${origin}` : '/dashboard');
    }


    return (
        <div className='w-full mt-24 flex justify-center'>
            <div className='flex flex-col items-center gap-2'>
                <Loader2 className='h-8 w-8 animate-spin text-zinc-800' />
                <h3 className='font-semibold text-xl'>
                    Setting up your account...
                </h3>
                <p>You will be redirected automatically.</p>
            </div>
        </div>
    )

}

export default Page