import { useRouter, useSearchParams } from "next/navigation";

const Page = async () => {
    const router = useRouter();
    const searchParam = useSearchParams();
    const origin = searchParam.get('origin')

    // const apiResponse = await fetch('/api/whatever')
    // const data = await apiResponse.json()
}

export default Page