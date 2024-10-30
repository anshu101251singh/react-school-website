
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';

const Testimonial = () => {

    const options = {
        items: 3,
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
      };

    return(
        <>
            <div
                className="container-fluid page-header py-5 wow fadeIn"
                data-wow-delay="0.1s"
                >
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4">Testimonial</h1>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item">
                        <Link to="#">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                        <Link to="#">Pages</Link>
                        </li>
                        <li className="breadcrumb-item text-white" aria-current="page">
                        Testimonial
                        </li>
                    </ol>
                    </nav>
                </div>
            </div>

            <div class="container-fluid testimonial py-5">
                <div class="container py-5">
                    <OwlCarousel className="owl-theme testimonial-carousel" {...options}>
                        <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
                            <div className="p-4 position-relative">
                            <i
                                className="fa fa-quote-right fa-2x text-primary position-absolute"
                                style={{ top: 15, right: 15 }}
                            />
                            <div className="d-flex align-items-center">
                                <div className="border border-primary bg-white rounded-circle">
                                <img
                                    src="img/testimonial-2.jpg"
                                    className="rounded-circle p-2"
                                    style={{
                                    width: 80,
                                    height: 80,
                                    borderStyle: "dotted",
                                    borderColor: "var(--bs-primary)",
                                    }}
                                    alt="Client"
                                />
                                </div>
                                <div className="ms-4">
                                <h4 className="text-dark">Client Name</h4>
                                <p className="m-0 pb-3">Profession</p>
                                <div className="d-flex pe-5">
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                </div>
                                </div>
                            </div>
                            <div className="border-top border-primary mt-4 pt-3">
                                <p className="mb-0">
                                Lorem Ipsum is simply dummy text of the printing Ipsum has
                                been the industry's standard dummy text ever since the
                                1500s.
                                </p>
                            </div>
                            </div>
                        </div>

                        <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
                            <div className="p-4 position-relative">
                            <i
                                className="fa fa-quote-right fa-2x text-primary position-absolute"
                                style={{ top: 15, right: 15 }}
                            />
                            <div className="d-flex align-items-center">
                                <div className="border border-primary bg-white rounded-circle">
                                <img
                                    src="img/testimonial-2.jpg"
                                    className="rounded-circle p-2"
                                    style={{
                                    width: 80,
                                    height: 80,
                                    borderStyle: "dotted",
                                    borderColor: "var(--bs-primary)",
                                    }}
                                    alt="Client"
                                />
                                </div>
                                <div className="ms-4">
                                <h4 className="text-dark">Client Name</h4>
                                <p className="m-0 pb-3">Profession</p>
                                <div className="d-flex pe-5">
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                </div>
                                </div>
                            </div>
                            <div className="border-top border-primary mt-4 pt-3">
                                <p className="mb-0">
                                Lorem Ipsum is simply dummy text of the printing Ipsum has
                                been the industry's standard dummy text ever since the
                                1500s.
                                </p>
                            </div>
                            </div>
                        </div>

                        <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
                            <div className="p-4 position-relative">
                            <i
                                className="fa fa-quote-right fa-2x text-primary position-absolute"
                                style={{ top: 15, right: 15 }}
                            />
                            <div className="d-flex align-items-center">
                                <div className="border border-primary bg-white rounded-circle">
                                <img
                                    src="img/testimonial-2.jpg"
                                    className="rounded-circle p-2"
                                    style={{
                                    width: 80,
                                    height: 80,
                                    borderStyle: "dotted",
                                    borderColor: "var(--bs-primary)",
                                    }}
                                    alt="Client"
                                />
                                </div>
                                <div className="ms-4">
                                <h4 className="text-dark">Client Name</h4>
                                <p className="m-0 pb-3">Profession</p>
                                <div className="d-flex pe-5">
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                </div>
                                </div>
                            </div>
                            <div className="border-top border-primary mt-4 pt-3">
                                <p className="mb-0">
                                Lorem Ipsum is simply dummy text of the printing Ipsum has
                                been the industry's standard dummy text ever since the
                                1500s.
                                </p>
                            </div>
                            </div>
                        </div>

                        <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
                            <div className="p-4 position-relative">
                            <i
                                className="fa fa-quote-right fa-2x text-primary position-absolute"
                                style={{ top: 15, right: 15 }}
                            />
                            <div className="d-flex align-items-center">
                                <div className="border border-primary bg-white rounded-circle">
                                <img
                                    src="img/testimonial-2.jpg"
                                    className="rounded-circle p-2"
                                    style={{
                                    width: 80,
                                    height: 80,
                                    borderStyle: "dotted",
                                    borderColor: "var(--bs-primary)",
                                    }}
                                    alt="Client"
                                />
                                </div>
                                <div className="ms-4">
                                <h4 className="text-dark">Client Name</h4>
                                <p className="m-0 pb-3">Profession</p>
                                <div className="d-flex pe-5">
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                </div>
                                </div>
                            </div>
                            <div className="border-top border-primary mt-4 pt-3">
                                <p className="mb-0">
                                Lorem Ipsum is simply dummy text of the printing Ipsum has
                                been the industry's standard dummy text ever since the
                                1500s.
                                </p>
                            </div>
                            </div>
                        </div>

                        <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
                            <div className="p-4 position-relative">
                            <i
                                className="fa fa-quote-right fa-2x text-primary position-absolute"
                                style={{ top: 15, right: 15 }}
                            />
                            <div className="d-flex align-items-center">
                                <div className="border border-primary bg-white rounded-circle">
                                <img
                                    src="img/testimonial-2.jpg"
                                    className="rounded-circle p-2"
                                    style={{
                                    width: 80,
                                    height: 80,
                                    borderStyle: "dotted",
                                    borderColor: "var(--bs-primary)",
                                    }}
                                    alt="Client"
                                />
                                </div>
                                <div className="ms-4">
                                <h4 className="text-dark">Client Name</h4>
                                <p className="m-0 pb-3">Profession</p>
                                <div className="d-flex pe-5">
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                </div>
                                </div>
                            </div>
                            <div className="border-top border-primary mt-4 pt-3">
                                <p className="mb-0">
                                Lorem Ipsum is simply dummy text of the printing Ipsum has
                                been the industry's standard dummy text ever since the
                                1500s.
                                </p>
                            </div>
                            </div>
                        </div>

                        <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
                            <div className="p-4 position-relative">
                            <i
                                className="fa fa-quote-right fa-2x text-primary position-absolute"
                                style={{ top: 15, right: 15 }}
                            />
                            <div className="d-flex align-items-center">
                                <div className="border border-primary bg-white rounded-circle">
                                <img
                                    src="img/testimonial-2.jpg"
                                    className="rounded-circle p-2"
                                    style={{
                                    width: 80,
                                    height: 80,
                                    borderStyle: "dotted",
                                    borderColor: "var(--bs-primary)",
                                    }}
                                    alt="Client"
                                />
                                </div>
                                <div className="ms-4">
                                <h4 className="text-dark">Client Name</h4>
                                <p className="m-0 pb-3">Profession</p>
                                <div className="d-flex pe-5">
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                </div>
                                </div>
                            </div>
                            <div className="border-top border-primary mt-4 pt-3">
                                <p className="mb-0">
                                Lorem Ipsum is simply dummy text of the printing Ipsum has
                                been the industry's standard dummy text ever since the
                                1500s.
                                </p>
                            </div>
                            </div>
                        </div>
                        
                    </OwlCarousel>
                </div>
            </div>

        </>
    );
}

export default Testimonial;