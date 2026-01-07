"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
	{ label: "Buy A Franchise", href: "#", hasDropdown: true },
	{ label: "News & Features", href: "#", hasDropdown: true },
	{ label: "Franchise Resources", href: "#", hasDropdown: true },
	{ label: "For Franchisors", href: "#", hasDropdown: true },
	{ label: "1851 Services", href: "#", hasDropdown: true },
];

const buyingFranchiseLinks = [
	{
		label: "Find a Franchise Opportunity",
		icon: "/logos/lucide_inspect.png",
		href: "#",
		box: true,
	},
	{
		label: "Franchise Deep Dives",
		icon: "/logos/material-symbols_wifi-find-outline.png",
		href: "#",
		box: true,
	},
	{
		label: "Hottest Franchise Rankings",
		icon: "/logos/heroicons_fire.png",
		href: "#",
		box: true,
	},
];

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [buyingOpen, setBuyingOpen] = useState(false);

	return (
		<header className="w-full border-b border-gray-200 bg-white">
			<div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 py-2">
				{/* Logo and Franchise text */}
				<div className="flex items-center space-x-2">
					<Image
						src="/logos/1851 Logomark.png"
						alt="1851 Logo"
						width={16.65}
						height={16.65}
						className="
							object-contain
							max-[245px]:w-[12px] max-[245px]:h-[12px]
							!w-[16.65px] !h-[16.65px]
							max-[245px]:!w-[12px] max-[245px]:!h-[12px]
						"
						priority
					/>
					<span
						className="
							font-extrabold
							text-lg
							tracking-tight
							text-[#1A2B49]
							[font-size:1.125rem]
							md:[font-size:1.125rem]
							lg:[font-size:1.125rem]
							xl:[font-size:1.125rem]
							2xl:[font-size:1.125rem]
							max-[245px]:text-[12px]
						"
						style={{
							fontSize: "1.125rem",
						}}
					>
						<span className="max-[245px]:text-[12px]">FRANCHISE</span>
					</span>
				</div>

				{/* Desktop Nav */}
				<nav
					className="
						hidden
						lg:flex
						flex-1
						items-center
						ml-8
					"
				>
					{navLinks.map((link) => (
						<div key={link.label} className="relative group">
							<Link
								href={link.href}
								className={`
									px-3 py-2 flex items-center
									text-gray-700 hover:text-[#1A2B49]
									text-sm
									max-[1115px]:text-[13px]
									max-[1074px]:text-[11px]
									max-[1024px]:text-[12px]
								`}
							>
								{link.label}
								{link.hasDropdown && (
									<svg
										className="ml-1 w-4 h-4"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								)}
							</Link>
						</div>
					))}
				</nav>

				{/* Desktop Right Side */}
				<div
					className={`
						hidden lg:flex items-center space-x-3
					`}
				>
					<button className="p-2">
						<svg
							className="w-5 h-5 text-gray-500"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							viewBox="0 0 24 24"
						>
							<circle cx="11" cy="11" r="8" />
							<path d="M21 21l-4.35-4.35" />
						</svg>
					</button>
					<Link
						href="#"
						className={`
							text-gray-700 hover:text-[#1A2B49]
							text-sm
							max-[1115px]:text-[13px]
							max-[1074px]:text-[11px]
							max-[1024px]:text-[12px]
						`}
					>
						Contact
					</Link>
					<Link
						href="#"
						className={`
							text-gray-700 hover:text-[#1A2B49]
							text-sm
							max-[1115px]:text-[13px]
							max-[1074px]:text-[11px]
							max-[1024px]:text-[12px]
						`}
					>
						Login
					</Link>
					<Link
						href="#"
						className={`
							ml-2 px-4 py-2 rounded bg-[#FF4EDB] text-white font-bold
							text-sm
							max-[1115px]:text-[13px]
							max-[1074px]:text-[11px]
							max-[1024px]:text-[12px]
							hover:opacity-90 transition
						`}
					>
						BUY A FRANCHISE
					</Link>
					<Link
						href="#"
						className={`
							ml-1 px-4 py-2 rounded bg-[#1A2B49] text-white font-bold
							text-sm
							max-[1115px]:text-[13px]
							max-[1074px]:text-[11px]
							max-[1024px]:text-[12px]
							hover:opacity-90 transition
						`}
					>
						GROW A FRANCHISE
					</Link>
				</div>

				{/* Hamburger for Mobile */}
				<button
					className="lg:hidden flex items-center ml-auto"
					aria-label="Open menu"
					onClick={() => setMenuOpen(true)}
				>
					<svg
						className="w-7 h-7 text-[#1A2B49] max-[245px]:w-5 max-[245px]:h-5"
						fill="none"
						stroke="currentColor"
						strokeWidth={2}
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>

			{/* Mobile Modal Drawer */}
			{menuOpen && (
				<div className="fixed inset-0 z-50 flex justify-end bg-black/30">
					<div className="w-[320px] max-w-full h-full bg-white shadow-xl flex flex-col p-5 relative animate-slide-in-right">
						{/* Close Button */}
						<button
							className="absolute top-2 right-4 text-gray-500 hover:text-black" // moved up from top-4 to top-2
							onClick={() => setMenuOpen(false)}
							aria-label="Close menu"
						>
							<svg width={22} height={22} viewBox="0 0 22 22" fill="none">
								<circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth={2} fill="none"/>
								<path d="M16 6L6 16M6 6l10 10" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
							</svg>
						</button>

						{/* Menu Content */}
						<div className="flex flex-col gap-2 mt-2">
							{/* Buying A Franchise */}
							<div>
								<button
									className="w-full flex items-center justify-between text-[15px] font-semibold py-2 px-1 hover:bg-gray-50 rounded"
									onClick={() => setBuyingOpen((v) => !v)}
								>
									Buying A Franchise
									<svg
										className={`ml-2 w-4 h-4 transition-transform ${
											buyingOpen ? "rotate-180" : ""
										}`}
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
								{buyingOpen && (
									<div className="ml-2 mt-1 flex flex-col gap-1">
										{buyingFranchiseLinks.map((item) =>
											item.box ? (
												<Link
													key={item.label}
													href={item.href}
													className="flex items-center gap-2 py-1.5 px-2 rounded hover:bg-gray-100 text-[15px] text-[#1A2B49]"
												>
													<span
														className="flex items-center justify-center"
														style={{
															width: "28px",
															height: "28px",
															borderRadius: "4px",
															background: "#CEE8F3",
														}}
													>
														<Image src={item.icon} alt="" width={12} height={12} />
													</span>
													<span className="font-semibold">{item.label}</span>
												</Link>
											) : (
												<Link
													key={item.label}
													href={item.href}
													className="flex items-center gap-2 py-1.5 px-2 rounded hover:bg-gray-100 text-[14px] text-[#1A2B49]"
												>
													<Image
														src={item.icon}
														alt=""
														width={18}
														height={18}
													/>
													{item.label}
												</Link>
											)
										)}
									</div>
								)}
							</div>
							{/* Other Sections */}
							<div>
								<button
									className="w-full flex items-center justify-between text-[15px] font-semibold py-2 px-1 hover:bg-gray-50 rounded"
									disabled
								>
									News & Features
									<svg
										className="ml-2 w-4 h-4"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
							</div>
							<div>
								<button
									className="w-full flex items-center justify-between text-[15px] font-semibold py-2 px-1 hover:bg-gray-50 rounded"
									disabled
								>
									Franchise Resources
									<svg
										className="ml-2 w-4 h-4"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
							</div>
							<div>
								<button
									className="w-full flex items-center justify-between text-[15px] font-semibold py-2 px-1 hover:bg-gray-50 rounded"
									disabled
								>
									For Franchisors
									<svg
										className="ml-2 w-4 h-4"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
							</div>
							<div>
								<button
									className="w-full flex items-center justify-between text-[15px] font-semibold py-2 px-1 hover:bg-gray-50 rounded"
									disabled
								>
									1851 Services
									<svg
										className="ml-2 w-4 h-4"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
							</div>
							<hr className="my-2" />
							<Link
								href="#"
								className="text-[15px] text-[#1A2B49] py-1.5 px-1"
							>
								Contact
							</Link>
							<Link
								href="#"
								className="text-[15px] text-[#FF4EDB] py-1.5 px-1"
							>
								Login
							</Link>
							<button className="mt-3 w-full py-2 rounded font-bold text-white text-[15px] bg-[#FF4EDB] hover:opacity-90 transition">
								BUY A FRANCHISE
							</button>
							<button className="w-full py-2 rounded font-bold text-white text-[15px] bg-[#1A2B49] hover:opacity-90 transition">
								GROW A FRANCHISE
							</button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
