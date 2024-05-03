import { addPost } from '@/lib/features/posts/postsSlice'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { z } from 'zod'
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
import { Button } from './ui/button'

const PostFormCreate = () => {
    const postSchema = z.object({
        id: z.number(),
        title: z.string().min(1,{
            message: 'Title is required',
        }),
        content: z.string().min(1,{
            message: 'Content is required',
        }),
        publicationDate: z.string(),
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
    )
}

export default PostFormCreate