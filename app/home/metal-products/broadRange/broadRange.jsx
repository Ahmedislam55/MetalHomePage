import Link from "next/link";
import classes from "./broadRange.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function BroadRange() {
  const images = [
    {
      id: 1,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/Shop-Category-01.jpg",
      title: "Copper",
    },
    {
      id: 2,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/Shop-Category-03.jpg",
      title: "Steel",
    },
    {
      id: 3,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/Shop-Category-02.jpg",
      title: "Aluminum",
    },
    {
      id: 4,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/Shop-Category-04.jpg",
      title: "Brass",
    },
    {
      id: 5,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/Shop-Category-05.jpg",
      title: "Lead",
    },
  ];
  return (
    <>
      <section className={classes.broadRange}>
        <div className={classes.items}>
          <p> View all </p>
          <div className={classes.item}>
            <h1> broad range of metal alloys </h1>
            <div className={classes.buttons}>
              <button className={classes.button}>
                <Link href="#">Shop now</Link>
              </button>
              <button className={classes.icon}>
                <Link href="#">
                  <div className={classes.icons}>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className={classes.faAngleRight}
                    />
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className={classes.faAngleRighttwo}
                    />
                  </div>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="container-fuild">
          <div className={`row ${classes.row}`}>
            {images.map((img) => (
              <div className={classes.images} key={img.id}>
                <Link href="#">
                  <div className={classes.hidden}>
                    <img
                      src={img.image}
                      className={classes.image}
                      alt={img.title}
                    />
                  </div>
                </Link>
                <h6> {img.title} </h6>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BroadRange;
