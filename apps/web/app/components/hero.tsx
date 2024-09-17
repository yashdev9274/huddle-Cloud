import Link from 'next/link'
// import MaxWidthWrapper from './MaxWidthWrapper'
// import { buttonVariants } from './ui/button'
import {
    LoginLink,
    RegisterLink,
    getKindeServerSession,
} from '@kinde-oss/kinde-auth-nextjs/server'
import { ArrowRight } from 'lucide-react'
// import UserAccountNav from './UserAccountNav'
// import MobileNav from './MobileNav'

const Navbar = () => {
    const { getUser } = getKindeServerSession()
    const user = getUser()

    return (
        <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
            {/* <MaxWidthWrapper> */}
            <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                <Link
                    href='/'
                    className='flex z-40 font-semibold'>
                    <span>Huddle-Cloud</span>
                </Link>

                {/* <MobileNav isAuth={!!user} /> */}

                <div className='hidden items-center space-x-4 sm:flex'>
                    <LoginLink
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    >
                        Sign in
                    </LoginLink>
                    <RegisterLink
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    >
                        Get started{' '}
                        <ArrowRight className='ml-1.5 h-5 w-5' />
                    </RegisterLink>
                </div>
            </div>
            {/* </MaxWidthWrapper> */}
        </nav>
    )
}

export default Navbar