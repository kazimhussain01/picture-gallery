import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FolderType } from "./page"
import Link from "next/link"


const FolderLits = ({ folder }: { folder: FolderType }) => {
    return (
        <Card className="w-[350px]">
            <CardHeader className="font-poppins font-semibold">
                <CardTitle className="text-2xl">{folder.name}</CardTitle>
                <CardDescription>
                    Please Click on view now Button to view the Picture Present in {folder.name}
                </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end font-poppins font-semibold">
                <Link href={`/album/${folder.name}`}> 
                <Button>View Album</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default FolderLits