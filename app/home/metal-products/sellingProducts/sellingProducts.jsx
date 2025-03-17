import classes from "./sellingProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faShop } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
function SellingProducts() {
  const ClipboardIcon = ({ className, size = 20 }) => (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 6.35 6.35"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <path
          fill="currentColor"
          d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
        ></path>
      </g>
    </svg>
  );

  const images = [
    {
      id: 1,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/12/home-3-product-01.jpg",
      price: "$40.00",
      title: "Mini Bars",
    },
    {
      id: 2,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/12/home-3-product-02.jpg",
      price: "$40.00",
      title: "Round Pipe",
    },
    {
      id: 3,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/12/home-3-product-03.jpg",
      price: "$80.00",
      title: "Round Bar Alu",
    },
    {
      id: 4,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/product-single-img-08.jpg",
      price: "$150.00",
      title: "Copper Bars",
    },
    {
      id: 5,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/product-single-img-06.jpg",
      price: "$80.00",
      title: "Tips Aluminium 3mm",
    },
    {
      id: 6,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/product-single-img-05.jpg",
      price: "$115.00",
      title: "Aluminium Coil",
    },
  ];
  return (
    <>
      <section className={classes.sellingProducts}>
        <div className={classes.items}>
          <p> View all </p>
          <div className={classes.item}>
            <h1> Top selling products </h1>
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
        <div className={classes.images}>
          <div className="container-fuild">
            <div className={`${classes.row} row`}>
              {images.map((img) => (
                <div
                  key={img.id}
                  className={`${classes.images} col-xl-4 mb-4 col-lg-6 col-md-6`}
                >
                  <Link href="#">
                    <div className={classes.image}>
                      <div className={classes.layer}>
                        <button className={classes.buttonLayer}>
                          <div className={classes["default-btn"]}>
                            <svg
                              viewBox="0 0 24 24"
                              width="20"
                              height="20"
                              stroke="#ffffff"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="cart-icon"
                            >
                              <circle cx="9" cy="21" r="1"></circle>
                              <circle cx="20" cy="21" r="1"></circle>
                              <path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                              ></path>
                            </svg>
                            <span>Add to Cart</span>
                          </div>
                          <div className={classes["hover-btn"]}>
                            <svg
                              viewBox="0 0 320 512"
                              width="12.5"
                              height="20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"
                                fill="#ffffff"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                            </svg>
                            <span>{img.price}</span>
                          </div>
                        </button>
                      </div>
                      <img src={img.image} alt={img.title} />
                      <div className={classes.caption}>
                        <h3> {img.price} </h3>
                        <h4> {img.title} </h4>
                        <h6> New </h6>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SellingProducts;
