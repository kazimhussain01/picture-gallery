"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { AiFillFolderAdd } from "react-icons/ai"
import { FolderCreate } from "./action"


const AlbumDialouge = ({ imageData }: { imageData: string }) => {
    const [album, setAlbum] = useState("")
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" className="p-0 m-0">
                    <AiFillFolderAdd className="w-8 h-8 cursor-pointer text-white hover:text-red-600 duration-300" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="font-poppins font-semibold">Add to Album</DialogTitle>
                    <DialogDescription className="font-poppins">
                        Enter the album name for the picture you want to add in the album. Click add to Album when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="album-name" className="text-right font-poppins font-semibold text-lg">
                            Name
                        </Label>
                        <Input
                            placeholder="Add Name Here..."
                            id="album-name"
                            className="col-span-3 font-poppins"
                            value={album}
                            onChange={((e) => {
                                setAlbum(e.target.value)
                            })}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button 
                        className="font-poppins font-semibold"
                        type="submit"
                        onClick={async () => {
                            { setOpen(false) }
                            await FolderCreate(album, imageData)
                        }}
                    >Add to Album</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AlbumDialouge