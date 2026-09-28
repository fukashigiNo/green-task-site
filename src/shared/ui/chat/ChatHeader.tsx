import { ArrowLeft, User } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface IChatHeader {
	chatId: string
	name?: string
}

export default function ChatHeader({ chatId, name }: IChatHeader) {
	const navigate = useNavigate()
	const displayName = name || chatId

	return (
		<header
			className="
                flex shrink-0 items-center justify-between px-4 py-3 
                bg-[rgba(255,255,255,0.02)] border-b border-white/5 shadow-sm
                rounded-t-[1.75rem]
            "
		>
			<div className="flex items-center gap-3">
				<button
					onClick={() => navigate("/chat")}
					className="sm:hidden p-2 -ml-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
				>
					<ArrowLeft size={22} />
				</button>

				<div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-400">
					<User size={20} />
				</div>

				<div className="flex flex-col">
					<h2 className="font-raleway text-sm font-bold text-white">
						{displayName}
					</h2>
				</div>
			</div>
		</header>
	)
}
