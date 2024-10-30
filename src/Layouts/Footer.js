import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            {/* Footer Start */}
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="footer-item">
                        <h2 className="fw-bold mb-3">
                        <span className="text-primary mb-0">Baby</span>
                        <span className="text-secondary">Care</span>
                        </h2>
                        <p className="mb-4">
                        There cursus massa at urnaaculis estieSed aliquamellus vitae ultrs
                        condmentum leo massamollis its estiegittis miristum.
                        </p>
                        <div className="border border-primary p-3 rounded bg-light">
                        <h5 className="mb-3">Newsletter</h5>
                        <div
                            className="position-relative mx-auto border border-primary rounded"
                            style={{ maxWidth: 400 }}
                        >
                            <input
                            className="form-control border-0 w-100 py-3 ps-4 pe-5"
                            type="text"
                            placeholder="Your email"
                            />
                            <button
                            type="button"
                            className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2 text-white"
                            >
                            SignUp
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="footer-item">
                        <div
                        className="d-flex flex-column p-4 ps-5 text-dark border border-primary"
                        style={{ borderRadius: "50% 20% / 10% 40%" }}
                        >
                        <p>Monday: 8am to 5pm</p>
                        <p>Tuesday: 8am to 5pm</p>
                        <p>Wednes: 8am to 5pm</p>
                        <p>Thursday: 8am to 5pm</p>
                        <p>Friday: 8am to 5pm</p>
                        <p>Saturday: 8am to 5pm</p>
                        <p className="mb-0">Sunday: Closed</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="footer-item">
                        <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                        LOCATION
                        </h4>
                        <div className="d-flex flex-column align-items-start">
                        <Link to="" className="text-body mb-4">
                            <i className="fa fa-map-marker-alt text-primary me-2" /> 104
                            North tower New York, USA
                        </Link>
                        <Link to="" className="text-start rounded-0 text-body mb-4">
                            <i className="fa fa-phone-alt text-primary me-2" /> (+012) 3456
                            7890 123
                        </Link>
                        <Link to="" className="text-start rounded-0 text-body mb-4">
                            <i className="fas fa-envelope text-primary me-2" />{" "}
                            exampleemail@gmail.com
                        </Link>
                        <Link to="" className="text-start rounded-0 text-body mb-4">
                            <i className="fa fa-clock text-primary me-2" /> 26/7 Hours
                            Service
                        </Link>
                        <div className="footer-icon d-flex">
                            <Link to=""
                            className="btn btn-primary btn-sm-square me-3 rounded-circle text-white"
                            >
                            <i className="fab fa-facebook-f" />
                            </Link>
                            <Link to=""
                            className="btn btn-primary btn-sm-square me-3 rounded-circle text-white"
                            >
                            <i className="fab fa-twitter" />
                            </Link>
                            <Link
                            to="#"
                            className="btn btn-primary btn-sm-square me-3 rounded-circle text-white"
                            >
                            <i className="fab fa-instagram" />
                            </Link>
                            <Link
                            to="#"
                            className="btn btn-primary btn-sm-square rounded-circle text-white"
                            >
                            <i className="fab fa-linkedin-in" />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="footer-item">
                        <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                        OUR GALLARY
                        </h4>
                        <div className="row g-3">
                        <div className="col-4">
                            <div className="footer-galary-img rounded-circle border border-primary">
                            <img
                                src="img/galary-1.jpg"
                                className="img-fluid rounded-circle p-2"
                                alt=""
                            />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="footer-galary-img rounded-circle border border-primary">
                            <img
                                src="img/galary-2.jpg"
                                className="img-fluid rounded-circle p-2"
                                alt=""
                            />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="footer-galary-img rounded-circle border border-primary">
                            <img
                                src="img/galary-3.jpg"
                                className="img-fluid rounded-circle p-2"
                                alt=""
                            />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="footer-galary-img rounded-circle border border-primary">
                            <img
                                src="img/galary-4.jpg"
                                className="img-fluid rounded-circle p-2"
                                alt=""
                            />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="footer-galary-img rounded-circle border border-primary">
                            <img
                                src="img/galary-5.jpg"
                                className="img-fluid rounded-circle p-2"
                                alt=""
                            />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="footer-galary-img rounded-circle border border-primary">
                            <img
                                src="img/galary-6.jpg"
                                className="img-fluid rounded-circle p-2"
                                alt=""
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Footer End */}

            {/* Copyright Start */}
            <div className="container-fluid copyright bg-dark py-4">
                <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    <span className="text-light">
                        <Link to="#">
                        <i className="fas fa-copyright text-light me-2" />
                        Your Site Name
                        </Link>
                        , All right reserved.
                    </span>
                    </div>
                    <div className="col-md-6 my-auto text-center text-md-end text-white">
                    Designed By{" "}
                    <Link className="border-bottom" to="https://htmlcodex.com">
                        HTML Codex
                    </Link>{" "}
                    Distributed By{" "}
                    <Link clas="border-bottom" to="https://themewagon.com">
                        ThemeWagon
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            {/* Copyright End */}
            {/* Back to Top */}
            <Link
                to="#"
                className="btn btn-primary border-3 border-primary rounded-circle back-to-top"
            >
                <i className="fa fa-arrow-up" />
            </Link>
        </>
    );
}

export default Footer;