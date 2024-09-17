import { trpc } from "app/_trpc/client";
import { useRouter, useSearchParams } from "next/navigation";

const Page = async () => {
    const router = useRouter();
    const searchParam = useSearchParams();
    const origin = searchParam.get('origin')

    // const apiResponse = await fetch('/api/whatever')
    // const data = await apiResponse.json()

    const { data, isLoading } = trpc.autCallback.useQuery(undefined, {
        onSuccess: (response: { success: boolean }) => {
            const { success } = response;
            if (success) {
                router.push(origin ? `/${origin}` : '/dashboard')
            }
        }
    })
}

export default Page