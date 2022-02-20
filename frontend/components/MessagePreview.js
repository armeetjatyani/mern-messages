import { useEffect, useState } from "react";

export default function MessagePreview({ title, content }) {
	return (
		<div className={`flex-grow ${!title && "flex items-center justify-center"}`}>
			{title ? (
				<div className="flex justify-center h-full p-8 overflow-y-scroll text-white">
					<div className="w-[80%] space-y-8">
						<h1 className="text-2xl font-bold">{title}</h1>
						<p className="text-zinc-400">{content}</p>
					</div>
				</div>
			) : (
				<h1 className="text-2xl text-zinc-400">No Message Selected</h1>
			)}
		</div>
	);
}
