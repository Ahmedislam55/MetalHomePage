"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.css";
import { motion, AnimatePresence } from "framer-motion";
const navLinks = [
  { title: "Homes", href: "/home"},
  { title: "Pages", href: "/pages" },
  { title: "Blog", href: "/blogs" },
  { title: "Shop", href: "/shop" },
  { title: "Portfolio", href: "/portfolio" },
];
const subLinks = {
  "/home": [
    { title: "Main Home", href: "/home" },
    { title: "Oil Industry", href: "/home/oilindustry" },
    { title: "Engineering", href: "/home/engineering" },
    { title: "Split Slider", href: "/home/split-slider" },
    { title: "Metal Products", href: "/home/metal-products" },
    { title: "Vertical Slider", href: "/home/vertical-slider" },
    { title: "Metalworking", href: "/home/metalworking" },
    { title: "Solar Energy", href: "/home/solar-energy" },
    { title: "Coming Soon", href: "/home/coming-soon" },
    { title: "Landing", href: "/home/landing" },
  ],
  "/pages": [
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Image Gallery", href: "/gallery" },
    { title: "Pricing Plans", href: "/pricing" },
    { title: "Our Services", href: "/services" },
    { title: "What We Do", href: "/what-we-do" },
    { title: "Our Clients", href: "/clients" },
    { title: "Our Team", href: "/team" },
    { title: "FAQ Page", href: "/faq" },
  ],
  "/blogs": [
    { title: "Right Sidebar", href: "/blogs/rightSidebar" },
    { title: "Left Sidebar", href: "/blogs/leftSidebar" },
    { title: "No Sidebar", href: "/blogs/noSidebar" },
    { title: "Full Width List", href: "/blogs/fullWidthList" },
    { title: "Post Types", href: "/blogs/postTypes" },
  ],
  "/shop": [
    { title: "Shop List", href: "/shop/shopList" },
    { title: "Shop Single", href: "/shop/shopSingle" },
    { title: "Shop Layouts", href: "/shop/shopLayouts" },
    { title: "Shop Pages", href: "/shop/shopPages" },
  ],
  "/portfolio": [
    { title: "List Types", href: "/portfolio/listTypes" },
    { title: "Layouts", href: "/portfolio/layouts" },
    { title: "Single Types", href: "/portfolio/singleTypes" },
  ],
};
const extraLinks = {
  "/blogs/postTypes": [
    { title: "Standard Post", href: "/blogs/postTypes/standardPost" },
    { title: "No Sidebar Post", href: "/blogs/postTypes/noSidebarPost" },
    { title: "Gallery Post", href: "/blogs/postTypes/galleryPost" },
    { title: "Audio Post", href: "/blogs/postTypes/audioPost" },
    { title: "Video Post", href: "/blogs/postTypes/videoPost" },
    { title: "Quote Post", href: "/blogs/postTypes/quotePost" },
    { title: "Link Post", href: "/blogs/postTypes/linkPost" },
  ],
  "/shop/shopLayouts": [
    { title: "Three Columns", href: "/shop/shopLayouts/threeshop" },
    { title: "Four Columns", href: "/shop/shopLayouts/fourshop" },
    { title: "Five Columns Wide", href: "/shop/shopLayouts/fiveshop" },
    { title: "Six Columns Wide", href: "/shop/shopLayouts/sixshop" },
  ],
  "/shop/shopPages": [
    { title: "Cart", href: "/shop/shopPages/cart" },
    { title: "Checkout", href: "/shop/shopPages/checkout" },
    { title: "My Account", href: "/shop/shopPages/myAccount" },
  ],
  "/portfolio/listTypes": [
    { title: "Standard", href: "/portfolio/listTypes/standard" },
    { title: "Gallery", href: "/portfolio/listTypes/gallery" },
    { title: "Gallery Joined", href: "/portfolio/listTypes/galleryJoined" },
    { title: "Masonry", href: "/portfolio/listTypes/masonry" },
  ],
  "/portfolio/layouts": [
    { title: "Three Columns", href: "/portfolio/layouts/threeprotfolio" },
    { title: "Four Columns", href: "/portfolio/layouts/fourprotfolio" },
    {
      title: "Four Columns Wide",
      href: "/portfolio/layouts/fourwideprotfolio",
    },
    {
      title: "Five Columns Wide",
      href: "/portfolio/layouts/fivewideprotfolio",
    },
  ],
  "/portfolio/singleTypes": [
    { title: "Big Images", href: "/portfolio/singleTypes/bigImages" },
    { title: "Small Images", href: "/portfolio/singleTypes/smallImages" },
    { title: "Big Gallery", href: "/portfolio/singleTypes/bigGallery" },
    { title: "Small Gallery", href: "/portfolio/singleTypes/smallGallery" },
    { title: "Big Slider", href: "/portfolio/singleTypes/bigSlider" },
    { title: "Small Slider", href: "/portfolio/singleTypes/smallSlider" },
  ],
};
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [openSubMenus, setOpenSubMenus] = useState({});
  const [openExtraMenus, setOpenExtraMenus] = useState({});
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        !event.target.closest(`.${classes["qodef-header-navigation"]}`)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const toggleSubMenu = (menuKey) => {
    setOpenSubMenus((prev) => {
      const newState = {};
      newState[menuKey] = !prev[menuKey];
      return newState;
    });
  };
  const toggleExtraMenu = (menuKey) => {
    setOpenExtraMenus((prev) => {
      const newState = {};
      newState[menuKey] = !prev[menuKey];
      return newState;
    });
  };
  return (
    <nav
      className={`${classes["qodef-header-navigation"]} ${
        menuOpen ? classes["menu-open"] : ""
      }`}
      role="navigation"
    >
      <ul className={classes["qodef-nav-list"]}>
        {navLinks.map((navItem, index) => {
          const isActiveMain =
            pathname === navItem.href ||
            subLinks[navItem.href]?.some((sub) => pathname === sub.href) ||
            extraLinks[navItem.href]?.some((extra) => pathname === extra.href);
          return (
            <li
              key={index}
              className={`${classes["qodef-nav-item"]} ${
                isActiveMain ? classes.active : ""
              }`}
            >
              <Link href={navItem.href}>
                <span className={classes["qodef-menu-item-text"]}>
                  {navItem.title}
                </span>
              </Link>

              {subLinks[navItem.href] && (
                <ul
                  className={`${classes["qodef-dropdown"]} ${
                    isActiveMain ? classes["qodef-dropdown-open"] : ""
                  }`}
                >
                  {subLinks[navItem.href].map((subItem, subIndex) => {
                    const isActiveSub =
                      pathname === subItem.href ||
                      extraLinks[subItem.href]?.some(
                        (extra) => pathname === extra.href
                      );

                    return (
                      <li
                        key={subIndex}
                        className={isActiveSub ? classes.active : ""}
                      >
                        <Link
                          href={subItem.href}
                          className={classes["qodef-menu-item-subItem"]}
                        >
                          <span>{subItem.title}</span>
                          {extraLinks[subItem.href] && (
                            <span className={classes["qodef-submenu-arrow"]}>
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                className={classes.faAngleRight}
                              />
                            </span>
                          )}
                        </Link>
                        {extraLinks[subItem.href] && (
                          <ul
                            className={`${classes["qodef-extra-dropdown"]} ${
                              isActiveSub ? classes["qodef-dropdown-open"] : ""
                            }`}
                          >
                            {extraLinks[subItem.href].map(
                              (extraItem, extraIndex) => {
                                const isActiveExtra =
                                  pathname === extraItem.href;

                                return (
                                  <li
                                    key={extraIndex}
                                    className={
                                      isActiveExtra ? classes.active : ""
                                    }
                                  >
                                    <Link href={extraItem.href}>
                                      <span
                                        className={
                                          classes["qodef-menu-item-extraItem"]
                                        }
                                      >
                                        {extraItem.title}
                                      </span>
                                    </Link>
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      {/* Button for icon mobile */}
      <div className={classes.moblieIcon} onClick={toggleMenu}>
        <label className={classes.menuButton}>
          <input
            id="check"
            type="checkbox"
            checked={menuOpen}
            onChange={toggleMenu}
            className={classes.checkbox}
          />
          <span className={classes.top}></span>
          <span className={classes.mid}></span>
          <span className={classes.bot}></span>
        </label>
      </div>

      {/* القائمة المحمولة */}
      <AnimatePresence>
        {menuOpen && (
          <div
            className={`${classes.mobileNavbar} navbar-nav w-100 d-lg-none py-3`}
          >
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={classes.mobileNavbar}
            >
              <ul className={classes["qodef-mobile-nav-list"]}>
                {navLinks.map((navItem, index) => {
                  const isActiveMain =
                    pathname === navItem.href ||
                    subLinks[navItem.href]?.some(
                      (sub) => pathname === sub.href
                    ) ||
                    extraLinks[navItem.href]?.some(
                      (extra) => pathname === extra.href
                    );

                  return (
                    <li
                      key={index}
                      className={`${classes["qodef-nav-item-mobile"]} ${
                        isActiveMain ? classes.active : ""
                      }`}
                    >
                      <div className="d-flex justify-content-between">
                        <Link href={navItem.href}>
                          <span className={classes["qodef-menu-item-text"]}>
                            {navItem.title}
                          </span>
                        </Link>

                        {/* زر فتح القوائم الفرعية عند الضغط على السهم */}
                        {subLinks[navItem.href] && (
                          <span
                            className={classes.rightMobile}
                            onClick={() => toggleSubMenu(navItem.href)}
                          >
                            <FontAwesomeIcon
                              icon={
                                openSubMenus[navItem.href]
                                  ? faArrowDown
                                  : faArrowRight
                              } // تغيير الأيقونة
                              className={`${classes.faAngleRight} ${
                                openSubMenus[navItem.href] ? classes.open : ""
                              }`}
                            />
                          </span>
                        )}
                      </div>

                      {/* القوائم الفرعية تظهر عند الضغط على السهم */}
                      <AnimatePresence>
                        {openSubMenus[navItem.href] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className={classes.mobileNavbar}
                          >
                            <ul
                              className={`${classes["qodef-dropdown-mobile"]} ${
                                isActiveMain
                                  ? classes["qodef-dropdown-open"]
                                  : ""
                              }`}
                            >
                              {subLinks[navItem.href].map(
                                (subItem, subIndex) => {
                                  const isActiveSub =
                                    pathname === subItem.href ||
                                    extraLinks[subItem.href]?.some(
                                      (extra) => pathname === extra.href
                                    );
                                  return (
                                    <li
                                      key={subIndex}
                                      className={
                                        isActiveSub ? classes.active : ""
                                      }
                                    >
                                      <Link href={subItem.href}>
                                        <span>{subItem.title}</span>
                                      </Link>
                                      {extraLinks[subItem.href] && (
                                        <span
                                          className={classes.iconsubMobile}
                                          onClick={() =>
                                            toggleExtraMenu(subItem.href)
                                          }
                                        >
                                          <FontAwesomeIcon
                                            icon={
                                              openExtraMenus[subItem.href]
                                                ? faArrowDown
                                                : faArrowRight
                                            } // تغيير الأيقونة
                                            className={`${
                                              classes.faAngleRight
                                            } ${
                                              openExtraMenus[subItem.href]
                                                ? classes.open
                                                : ""
                                            }`}
                                          />
                                        </span>
                                      )}
                                      <AnimatePresence>
                                        {openExtraMenus[subItem.href] && (
                                          <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                              opacity: 1,
                                              height: "auto",
                                            }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{
                                              duration: 0.4,
                                              ease: "easeInOut",
                                            }}
                                            className={classes.mobileNavbar}
                                          >
                                            <ul>
                                              {extraLinks[subItem.href].map(
                                                (extraItem, extraIndex) => {
                                                  const isActiveExtra =
                                                    pathname === extraItem.href;

                                                  return (
                                                    <li
                                                      key={extraIndex}
                                                      className={
                                                        isActiveExtra
                                                          ? classes.active
                                                          : ""
                                                      }
                                                    >
                                                      <Link
                                                        href={extraItem.href}
                                                      >
                                                        <span
                                                          className={
                                                            classes[
                                                              "qodef-menu-item-extraItemMobile"
                                                            ]
                                                          }
                                                        >
                                                          {extraItem.title}
                                                        </span>
                                                      </Link>
                                                    </li>
                                                  );
                                                }
                                              )}
                                            </ul>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
