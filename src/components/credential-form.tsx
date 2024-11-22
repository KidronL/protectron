"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormDescription,
    FormField, FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {Textarea} from "@/components/ui/textarea";

const formSchema = z.object({
    url: z.string(),
    username: z.string().min(2).max(50),
    password: z.string().min(6).max(50),
    notes: z.string().min(0),
})

export default function CredentialForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            url: "",
            username: "",
            password: "",
            notes: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (

                        <FormItem>
                            <FormLabel>URL</FormLabel>
                            <FormControl>
                                <Input placeholder="url" {...field} />
                            </FormControl>
                            <FormDescription>
                                The site that these credentials belong to.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (

                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="username" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField control={form.control} name={"password"} render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="password" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the password associated with this site.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (

                        <FormItem>
                            <FormLabel>Notes</FormLabel>
                            <FormControl>
                                <Textarea placeholder="notes" {...field} />
                            </FormControl>
                            <FormDescription>
                                Share any additional information.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}