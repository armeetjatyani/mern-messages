import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MessagePreview from "../../components/MessagePreview";

export default function Message() {
	const router = useRouter();
	const { id } = router.query;
	const [data, setData] = useState([]);
	let message = null;
	try {
		message = data.filter((element) => element.id == id)[0];
	} catch (e) {}

	useEffect(async () => {
		const res = await (await fetch("/api")).json();
		// setTimeout(() => setData(res), 2000);
		setData(res), 2000;
	}, []);

	return (
		<div className="flex w-full h-screen antialiased divide-x-[1px] divide-zinc-700 bg-zinc-900">
			{data.length >= 1 ? <MessagePreview title={message.title} content={message.content} /> : <p>Loading</p>}
		</div>
	);
}
