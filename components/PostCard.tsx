"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Post, updatePost } from '@/lib/features/posts/postsSlice'
import { Button } from './ui/button'
import Link from 'next/link'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

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
import { Textarea } from './ui/textarea'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch } from 'react-redux'


interface PostProps {
    data?: Post
}

const PostCard: React.FC<PostProps> = ({ data }) => {
    const postUpdateSchema = z.object({
        id: z.number(),
        title: z.string().min(1, {
            message: 'Title is required',
        }),
        content: z.string().min(1, {
            message: 'Content is required',
        }),
        publicationDate: z.string(),
    })

    const formUpdate = useForm<z.infer<typeof postUpdateSchema>>({
        resolver: zodResolver(postUpdateSchema),
        defaultValues: {
            id: data?.id,
            title: data?.title,
            content: data?.content,
            publicationDate: data?.publicationDate,
        },
    })

    const dispatch = useDispatch()

    function onSubmitEdit(data: z.infer<typeof postUpdateSchema>) {
        dispatch(updatePost(data))
        console.log(data)
    }
    return (
        <div className='w-full mx-auto px-4 flex justify-center'>
            <Card className='w-full flex flex-col justify-center items-start shadow-lg'>
                <CardHeader>
                    <CardTitle>{data?.title}</CardTitle>
                    <CardDescription>{data?.publicationDate}</CardDescription>
                </CardHeader>
                <CardFooter className='w-full flex flex-row justify-end gap-2 '>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className='bg-green-600 hover:bg-green-600/80'>
                                Edit
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit Post</DialogTitle>
                                <DialogDescription>
                                    Are you sure you want to edit this post?
                                </DialogDescription>
                            </DialogHeader>
                            <Form {...formUpdate}>
                                <form onSubmit={formUpdate.handleSubmit(onSubmitEdit)} className="space-y-4">
                                    <FormField
                                        control={formUpdate.control}
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
                                        control={formUpdate.control}
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
                                    <DialogClose asChild>
                                        <Button type="submit">Save</Button>
                                    </DialogClose>
                                </form>
                            </Form>
                        </DialogContent>
                    </Dialog>

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