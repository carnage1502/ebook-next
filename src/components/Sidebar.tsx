"use client";
import { motion } from "framer-motion";
import {
  FaHome,
  FaEnvelope,
  FaInfoCircle,
  FaCog,
  FaStar,
  FaEye,
} from "react-icons/fa";

const Sidebar = () => {
  const MenuList = [
    {
      title: "Home",
      icon: <FaHome className="mr-2 inline-block" />,
    },
    {
      title: "Contact",
      icon: <FaEnvelope className="mr-2 inline-block" />,
    },
    {
      title: "AboutUs",
      icon: <FaInfoCircle className="mr-2 inline-block" />,
    },
    {
      title: "Settings",
      icon: <FaCog className="mr-2 inline-block" />,
    },
    {
      title: "Contact",
      icon: <FaHome className="mr-2 inline-block" />,
    },
    {
      title: "RateUs",
      icon: <FaStar className="mr-2 inline-block" />,
    },
    {
      title: "Change Password",
      icon: <FaEye className="mr-2 inline-block" />,
    },
    {
      title: "Settings",
      icon: <FaCog className="mr-2 inline-block" />,
    },
  ];
  return (
    <>
      {MenuList.map((list, i) => (
        <motion.div
          key={i}
          className=""
          transition={{ type: "spring", damping: 22, mass: 0.99 }}
          initial={{ opacity: 0, x: -2000 * (i + 1) }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ul className="list-none p-0 min-w-[200px] ">
            {
              <motion.li
                className="mb-4 text-xl p-1.5 cursor-pointer bg-[#E0CCBE] rounded-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.1)]"
                whileHover={{ scale: 1.1 }}
              >
                <motion.span
                  transition={{ type: "spring", damping: 30, mass: 0.99 }}
                  initial={{ opacity: 0, x: -10000 * (i + 1) }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "600",
                    marginLeft: "10px",
                    lineHeight: 2,
                  }}
                >
                  {list.icon}
                  {list.title}
                </motion.span>
              </motion.li>
            }
          </ul>
        </motion.div>
      ))}
    </>
  );
};

export default Sidebar;
