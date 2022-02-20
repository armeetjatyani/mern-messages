import "../styles/globals.css";
import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="flex w-full h-screen antialiased divide-x-[1px] divide-zinc-700 bg-zinc-900">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Sidebar active={router.query.id} />
      <Component {...pageProps} />
    </div>
  );
}
