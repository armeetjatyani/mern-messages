import "../styles/globals.css";
import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

	return (
		<div className="flex w-full h-screen antialiased divide-x-[1px] divide-zinc-700 bg-zinc-900">
      <Sidebar active={ router.query.id }/>
			<Component {...pageProps} />
		</div>
	);
}
