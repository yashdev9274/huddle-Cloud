import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
    const router = useRouter();
    const searchParam = useSearchParams();
    const origin = searchParam.get('origin')
}

export default Page