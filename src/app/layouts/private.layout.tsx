import { Outlet } from "react-router-dom"

import { usePolling } from "@/hooks"
import { Aside } from "@/shared/ui/chats"
import { Toasts } from "@/shared/ui/toast"

export default function PrivateLayout() {
	usePolling()

	return (
		<div className="flex h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(138,76,95,0.18),_transparent_30%),linear-gradient(135deg,_#171214_0%,_#1d171a_50%,_#120f12_100%)] p-2 sm:p-3">
			<div className="mr-2 shrink-0 sm:mr-3">
				<Aside />
			</div>

			<main className="relative min-w-0 flex-1">
				<Outlet />
			</main>

			<Toasts />
		</div>
	)
}
