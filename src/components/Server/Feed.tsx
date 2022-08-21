import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Message from "./Message";
import { useMutation, useQuery } from "@tanstack/react-query";
import { supabase } from "../../supabaseClient";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { queryClient } from "../../App";

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
            <div className="flex rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                <div className="bg-gray-600 flex items-center justify-center pl-4">
                    <button
                        type="button"
                        className="-m-2.5 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
                    >
                        <span className="sr-only">Attach a file</span>
                    </button>
                </div>

                <label htmlFor="message" className="sr-only">
                    Message #channel
                </label>
                <textarea
                    {...register("message")}
                    rows={1}
                    onKeyDown={handleMessageSubmit}
                    className="block w-full py-3 px-4 resize-none bg-gray-600 caret-white text-white"
                    placeholder="Message #channel"
                    defaultValue={""}
                />
            </div>
        </form>
    );
}

export default function Feed() {

    const [prevFeed, setFeed] = useState<[]>([]);

    const channel = 1;
    const [parent] = useAutoAnimate(/* optional config */)

    const getMessages = async () => {

            let { data, error, status } = await supabase
                .from("Message")
                .select("*")
                .eq("channel_id", 1);

            if(data){
                data?.map((message) => (     
                    setFeed((prevFeed):any => [...prevFeed, message.content])
                ))
            }
        }

        useEffect(() => {
            setFeed([]);
            getMessages();
        }, [])


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
                    setFeed((prevFeed):any => [...prevFeed, payload.new.content]);
                })
                .subscribe()
            console.log(prevFeed);
        }, [])

        const mutation = useMutation(
            async (message: string) => {
                const { data, error } = await supabase
                    .from("Message")
                    .insert([{ content: message, channel_id: channel, owner_id: 1 }]);
                return data;
            }
        );

        function onSubmit(data: any) {
            mutation.mutate(data.message);
            console.log(prevFeed)
        }

        return (
            <div className="flex flex-col h-5/6 overflow-auto pb-4">
                <div ref={parent} className="flex-1 overflow-y-auto flex flex-col justify-end gap-4 my-4 pr-4">
                    {prevFeed?.map((message) => (

                    <Message text={message} />

                ))} 
                </div>
                <Input onSubmit={onSubmit} />
            </div>
        );
    }
