"use client";

import { useEffect, useRef, useState } from "react";
import { useSocket } from "./socket";
import { Box, Button, rgbToHex, TextField } from "@mui/material";
import { json } from "stream/consumers";

type messageType = {
    type: "ai" | "human";
    data: string;
};
interface MessagesState {
    msg: messageType[];
    steps: string[];
}

export default function ChatMain() {
    let connect = useSocket((state) => state.connect);
    let connected = useSocket((state) => state.connected);
    const send = useSocket((state) => state.send);
    const subscribe = useSocket((state) => state.subscribe);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    connect();

    const [messages, setMessages] = useState<MessagesState>({
        msg: [],
        steps: [],
    });

    const [temp, setTemp] = useState("hello");

    const sendData = function (data: string) {};

    useEffect(() => {
        const unSub = subscribe((reciveData) => {
            console.log(reciveData);
            const recived = JSON.parse(reciveData);

            if (recived.cmd) {
                setMessages((prev) => {
                    return {
                        ...prev,
                        steps: [],
                    };
                });
            } else if (recived.ai_resault) {
                const newMsg: messageType = {
                    type: "ai",
                    data: recived.ai_resault,
                };
                setMessages((prev) => {
                    return {
                        ...prev,
                        msg: [...prev.msg, newMsg],
                    };
                });
            } else {
                setMessages((prev) => {
                    return {
                        ...prev,
                        steps: [...prev.steps, JSON.stringify(recived)],
                    };
                });
            }

            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        });
        return () => {
            unSub();
        };
    });

    return (
        <Box
            sx={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "row",
            }}
        >
            <Box
                sx={{
                    height: "100%",
                    width: "80%",
                    background: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    border: 1,
                }}
            >
                <Box
                    sx={{
                        height: "10%",
                        width: "100%",
                        background: "#ffffff",
                        display: "flex",
                        flexDirection: "row",
                        border: 1,
                    }}
                >
                    <div>{connected ? "connected" : "disConnected..."}</div>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        height: "80%",
                        maxHeight: "80%",
                        display: "flex",
                        flexDirection: "column",
                        border: 1,
                        alignItems: "end",
                        overflowY: "auto",
                    }}
                >
                    {messages.msg.map((value, index) => {
                        return (
                            <Box
                                sx={{
                                    mt: 1,
                                    p: 1.5,
                                    borderRadius: "8px",
                                    background:
                                        value.type === "ai"
                                            ? "#E3F2FD"
                                            : "#F1F8E9",
                                    direction: "rtl",
                                    unicodeBidi: "plaintext",
                                }}
                                key={index}
                            >
                                {value.data}
                            </Box>
                        );
                    })}

                    <div ref={messagesEndRef}></div>
                </Box>

                <Box
                    sx={{
                        height: "10%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        border: 1,
                        justifyContent: "center",
                    }}
                >
                    <TextField
                        value={temp}
                        onChange={(e) => setTemp((state) => e.target.value)}
                        dir="rtl"
                    />
                    <Button
                        variant="contained"
                        onClick={() => {
                            const newMsg: messageType = {
                                type: "human",
                                data: temp,
                            };

                            setMessages((prev) => {
                                return {
                                    ...prev,
                                    msg: [...prev.msg, newMsg],
                                };
                            });

                            send({ question: temp });
                        }}
                    >
                        Send
                    </Button>
                </Box>
            </Box>

            <Box
                sx={{
                    height: "100%",
                    width: "20%",
                    background: "#eeeeee",
                    display: "flex",
                    flexDirection: "column",
                    border: 1,
                }}
            >
                {messages.steps.map((value, index) => {
                    return (
                        <Box
                            sx={{
                                mt: 1,
                                background: "#cccccc",
                            }}
                            key={index}
                        >
                            {value}
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}
