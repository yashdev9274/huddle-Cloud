'use client'

import React from 'react'
import UploadButton from './UploadButton'
import { trpc } from 'app/_trpc/client'
import { Ghost, File, Upload, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'

function Dashboard() {

    const { data: File, isLoading } = trpc.getUserFiles.useQuery()



    return (
        <div className="flex h-screen bg-gray-100">
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex justify-between items-center p-4 bg-white shadow-sm">
                    <h1 className="text-2xl font-bold text-gray-900">Cloud Uploader Dashboard</h1>
                    {/* <Button className="flex items-center gap-2"> */}
                    <UploadButton />

                    {/* </Button> */}
                </header>
            </div>

            <main className='mx-auto max-w-7xl md:p-10 '>

                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* File Preview */}
                        <Card className="col-span-2">
                            <CardHeader>
                                <CardTitle>File Preview</CardTitle>
                            </CardHeader>
                            <CardContent>

                                <div className="flex items-center justify-center h-64 bg-gray-200 rounded-lg">
                                    <span className="text-gray-400">No file selected</span>
                                </div>

                            </CardContent>
                        </Card>

                        {/* Notes */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Notes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Textarea
                                    placeholder="Add a note..."
                                    className="w-full h-32"
                                />
                            </CardContent>
                            <CardFooter>
                                <Button>Save Note</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>


                {/* display Users Files */}

                {File && File?.length !== 0 ? (
                    <ul className='mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3'>
                        {File.sort((a, b) => {
                            return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
                        }).map((File) => (
                            <li
                                key={File.id}
                                className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg'>
                                <Link
                                    href={`/dashboard/${File.id}`}
                                    className='flex flex-col gap-2'>
                                    <div className='pt-6 px-6 flex w-full items-center justify-between space-x-6'>
                                        <div className='h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500' />
                                        <div className='flex-1 truncate'>
                                            <div className='flex items-center space-x-3'>
                                                <h3 className='truncate text-lg font-medium text-zinc-900'>
                                                    {File.filename}
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
        </div>
    )
}

export default Dashboard