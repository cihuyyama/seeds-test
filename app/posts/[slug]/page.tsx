"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Post } from '@/lib/features/posts/postsSlice'
import { RootState } from '@/lib/store'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const DetailPostPage = ({ params }: { params: { slug: number } }) => {
    const post = useSelector((state: RootState) => state.posts.find((post: Post) => post.id.toString() === params.slug.toString()))

    return (
        <div className='w-full mx-auto max-w-screen-xl px-4 flex justify-center'>
            <Card className='w-full flex flex-col justify-center items-center pt-8'>
                <CardHeader className='w-full'>
                    <CardTitle className='w-full flex justify-center'>
                        {post?.title}
                    </CardTitle>
                    <CardDescription>{post?.publicationDate}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className='flex w-full text-pretty'>
                    {post?.content}
                    </p>
                </CardContent>
                <CardFooter className='w-full flex justify-start' >
                    <Link href='/posts'>
                        <Button>Kembali</Button>
                    </Link>
                </CardFooter>
            </Card>

        </div>
    )
}

export default DetailPostPage