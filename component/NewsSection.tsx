import Image from "next/image";
import { newsTabs, newsCards } from "../data/newsSectionData";


export default function NewsSection() {
	return (
		<section className="max-w-screen-2xl mx-auto px-4 py-8">
			<h2 className="text-2xl font-bold text-[#1A2B49] mb-4">Franchise Industry News</h2>
			<div className="flex space-x-6 border-b mb-6 overflow-x-auto">
				{newsTabs.map((tab) => (
					<button
						key={tab}
						className="pb-2 text-[16px] font-semibold text-[#1A2B49] border-b-2 border-transparent hover:border-[#1A2B49] transition whitespace-nowrap"
					>
						{tab}
					</button>
				))}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{newsCards.map((card, idx) => (
					<div
						key={idx}
						className="bg-white rounded shadow w-full max-w-[410px] mx-auto flex flex-col"
						style={{
							minHeight: `${card.layout?.height ?? 471}px`,
						}}
					>
						<div className="mb-3">
							<Image
								src={card.image}
								alt={card.title}
								width={431}
								height={card.imageLayout?.height ?? 200}
								className="rounded w-full object-cover"
								style={{
									borderRadius: `${card.imageLayout?.radius ?? 4}px`,
									height: `${card.imageLayout?.height ?? 200}px`,
								}}
							/>
						</div>
						<div className="flex items-center mb-2 flex-wrap gap-2">
							<span
								className="bg-[#E6F0FA] text-[#1A2B49] font-semibold flex items-center justify-center"
								style={{
									width: "126px",
									height: "24px",
									borderRadius: "4px",
									fontSize: "14px",
								}}
							>
								{card.tab}
							</span>
							<div className="flex items-center ml-auto">
								<span className="text-xs text-gray-500">{card.date}</span>
								<span className="text-xs text-gray-500 ml-2">{card.time}</span>
							</div>
						</div>
						<h3
							className="mb-2"
							style={
								card.titleLayout
									? {
											maxWidth: `${card.titleLayout.width}px`,
											minHeight: `${card.titleLayout.height}px`,
											fontSize: `${card.titleLayout.fontSize}px`,
											fontWeight: card.titleLayout.fontWeight,
											lineHeight: card.titleLayout.lineHeight,
											letterSpacing: card.titleLayout.letterSpacing,
											color: card.titleLayout.color,
											fontFamily: card.titleLayout.fontFamily,
											marginBottom: "30px",
									  }
									: { fontSize: "20px", fontWeight: 700 }
							}
						>
							{card.title}
						</h3>
						<p
							className="mb-3"
							style={
								card.descriptionLayout
									? {
											maxWidth: `${card.descriptionLayout.width}px`,
											minHeight: `${card.descriptionLayout.height}px`,
											fontSize: `${card.descriptionLayout.fontSize}px`,
											fontWeight: card.descriptionLayout.fontWeight,
											lineHeight: card.descriptionLayout.lineHeight,
											letterSpacing: card.descriptionLayout.letterSpacing,
											color: card.descriptionLayout.color,
											fontFamily: card.descriptionLayout.fontFamily,
											marginBottom: idx === 0 ? "25px" : idx === 2 ? "25px" : undefined,
									  }
									: { fontSize: "14px" }
							}
						>
							{card.description}
						</p>
						{idx === 1 ? (
							<div className="flex items-center space-x-2 mt-auto" style={{ paddingTop: "25px" }}>
								<Image
									src={card.authorImage}
									alt={card.author}
									width={card.authorImageLayout?.width ?? 28}
									height={card.authorImageLayout?.height ?? 28}
									className="object-cover flex-shrink-0"
									style={{
										borderRadius: `${card.authorImageLayout?.radius ?? 4}px`,
										width: `${card.authorImageLayout?.width ?? 28}px`,
										height: `${card.authorImageLayout?.height ?? 28}px`,
									}}
								/>
								<div>
									<div
										style={{
											fontSize: `${card.authorNameLayout?.fontSize ?? 12}px`,
											fontWeight: card.authorNameLayout?.fontWeight ?? 600,
											color: card.authorNameLayout?.color ?? "#1A2B49",
										}}
									>
										{card.author}
									</div>
									<div className="text-xs text-gray-500" style={{ marginLeft: "-1px" }}>{card.role}</div>
								</div>
							</div>
						) : idx === 0 ? (
							<div className="flex items-center space-x-2 mt-auto">
								<Image
									src={card.authorImage}
									alt={card.author}
									width={card.authorImageLayout?.width ?? 28}
									height={card.authorImageLayout?.height ?? 28}
									className="object-cover flex-shrink-0"
									style={{
										borderRadius: `${card.authorImageLayout?.radius ?? 4}px`,
										width: `${card.authorImageLayout?.width ?? 28}px`,
										height: `${card.authorImageLayout?.height ?? 28}px`,
									}}
								/>
								<div>
									<div
										style={{
											fontSize: `${card.authorNameLayout?.fontSize ?? 12}px`,
											fontWeight: card.authorNameLayout?.fontWeight ?? 600,
											color: card.authorNameLayout?.color ?? "#1A2B49",
										}}
									>
										{card.author}
									</div>
									<div className="text-xs text-gray-500" style={{ marginLeft: "-1px" }}>{card.role}</div>
								</div>
							</div>
						) : (
							<div className="flex items-center space-x-2 mt-auto">
								<Image
									src={card.authorImage}
									alt={card.author}
									width={card.authorImageLayout?.width ?? 28}
									height={card.authorImageLayout?.height ?? 28}
									className="object-cover flex-shrink-0"
									style={{
										borderRadius: `${card.authorImageLayout?.radius ?? 4}px`,
										width: `${card.authorImageLayout?.width ?? 28}px`,
										height: `${card.authorImageLayout?.height ?? 28}px`,
									}}
								/>
								<div>
									<div
										style={{
											fontSize: `${card.authorNameLayout?.fontSize ?? 12}px`,
											fontWeight: card.authorNameLayout?.fontWeight ?? 600,
											color: card.authorNameLayout?.color ?? "#1A2B49",
										}}
									>
										{card.author}
									</div>
									<div className="text-xs text-gray-500" style={{ marginLeft: "-1px" }}>{card.role}</div>
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
