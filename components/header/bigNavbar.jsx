"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo-80.png";
import Navbar from "./Navbar";
import { useState} from "react";
import ContactPage from "@/app/contact/page";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./header.module.css";
function BigNavbar() {
  const [showContact, setShowContact] = useState(false);
  const contactVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };
  return (
    <>
      <header className={`${classes["qodef-page-header"]} `} role="banner">
        <div className={classes["qodef-page-header-inner"]}>
          <div className={classes["qodef-header-wrapper"]}>
            {/* اللوجو */}
            <div className={classes["qodef-header-logo"]}>
              <Link href="/" className={classes["qodef-header-logo-link"]}>
                <Image
                  src={logo.src}
                  alt="logo"
                  width={174}
                  height={40}
                  priority
                />
              </Link>
            </div>
            <Navbar />
            <div className={classes.icons}>
              <div className={classes.shop}>
                <button data-quantity="0" className={classes["btn-cart"]}>
                  <svg
                    className={classes["icon-cart"]}
                    viewBox="0 0 24.38 30.52"
                    height="30.52"
                    width="24.38"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-cart</title>
                    <path
                      transform="translate(-3.62 -0.85)"
                      d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                    ></path>
                  </svg>
                  <span className={classes.quantity}></span>
                </button>
              </div>
              <div
                className={classes.icon}
                onClick={() => setShowContact(true)} // فتح الصفحة
              >
                <input type="checkbox" className={classes.checkbox} />
                <label htmlFor="checkbox" className={classes.toggle}>
                  <div
                    className={`${classes.bar} ${classes["bar--middle"]}`}
                  ></div>
                  <div
                    className={`${classes.bar} ${classes["bar--bottom "]}`}
                  ></div>
                </label>
              </div>
            </div>
            <AnimatePresence>
              {showContact && (
                <motion.div
                  className={classes.contactBox}
                  variants={contactVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 1, ease: "easeInOut" }}
                  style={{ transformOrigin: "right" }}
                >
                  <div
                    className={classes.close}
                    onClick={() => setShowContact(false)}
                  >
                    <button className={classes.button}>
                      <span className={classes.X}></span>
                      <span className={classes.Y}></span>
                    </button>
                  </div>
                  <ContactPage />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
    </>
  );
}

export default BigNavbar;
