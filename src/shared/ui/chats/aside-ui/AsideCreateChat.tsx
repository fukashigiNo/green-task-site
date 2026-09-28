import { Plus } from "lucide-react"

import { useCreateChat } from "@/hooks"

interface AsideCreateChatProps {
	isExpanded: boolean
}

export const AsideCreateChat = ({ isExpanded }: AsideCreateChatProps) => {
	const { phone, handlePhoneChange, handleCreate, handleKeyDown } =
		useCreateChat()

	if (!isExpanded) {
		return (
			<div className="border-b border-white/5 p-3">
				<button
					type="button"
					onClick={handleCreate}
					disabled={!phone}
					className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-primary)] text-white shadow-lg transition hover:bg-[var(--accent-secondary)] disabled:opacity-50"
					aria-label="Создать чат"
				>
					<Plus size={19} strokeWidth={2.5} />
				</button>
			</div>
		)
	}

	return (
		<div className="shrink-0 border-b border-white/10 p-4 sm:p-5">
			<h2 className="mb-4 font-raleway text-lg font-bold text-white">
				Новый диалог
			</h2>
			<div className="flex flex-col gap-3">
				<input
					type="tel"
					value={phone}
					onChange={handlePhoneChange}
					onKeyDown={handleKeyDown}
					placeholder="Номер (например: +7 777 ...)"
					className="
                        w-full px-4 py-3 rounded-xl outline-none
                        bg-black/20 
                        text-sm font-medium text-white placeholder-zinc-500 
                        transition-all focus:ring-1 focus:ring-[var(--accent-primary)]/60
                    "
				/>
				<button
					onClick={handleCreate}
					disabled={!phone}
					className="
                        flex w-full items-center justify-center gap-2 py-3
                        bg-[var(--accent-primary)] rounded-xl shadow-lg cursor-pointer
                        text-sm font-bold text-white 
                        transition-all hover:bg-[var(--accent-secondary)] active:scale-[0.98]
                        disabled:opacity-50 disabled:pointer-events-none
                    "
				>
					<Plus size={18} strokeWidth={2.5} />
					Создать чат
				</button>
			</div>
		</div>
	)
}
