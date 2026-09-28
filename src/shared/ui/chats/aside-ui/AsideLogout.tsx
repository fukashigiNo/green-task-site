import { LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface AsideLogoutProps {
	isExpanded: boolean
}

export const AsideLogout = ({ isExpanded }: AsideLogoutProps) => {
	const navigate = useNavigate()

	const handleLogout = () => {
		localStorage.removeItem("api_url")
		localStorage.removeItem("id_instance")
		localStorage.removeItem("api_token_instance")

		navigate("/")
	}

	return (
		<div className="shrink-0 border-t border-white/10 p-3 sm:p-4">
			<button
				className={
					isExpanded
						? "flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 py-3 text-sm font-bold text-zinc-400 transition-colors hover:bg-[rgba(138,76,95,0.12)] hover:text-[var(--accent-secondary)]"
						: "flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-zinc-400 transition-colors hover:bg-[rgba(138,76,95,0.12)] hover:text-[var(--accent-secondary)]"
				}
				type="button"
				onClick={handleLogout}
				aria-label="Выйти"
			>
				<LogOut size={18} />
				{isExpanded && "Выйти"}
			</button>
		</div>
	)
}
