'use client'

import React from 'react'
import UploadButton from './UploadButton'
import { trpc } from 'app/_trpc/client'
import { Ghost } from 'lucide-react'
import Link from 'next/link'

function Dashboard() {

    const { data: Files, isLoading } = trpc.getUserFiles.useQuery()

    return (
        <main className='mx-auto max-w-7xl md:p-10 '>
            <div className='mt-8 flex flex-col items-start justify-between  gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0'>
                <h1 className='mb-3 font-bold text-5xl text-gray-900'>
                    My Files
                </h1>

                <UploadButton />
            </div>

            {/* display Users Files */}

            {Files && Files?.length !== 0 ? (
                <ul className='mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3'>
                    {Files.sort((a, b) => {
                        return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
                    }).map((Files) => (
                        <li
                            key={Files.id}
                            className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg'>
                            <Link
                                href={`/dashboard/${Files.id}`}
                                className='flex flex-col gap-2'>
                                <div className='pt-6 px-6 flex w-full items-center justify-between space-x-6'>
                                    <div className='h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500' />
                                    <div className='flex-1 truncate'>
                                        <div className='flex items-center space-x-3'>
                                            <h3 className='truncate text-lg font-medium text-zinc-900'>
                                                {Files.filename}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </li>
                    ))}
                </ul>
            ) : isLoading ? (
                <div></div>
            ) : (
                <div className='mt-16 flex flex-col items-center gap-2'>
                    <Ghost className='h-8 w-8 text-zinc-800' />
                    <h3 className='font-semibold text-xl'>
                        Empty place! Nothing to show.
                    </h3>
                    <p> Upload some files</p>
                </div>
            )}
        </main>
    )
}

export default Dashboard