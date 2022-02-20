import Link from "next/link";
import { useState, useEffect } from "react";

export default function Sidebar({ active }) {
	const [data, setData] = useState([]);

	useEffect(async () => {
		const res = await (await fetch("/api")).json();
		setData(res);
	}, []);

	return (
		<div className="w-[300px] h-full bg-zinc-800 flex justify-center">
			<div className="w-full h-full p-2 overflow-y-scroll">
				<Link href="/">
					<a className="text-sm text-zinc-500 hover:text-zinc-300">Messages</a>
				</Link>
				<div className="flex flex-col mt-4 space-y-2 text-sm text-white">
					{data.map((message) => {
						return (
							<Link key={message.id} href={`/message/${message.id}`}>
								<a className={`p-2 overflow-hidden truncate transition-all duration-100 rounded-md hover:bg-zinc-700 text-ellipsis ${active == message.id && "bg-blue-600 hover:bg-blue-500"}`}>{message.title}</a>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}
