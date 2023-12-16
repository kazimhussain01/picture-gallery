import cloudinary from "cloudinary"
import FolderLits from "./FolderLits";

export interface FolderType {
    name: string;
    path: string;
}

const Page = async () => {
    const { folders } = (await cloudinary.v2.api.root_folders()) as {
        folders: FolderType[]
    }
    return (
        <div>
            <div className="py-4 px-5">
                <h2 className="mb-2 px-4 text-6xl font-poppins font-semibold tracking-tight">Picture Albums</h2>
            </div>
            {/* Folder Data */}
            <div className="px-5 py-5 grid grid-cols-3 gap-4">
                {
                    folders.map((item, i) => {
                        return (
                            <div key={i}>
                                <FolderLits folder={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Page;