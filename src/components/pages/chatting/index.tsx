"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Box, Flex } from "@radix-ui/themes";
import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../../../store";
import { Socket } from "socket.io-client";
import { useDispatch } from "react-redux";
import { addMessage } from "../../../../store/message.reducer";
import dayjs from "dayjs";
import { useRouter, useSearchParams } from "next/navigation";
import SenderMsgCard from "@/components/shared/sender-msg-card";
import ReceiverMsgCard from "@/components/shared/receiver-msg-card";
import { ChevronLeft } from "lucide-react";

const Chatting: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const sender = searchParams.get("sender") ?? "";
  const receiver = searchParams.get("receiver") ?? "";

  const messageRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const messages = useAppSelector((state) => state.message.value);
  const [socket, setSocket] = useState<Socket | null>(null);

  const [transaction, setTransaction] = useState("");

  const sendHandler = () => {
    if (!transaction.trim()) return;
    dispatch(
      addMessage({
        type: "message",
        message: transaction,
        date: dayjs().format("h:mm A"),
        sender: sender,
      })
    );
    setTransaction("");
    socket?.emit("message");
  };

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendHandler();
    }
  };

  return (
    <Box className="w-full h-screen flex flex-col overflow-hidden">
      <Flex direction="column" className="w-full flex-1 overflow-hidden">
        {/* Header */}
        <Box className="relative z-10">
          <Box className="fixed top-0 h-[60px] shadow w-full max-w-[480px] bg-white">
            <Flex align="center" className=" h-full p-4 " gap="4">
              <ChevronLeft onClick={() => router.back()} />
              <h4 className="font-semibold">{receiver}</h4>
            </Flex>
          </Box>
        </Box>
        <Box className="flex-1 overflow-y-auto p-4 pt-[76px]" ref={messageRef}>
          {messages.map((item, key) => {
            if (item.sender === sender) {
              return (
                <SenderMsgCard
                  key={key}
                  message={item.message || ""}
                  type={item.type}
                  time={item.date}
                  sender={item.sender}
                />
              );
            }
            if (item.sender === receiver) {
              return (
                <ReceiverMsgCard
                  key={key}
                  message={item.message || ""}
                  type={item.type}
                  time={item.date}
                  receiver={item.sender}
                />
              );
            }
          })}
          <Box className="h-[76px]" />
        </Box>
        <Box className="bottom-sticky w-full">
          <Flex className="w-full px-4" gap="4">
            <Input
              placeholder="Enter Message"
              className="w-full"
              value={transaction}
              onChange={(e) => setTransaction(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              ref={inputRef}
            />
            <Button disabled={!transaction} onClick={sendHandler}>
              Send
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Chatting;
