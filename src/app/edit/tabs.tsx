"use client"
import { CldImage } from "next-cloudinary";
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"

export function TabsDemo({ src }: { src: string }) {
    return (
        <Tabs defaultValue="original" className="w-full py-4 px-5 font-poppins font-semibold">
            <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="original">Original</TabsTrigger>
                <TabsTrigger value="blur">Blur</TabsTrigger>
                <TabsTrigger value="gray">Gray Scale</TabsTrigger>
                <TabsTrigger value="oil">Oil Paint</TabsTrigger>
                <TabsTrigger value="improve">Improve</TabsTrigger>
            </TabsList>
            {/* Original */}
            <TabsContent value="original">
                <div className="flex gap-7 items-center justify-center py-4">
                    {/* View Image */}
                    <CldImage
                        width="300"
                        height="300"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                    />
                    {/* View Image */}
                    <CldImage
                        width="300"
                        height="300"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                    />
                </div>
            </TabsContent>
            {/* Blur */}
            <TabsContent value="blur">
                <div className="flex gap-7 items-center justify-center py-4">
                    {/* View Image */}
                    <CldImage
                        width="300"
                        height="300"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                    />

                    {/* View Image with Blur */}
                    <CldImage
                        width="300"
                        height="300"
                        src={src}
                        sizes="100vw"
                        blur={800}
                        alt="Description of my image"
                    />
                </div>
            </TabsContent>
            {/* Gary Scale */}
            <TabsContent value="gray">
                <div className="flex gap-7 items-center justify-center py-4">
                    {/* View Image */}
                    <CldImage
                        width="300"
                        height="300"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                    />
                    {/* View Image */}
                    <CldImage
                        width="300"
                        height="300"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                        grayscale={true}
                    />
                </div>
            </TabsContent>
            {/* Oil Paint */}
            <TabsContent value="oil">
                <div className="flex gap-7 items-center justify-center py-4">
                    {/* View Image */}
                    <CldImage
                        width="300"
                        height="300"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                    />
                    {/* View Image */}
                    <CldImage
                        width="300"
                        height="300"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                        oilPaint={true}
                    />
                </div>
            </TabsContent>
            {/* Improve */}
            <TabsContent value="improve">
                <div className="flex gap-7 items-center justify-center py-4">
                    {/* View Image */}
                    <CldImage
                        width="300"
                        height="300"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                    />
                    {/* View Image */}
                    <CldImage
                        width="300"
                        height="300"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                        improve={true}
                    />
                </div>
            </TabsContent>
        </Tabs>
    )
}