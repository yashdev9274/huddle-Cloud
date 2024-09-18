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

    trpc.autCallback.useQuery(undefined, {
        onSuccess: (response: { success: boolean }) => {
            const { success } = response;
            if (success) {
                router.push(origin ? `/${origin}` : '/dashboard')
            }
        },

        onError: (err: any) => {
            if (err.data?.code === "UNAUTHORIZED") {
                router.push("/sign-in")
            }
        },
        retry: true,
        retryDelay: 500,
    })


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