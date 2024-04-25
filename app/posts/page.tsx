"use client"

import PostCard from '@/components/PostCard'
import { Button } from '@/components/ui/button'
import { RootState } from '@/lib/store'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { never, unknown, z } from 'zod'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Post } from '@/lib/features/posts/postsSlice'
import { addPost } from '@/lib/features/posts/postsSlice'

const PostsPage = () => {
    const posts = useSelector((state: RootState) => state.posts)

    const postSchema = z.object({
        id: z.number(),
        title: z.string(),
        content: z.string(),
        publicationDate: z.string().default(new Date().toLocaleString()),
    })

    const form = useForm<z.infer<typeof postSchema>>({
        resolver: zodResolver(postSchema),
        defaultValues: {
            id: (Math.floor(Math.random() * 10000) + 10000),
            title: '',
            content: '',
            publicationDate: new Date().toLocaleString(),
        },
    })

    const dispatch = useDispatch()


    function onSubmit(data: z.infer<typeof postSchema>) {
        dispatch(addPost(data))
    }

    return (
        <section className='w-full h-full mt-8 flex flex-col gap-4'>
            <div className='w-full container max-w-[400px]'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Content</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Add Post</Button>
                    </form>
                </Form>
            </div>
            <Separator className='w-[400px] mx-auto' />
            <div className='w-full h-full max-w-[400px] mx-auto flex flex-col gap-4 mb-[100px]'>
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