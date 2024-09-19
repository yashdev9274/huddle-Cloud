'use client'

import React from 'react'
import UploadButton from './UploadButton'
import { trpc } from 'app/_trpc/client'
import { Ghost } from 'lucide-react'

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
                <div></div>
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