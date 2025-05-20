import React from 'react'

function ChatInterface({chatId, initialMessages}:any) {
  return (
    <div>Chat Id: {chatId}, <br /> InitialMessages: {initialMessages}</div>
  )
}

export default ChatInterface