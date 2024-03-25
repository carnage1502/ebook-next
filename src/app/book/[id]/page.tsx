"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { books } from "@/constants/mockData";
import { FaSearch, FaCog, FaShare, FaArrowLeft } from "react-icons/fa";
import styles from "./book.module.css";
import { useEffect } from "react";
import { Editor, useDomValue } from "reactjs-editor";

const BookPage = ({ params }: { id: string }) => {
  const { id } = useParams();

  const { dom, setDom } = useDomValue();

  const selectedBook = books.filter((book, i) => {
    return id === String(book.id);
  });
  const notify = () => toast("Your changes has been saved!!");

  const handleSave = () => {
    const updatedDomValue = {
      key: dom?.key,
      props: dom?.props,
      ref: dom?.ref,
      type: dom?.type,
    };

    localStorage.setItem(
      `dom${selectedBook[0].id}`,
      JSON.stringify(updatedDomValue)
    );
    notify();
  };

  useEffect(() => {
    const savedDom = localStorage.getItem(`dom${selectedBook[0].id}`);
    if (savedDom) {
      setDom(JSON.parse(savedDom));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!selectedBook.length) return <p>Book not found</p>;
  return (
    <motion.div
      transition={{ type: "spring", damping: 40, mass: 0.75 }}
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <motion.section
        transition={{ type: "spring", damping: 44, mass: 0.75 }}
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.appBar}
      >
        <div className={styles.leftIcons}>
          <FaArrowLeft className="text-[20px] cursor-pointer" />
        </div>
        <div className={styles.title}>
          <h2 className={styles.titleStyles}> {selectedBook[0].title}</h2>
        </div>
        <div className={styles.icons}>
          <button className={styles.saveButton}>Save</button>
          <FaCog />
          <FaShare />
          <FaSearch />
        </div>
      </motion.section>
    </motion.div>
  );
};

export default BookPage;
