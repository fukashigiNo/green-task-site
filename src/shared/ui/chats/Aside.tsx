import { Menu, X } from "lucide-react"
import { useState } from "react"

import { AsideChatItem } from "./aside-ui/AsideChatItem"
import { AsideCreateChat } from "./aside-ui/AsideCreateChat"
import { AsideLogout } from "./aside-ui/AsideLogout"
import { useGetChats } from "@/hooks"

export default function Aside() {
	const { data: chats, isLoading } = useGetChats()
	const [isExpanded, setIsExpanded] = useState(true)

	return (
		<aside
			className={`h-full transition-all duration-300 ${
				isExpanded ? "w-[290px]" : "w-[84px]"
			}`}
		>
			<div
				className="
                    flex h-[calc(100vh-2rem)] flex-col overflow-hidden
                    rounded-[1.6rem] border border-white/5
                    bg-[linear-gradient(180deg,rgba(43,33,38,0.96),rgba(31,25,29,0.94))]
                    shadow-[0_20px_45px_rgba(16,10,12,0.42)]
                    sm:h-[calc(100vh-3rem)]
                "
			>
				<div className="flex items-center justify-between border-b border-white/5 p-3 sm:p-4">
					<button
						type="button"
						onClick={() => setIsExpanded(prev => !prev)}
						className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-zinc-200 transition hover:bg-[var(--accent-soft)] hover:text-white"
						aria-label={isExpanded ? "Свернуть меню" : "Развернуть меню"}
					>
						{isExpanded ? <X size={18} /> : <Menu size={18} />}
					</button>

					{isExpanded && (
						<div className="ml-3 flex-1">
							<p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">
								Chats
							</p>
							<h2 className="font-raleway text-base font-bold text-white">
								Меню
							</h2>
						</div>
					)}
				</div>

				<AsideCreateChat isExpanded={isExpanded} />

				<div className="flex-1 space-y-1 overflow-y-auto p-2">
					{isLoading ? (
						<div className="flex h-full items-center justify-center px-2 text-center text-xs font-medium text-zinc-500">
							{isExpanded ? "Загрузка чатов..." : "..."}
						</div>
					) : chats?.length === 0 ? (
						<div className="flex h-full items-center justify-center px-2 text-center text-xs font-medium text-zinc-500">
							{isExpanded ? "Нет активных диалогов" : "0"}
						</div>
					) : (
						chats?.map(chat => (
							<AsideChatItem
								key={chat.id}
								chatId={chat.cleanId}
								name={chat.name}
								isExpanded={isExpanded}
							/>
						))
					)}
				</div>

				<AsideLogout isExpanded={isExpanded} />
			</div>
		</aside>
	)
}
