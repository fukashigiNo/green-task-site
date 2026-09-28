import { useLoginForm } from "@/hooks"

export default function LoginPage() {
	const {
		apiUrl,
		idInstance,
		apiTokenInstance,
		setApiUrl,
		setIdInstance,
		setApiTokenInstance,
		handleSubmit
	} = useLoginForm()

	return (
		<main className="relative z-0 flex h-screen w-full items-center justify-center p-4">
			<form
				className="flex w-full max-w-md flex-col gap-5 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(43,33,38,0.96),rgba(29,22,25,0.98))] p-8 shadow-[0_24px_80px_rgba(10,6,8,0.58)] backdrop-blur-sm"
				onSubmit={handleSubmit}
			>
				<div className="mb-2 flex flex-col gap-1 text-center">
					<h1 className="font-raleway text-2xl font-bold text-white">
						Вход в систему
					</h1>
					<p className="font-raleway text-sm text-zinc-400">
						Введите ключи доступа Green-API
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<label
						htmlFor="apiUrl"
						className="ml-1 font-raleway text-sm font-semibold text-zinc-300"
					>
						API URL
					</label>
					<input
						id="apiUrl"
						type="text"
						className="
							bg-zinc-900/60 border border-white/10 hover:border-white/20 rounded-xl 
							font-raleway font-medium text-white outline-none placeholder:text-zinc-600
							transition-all focus:border-[var(--accent-primary)] focus:bg-zinc-900 focus:ring-1 focus:ring-[var(--accent-primary)]
							w-full px-4 py-3
						"
						placeholder="https://0000.api.green-api.com"
						value={apiUrl}
						onChange={event => setApiUrl(event.target.value)}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label
						htmlFor="idInstance"
						className="ml-1 font-raleway text-sm font-semibold text-zinc-300"
					>
						ID Instance
					</label>
					<input
						id="idInstance"
						type="text"
						className="
							bg-zinc-900/60 border border-white/10 hover:border-white/20 rounded-xl 
							font-raleway font-medium text-white outline-none placeholder:text-zinc-600
							transition-all focus:border-[var(--accent-primary)] focus:bg-zinc-900 focus:ring-1 focus:ring-[var(--accent-primary)]
							w-full px-4 py-3
						"
						placeholder="1234567890"
						value={idInstance}
						onChange={event => setIdInstance(event.target.value)}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label
						htmlFor="apiTokenInstance"
						className="ml-1 font-raleway text-sm font-semibold text-zinc-300"
					>
						API Token Instance
					</label>
					<input
						id="apiTokenInstance"
						type="text"
						className="
							bg-zinc-900/60 border border-white/10 hover:border-white/20 rounded-xl 
							font-raleway font-medium text-white outline-none placeholder:text-zinc-600
							transition-all focus:border-[var(--accent-primary)] focus:bg-zinc-900 focus:ring-1 focus:ring-[var(--accent-primary)]
							w-full px-4 py-3
						"
						placeholder="abcdef123456..."
						value={apiTokenInstance}
						onChange={event =>
							setApiTokenInstance(event.target.value)
						}
					/>
				</div>

				<button
					type="submit"
					className="
						bg-[var(--accent-primary)] outline-[var(--accent-primary)]
						font-raleway font-bold text-white
						shadow-lg shadow-[rgba(138,76,95,0.25)] rounded-xl
						transition-all hover:bg-[var(--accent-secondary)] active:scale-[0.98]
						mt-4 w-full px-4 py-3.5
					"
				>
					Продолжить
				</button>
			</form>
		</main>
	)
}
