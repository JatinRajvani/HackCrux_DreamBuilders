import React from "react";
import { Bell, Search, Menu } from "lucide-react";

const Topbar = ({ sidebarCollapsed, onMobileMenu }) => {
	const leftClass = sidebarCollapsed ? "md:left-[68px]" : "md:left-[240px]";

	return (
		<header
			className={`fixed right-0 top-0 z-99 flex h-16 items-center justify-between border-b border-white/10 bg-[#10111ed9] px-4 backdrop-blur-xl transition-[left] duration-300 md:px-6 ${leftClass} left-0`}
		>
			<button
				className="mr-2 inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-[#161829] text-slate-300 transition hover:border-indigo-500/40 hover:bg-indigo-500/12 hover:text-indigo-300 md:hidden"
				onClick={onMobileMenu}
				aria-label="Toggle menu"
				type="button"
			>
				<Menu size={20} />
			</button>

			<div className="hidden max-w-105 flex-1 md:block">
				<div className="relative flex items-center">
					<Search size={16} className="pointer-events-none absolute left-3 text-slate-500" />
					<input
						type="text"
						placeholder="Search calls, clients, reps..."
						className="w-full rounded-full border border-white/10 bg-[#161829] py-2 pl-9 pr-4 text-[0.85rem] text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:bg-[#1d2031] focus:ring-3 focus:ring-indigo-500/20"
					/>
				</div>
			</div>

			<div className="ml-auto flex items-center gap-3">
				<div className="hidden items-center gap-1.5 rounded-full border border-indigo-400/20 bg-indigo-500/12 px-3 py-1.5 text-[0.78rem] font-semibold text-indigo-300 md:flex">
					<span>🏆</span>
					<span>HackCrux 2026</span>
				</div>

				<button
					className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-[#161829] text-slate-300 transition hover:bg-[#212438] hover:text-slate-100"
					type="button"
					aria-label="Notifications"
				>
					<Bell size={18} />
				</button>

				<div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#6C63FF,#00D4AA)] text-[0.75rem] font-bold text-white shadow-[0_8px_22px_rgba(108,99,255,0.35)]">
					DB
				</div>
			</div>
		</header>
	);
};

export default Topbar;
