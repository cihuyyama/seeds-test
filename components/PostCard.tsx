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
        <Link href={`/posts/${data?.id}`}>
            <div className='w-full mx-auto max-w-[400px] px-4 flex justify-center cursor-pointer '>
                <Card className='w-full flex flex-col justify-center items-start shadow-lg'>
                    <CardHeader>
                        <CardTitle>{data?.title}</CardTitle>
                        <CardDescription>{data?.publicationDate}</CardDescription>
                    </CardHeader>
                    <CardFooter className='w-full flex justify-end' >
                        <Button>Delete</Button>
                    </CardFooter>
                </Card>

            </div>
        </Link>
    )
}

export default PostCard