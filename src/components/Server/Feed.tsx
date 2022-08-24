import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Message from "./Message";
import { useMutation, useQuery } from "@tanstack/react-query";
import { supabase } from "../../supabaseClient";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { queryClient } from "../../App";
import { useAccount } from "wagmi";
import { useParams } from "react-router-dom";

interface InputProps {
    onSubmit(e: any): void;
}

function Input({ onSubmit }: InputProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    function handleMessageSubmit(e: React.KeyboardEvent) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(onSubmit)();
            reset();
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <div className="flex rounded-tl-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-indigo-500">
                <label htmlFor="message" className="sr-only">
                    Message #channel
                </label>
                <textarea
                    {...register("message")}
                    rows={1}
                    onKeyDown={handleMessageSubmit}
                    className="block w-full py-3 px-4 resize-none bg-mineshaft caret-whisper/60 text-whisper"
                    placeholder="Message #channel"
                    defaultValue={""}
                />
            </div>
        </form>
    );
}

export default function Feed() {
    const { channel } = useParams();
    const [prevFeed, setFeed] = useState<any[]>([]);
    const [parent]:any = useAutoAnimate(/* optional config */)

    console.log(channel)
    const getMessages = async () => {

            let { data, error, status } = await supabase
                .from("Message")
                .select("*")
                .eq("channel_id", channel);

                //join usernames
            if(data){
                setFeed(data);
                console.log(prevFeed)
            }
        }

        useEffect(() => {
            setFeed([]);
            getMessages();
        }, [channel])


        // Create a filter only for new messages
        const databaseFilter = {
            schema: 'public',
            table: 'Message',
            event: 'INSERT',
        }

        useEffect(() => {
            const channels = supabase
                .channel('*')
                .on('postgres_changes', databaseFilter, (payload: any) => {
                    setFeed((prevFeed):any => [...prevFeed, payload.new]);
                })
                .subscribe()
            console.log(prevFeed);
        }, [])

        const mutation = useMutation(
            async (message: string) => {
                const { data, error } = await supabase
                    .from("Message")
                    .insert([{ content: message, channel_id: channel, owner_id: "949d79b9-4d8c-4084-bbaa-2a44404d886b" }]);
                return data;
            }
        );

        function onSubmit(data: any) {
            mutation.mutate(data.message);
            console.log(prevFeed)
        }





        return (
            <div className="flex flex-col h-5/6 overflow-auto">
                <div ref={parent} className="flex-1 overflow-y-auto flex flex-col justify-end gap-2 my-1">
                    {prevFeed?.map((message) => (
                    
                    <Message text={message.content} id={message.owner_id} time={message.created_at} />

                ))} 
                </div>
                <Input onSubmit={onSubmit} />
            </div>
        );
    }
