"use client"

import PostCard from '@/components/PostCard'
import { RootState } from '@/lib/store'
import React from 'react'
import { useSelector } from 'react-redux'
import PostFormCreate from '@/components/PostFormCreate'
import { Separator } from '@/components/ui/separator'
import { Post } from '@/lib/features/posts/postsSlice'

const PostsPage = () => {
    const posts = useSelector((state: RootState) => state.posts)

    return (
        <section className='w-full h-full mt-8 max-w-[500px] mx-auto flex flex-col gap-4'>
            <div className='w-full container'>
                <PostFormCreate />
            </div>
            <Separator className='w-[500px] mx-auto' />
            <div className='w-full h-full flex flex-col gap-4 mb-[100px]'>
                {posts.map((post: Post) => {
                    return (
                        <div key={post.id}>
                            <PostCard data={post} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default PostsPage