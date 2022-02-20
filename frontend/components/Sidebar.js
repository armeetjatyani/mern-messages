import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Sidebar({ active }) {
  const [data, setData] = useState([]);
  const [sidebarOpened, setSidebarOpened] = useState(false);

  useEffect(async () => {
    const res = await (await fetch("/api")).json();
    setData(res);
  }, []);

  return (
    <AnimatePresence>
      {sidebarOpened ? (
        <motion.div
          className="w-[300px] h-full bg-zinc-800 flex justify-center"
          layout
          initial={{ width: 0 }}
          animate={{ width: 300 }}
          exit={{ width: 0 }}
          key="sidebar"
        >
          <div className="w-full h-full p-2 overflow-y-scroll">
            <div className="flex items-center justify-between mx-1">
              <Link href="/">
                <a className="text-sm text-zinc-500 hover:text-zinc-300">
                  Messages
                </a>
              </Link>
              <div className="px-2 py-2 transition-all duration-200 rounded-full hover:text-white hover:bg-zinc-700 text-zinc-300">
                <button
                  className="flex items-center justify-center"
                  onClick={() => setSidebarOpened(false)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-col mt-4 space-y-2 text-sm text-white">
              {data.map((message) => {
                return (
                  <Link key={message.id} href={`/message/${message.id}`}>
                    <a
                      className={`p-2 overflow-hidden truncate transition-all duration-100 rounded-md hover:bg-zinc-700 text-ellipsis ${
                        active == message.id && "bg-blue-600 hover:bg-blue-500"
                      }`}
                    >
                      {message.title}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          layout
          key="sidebarbutton"
          className="absolute px-2 py-2 mt-3 ml-5 transition-colors duration-200 rounded-full hover:text-white bg-zinc-700 text-zinc-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <button
            className="flex items-center justify-center"
            onClick={() => setSidebarOpened(true)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
