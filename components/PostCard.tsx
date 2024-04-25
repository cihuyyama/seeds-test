"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Post } from '@/lib/features/posts/postsSlice'
import { Button } from './ui/button'
import Link from 'next/link'

interface PostProps {
    data?: Post
}

const PostCard: React.FC<PostProps> = ({ data }) => {
    return (
        <div className='w-full mx-auto px-4 flex justify-center'>
            <Card className='w-full flex flex-col justify-center items-start shadow-lg'>
                <CardHeader>
                    <CardTitle>{data?.title}</CardTitle>
                    <CardDescription>{data?.publicationDate}</CardDescription>
                </CardHeader>
                <CardFooter className='w-full flex flex-row justify-end gap-2 '>
                    <Link href={`/posts/${data?.id}`} >
                        <Button>Show</Button>
                    </Link>
                    <Button variant={"destructive"} >Delete</Button>
                </CardFooter>
            </Card>

        </div>
    )
}

export default PostCard