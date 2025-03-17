import Link from "next/link";
import classes from "./smallNavbar.module.css";
function SmallNavbar() {
  return (
    <>
      <div className={classes.smallNavbar}>
        <div className={classes.link1}>
          <ul className={`d-flex align-items-center gap-4 m-0 p-0`} role="list">
            <li>
              <Link href="#">Phone:+321 456 78 90</Link>
            </li>
            <li>|</li>
            <li>
              <Link href="#">Email:manufaktur@example.com</Link>
            </li>
          </ul>
        </div>
        <div className={classes.link2}>
          <ul className={`d-flex align-items-center gap-2 m-0 p-0`} role="list">
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>|</li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>|</li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SmallNavbar;
