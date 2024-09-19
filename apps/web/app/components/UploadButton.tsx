'use client'

import { Button } from '../../src/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../../../web/src/components/ui/dialog'
// import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

function UploadButton() {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <Dialog
            open={isOpen}
            onOpenChange={(v) => {
                if (!v) {
                    setIsOpen(v)
                }
            }}
        >
            <DialogTrigger
                onClick={() => setIsOpen(true)}
                asChild
            >
                <Button className='bg-black'> Upload File</Button>

            </DialogTrigger>
            <DialogContent>
                example content
            </DialogContent>
        </Dialog>
    )
}

export default UploadButton