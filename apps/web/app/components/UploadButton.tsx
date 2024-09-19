'use client'

import { Dialog, DialogTrigger } from '@/components/ui/dialog'
// import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { Button } from '../../../web/src/components/ui/button'

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
            <DialogTrigger asChild>
                <Button className='bg-black'> Upload File</Button>

            </DialogTrigger>
        </Dialog>
    )
}

export default UploadButton