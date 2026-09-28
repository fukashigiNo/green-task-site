import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { useGetChats } from "@/hooks"
import { ChatHeader, ChatInput, MessageList } from "@/shared/ui/chat"
import { useChatStore } from "@/store/chat.store"

export default function Chat() {
	const { chatId } = useParams()
	const { data: chats } = useGetChats()

	const messages =
		useChatStore(state => (chatId ? state.messages[chatId] : undefined)) ||
		[]
	const activeChat = chats?.find(chat => chat.cleanId === chatId)

	const setActiveChat = useChatStore(state => state.setActiveChat)

	useEffect(() => {
		if (chatId) {
			setActiveChat(chatId)
		}
	}, [chatId, setActiveChat])

	if (!chatId) return null

	return (
		<div className="flex h-full w-full flex-col overflow-hidden rounded-[1.75rem] border border-white/5 bg-[rgba(43,33,38,0.92)] shadow-[0_18px_50px_rgba(16,10,12,0.45)] m-2 sm:m-3">
			<ChatHeader chatId={chatId} name={activeChat?.name} />
			<div className="flex min-h-0 flex-1 flex-col px-3 pb-3 pt-2 sm:px-4 sm:pb-4 sm:pt-3">
				<div className="flex-1 overflow-hidden rounded-[1.25rem] bg-[rgba(255,255,255,0.02)]">
					<MessageList messages={messages} />
				</div>
				<div className="mt-3">
					<ChatInput chatId={chatId} />
				</div>
			</div>
		</div>
	)
}
