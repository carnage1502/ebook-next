"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { books } from "@/constants/mockData";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-[95%] m-auto">
      <div>
        <Header />

        <div className="flex justify-between items-start">
          <section className="w-[30%]">
            <Sidebar />
          </section>

          <div>
            <h1 className="font-bold text-4xl">All Books</h1>
            <ul>
              {books.map((book, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", damping: 50, mass: 0.75 }}
                  initial={{ opacity: 0, x: 200 * (i + 1) }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <a href={`/book/${book.id}`}>
                    <p>{book.title}</p>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
