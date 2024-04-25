"use client"

import PostCard from '@/components/PostCard'
import { RootState } from '@/lib/store'
import React from 'react'
import { useSelector } from 'react-redux'

const PostsPage = () => {
    const posts = useSelector((state: RootState) => state.posts)

    return (
        <section className='w-full h-full mt-8'>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <PostCard data={post} />
                    </div>
                )
            })}
        </section>
    )
}

export default PostsPage