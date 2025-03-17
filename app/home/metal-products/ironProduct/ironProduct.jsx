import Link from "next/link";
import classes from "./ironProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function IronProduct() {
  const images = [
    {
      id: 1,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/81551/conversions/Galvanised-Steel-Sheets-size_150_150.webp",
      title: "Galvanized Steel",
    },
    {
      id: 2,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/50268/conversions/6d292237f565dd3822708d8d54920c32-size_150_150.webp",
      title: "Garage Doors",
    },
    {
      id: 3,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/81759/conversions/Cold-rolled-steel-sheets-size_150_150.webp",
      title: "Corrugated Sheet",
    },
    {
      id: 4,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/96294/conversions/Tube-square-size_150_150.webp",
      title: "Steel tubes",
    },
    {
      id: 5,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/64417/conversions/American-Doors-white-size_150_150.webp",
      title: "Garage Doors",
    },
    {
      id: 6,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/92590/conversions/Al-Arabia-Gray-size_150_150.webp",
      title: "Shop Doors",
    },
    {
      id: 7,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/96088/conversions/Steel-Square%C2%A0tube-size_150_150.webp",
      title: "Steel tubes",
    },
    {
      id: 8,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/77972/conversions/WhatsApp-Image-2023-05-16-at-1.09.20-AM-size_150_150.webp",
      title: "Round steel pipes",
    },
  ];
  return (
    <>
      <section className={classes.broadRange}>
        <div className={classes.itemRange}>
          <div className={classes.items}>
            <p> View all </p>
            <div className={classes.item}>
              <h1> Iron Product </h1>
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
                <div className={`card ${classes.card}`} key={img.id}>
                  <div className={`${classes.images} card-body`}>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IronProduct;
