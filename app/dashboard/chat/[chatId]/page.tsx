// import { api } from '@/convex/_generated/api';
// import { Id } from '@/convex/_generated/dataModel'
// import { getConvexClient } from '@/lib/convex';
// import { auth } from '@clerk/nextjs/server';
// import { redirect } from 'next/navigation';
// import React from 'react'


// interface ChatPageProps {
//   params: Promise<{
//     chatId: Id<"chats">
//   }>
// }
// async function ChatPage({params}: ChatPageProps) {
//   const chatId = await params;

//   // Get user authentication
//   const { userId } = await auth ();

//   if(!userId) {
//     redirect("/")
//   }

//   // Get Convex client and fetch chat and message
//   const convex = getConvexClient();

//   // Get message
//   const initialMessages = await convex.query(api.messages.list, {chatId})
//   console.log(chatId)
//   console.log(chatId)
//   return (
//     <div>ChatPage: {chatId}</div>
//   )
// }

// export default ChatPage

import ChatInterface from '@/components/ChatInterface';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel'
import { getConvexClient } from '@/lib/convex';
import { auth } from '@clerk/nextjs/server';
import { error } from 'console';
import { redirect } from 'next/navigation';
import React from 'react'

interface ChatPageProps {
  params: {
    chatId: string  // URL params are strings
  }
}

async function ChatPage({ params }: ChatPageProps) {
  const { chatId } = params;

  // Get user authentication
  const { userId } = await auth();

  if (!userId) {
    redirect("/")
  }

  // Convert string chatId to Convex Id type
  const chatIdAsId = chatId as Id<"chats">;


  try{
    // Get Convex client and fetch chat and messages
    const convex = getConvexClient();

    // Get messages
    const initialMessages = await convex.query(api.messages.list, { 
      chatId: chatIdAsId 
    });
    
    return (
      <div className='flex-1 overflow-hidden'>
        <ChatInterface chatId={chatId} initialMessages={initialMessages} />
      </div>
    )
  } catch (error) {
    console.log("Error loading chat:", error)
    redirect("/dashboard")
  }  
}

export default ChatPage