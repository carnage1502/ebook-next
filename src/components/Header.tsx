"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-[1rem_1rem_1rem_0] text-white">
      <motion.div
        className="flex items-center"
        transition={{ type: "spring", damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="mr-8 text-[#000] font-bold text-4xl">Reader!</h1>
        <motion.input
          type="text"
          placeholder="Search.."
          className="p-[0.7rem_1rem] ml-14 rounded-[70px] bg-[rgb(248,234,221)] border-2 border-solid border-[#000] min-w-[320px]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        />
      </motion.div>

      <motion.div
        className="flex items-center"
        transition={{ type: "spring", damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link href="/profile" className="mr-4">
          <motion.img
            src="/avatar.png"
            alt="avatar"
            className="w-[40px] h-[40px] rounded-[50%]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
          />
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
