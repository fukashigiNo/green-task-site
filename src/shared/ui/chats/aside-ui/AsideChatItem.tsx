import { MessageSquare } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"

interface IAsideChatItem {
	chatId: string
	name?: string
	isExpanded?: boolean
}

export const AsideChatItem = ({
	chatId,
	name,
	isExpanded = true
}: IAsideChatItem) => {
	const navigate = useNavigate()
	const { chatId: activeChatId } = useParams()

	const isActive = activeChatId === chatId

	return (
		<div
			onClick={() => navigate(`/chat/${chatId}`)}
			className={`
                flex cursor-pointer items-center gap-3 rounded-xl p-2 transition-colors
                ${isActive ? "bg-[var(--accent-soft)]" : "hover:bg-white/5"}
                ${!isExpanded ? "justify-center" : ""}
            `}
		>
			<div
				className={`
                    flex shrink-0 items-center justify-center rounded-full
                    ${isExpanded ? "h-12 w-12" : "h-10 w-10"}
                    ${
						isActive
							? "bg-[var(--accent-soft-strong)] text-[var(--accent-secondary)]"
							: "bg-[var(--accent-soft)] text-[var(--accent-secondary)]"
					}
                `}
			>
				<MessageSquare size={isExpanded ? 20 : 18} />
			</div>

			{isExpanded && (
				<div className="min-w-0 flex-1">
					<h4 className="truncate font-raleway text-sm font-bold text-white">
						{name || chatId}
					</h4>
					<p className="truncate text-xs font-medium text-zinc-500">
						Нажмите, чтобы открыть чат...
					</p>
				</div>
			)}
		</div>
	)
}
