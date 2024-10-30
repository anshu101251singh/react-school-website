import { Link } from "react-router-dom";

const Event = () => {
    return(
        <>  
            <div
                className="container-fluid page-header py-5 wow fadeIn"
                data-wow-delay="0.1s"
                >
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4">Events</h1>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item">
                        <Link to="#">Home</Link>
                        </li>
                        <li className="breadcrumb-item text-white" aria-current="page">
                        Events
                        </li>
                    </ol>
                    </nav>
                </div>
            </div>

            <div className="container-fluid events py-5 bg-light">
                <div className="container py-5">
                    <div
                    className="mx-auto text-center wow fadeIn"
                    data-wow-delay="0.1s"
                    style={{ maxWidth: 700 }}
                    >
                    <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                        Our Events
                    </h4>
                    <h1 className="mb-5 display-3">Our Upcoming Events</h1>
                    </div>
                    <div className="row g-5 justify-content-center">
                    <div
                        className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
                        data-wow-delay="0.1s"
                    >
                        <div className="events-item bg-primary rounded">
                        <div className="events-inner position-relative">
                            <div className="events-img overflow-hidden rounded-circle position-relative">
                            <img
                                src="img/event-1.jpg"
                                className="img-fluid w-100 rounded-circle"
                                alt="Image"
                            />
                            <div className="event-overlay">
                                <Link to="img/event-1.jpg" data-lightbox="event-1">
                                <i className="fas fa-search-plus text-white fa-2x" />
                                </Link>
                            </div>
                            </div>
                            <div className="px-4 py-2 bg-secondary text-white text-center events-rate">
                            29 Nov
                            </div>
                            <div className="d-flex justify-content-between px-4 py-2 bg-secondary">
                            <small className="text-white">
                                <i className="fas fa-calendar me-1 text-primary" /> 10:00am -
                                12:00pm
                            </small>
                            <small className="text-white">
                                <i className="fas fa-map-marker-alt me-1 text-primary" /> New
                                York
                            </small>
                            </div>
                        </div>
                        <div className="events-text p-4 border border-primary bg-white border-top-0 rounded-bottom">
                            <Link to="#" className="h4">
                            Music &amp; drawing workshop
                            </Link>
                            <p className="mb-0 mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
                            purus consectetur,
                            </p>
                        </div>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
                        data-wow-delay="0.3s"
                    >
                        <div className="events-item bg-primary rounded">
                        <div className="events-inner position-relative">
                            <div className="events-img overflow-hidden rounded-circle position-relative">
                            <img
                                src="img/event-2.jpg"
                                className="img-fluid w-100 rounded-circle"
                                alt="Image"
                            />
                            <div className="event-overlay">
                                <Link to="img/event-3.jpg" data-lightbox="event-1">
                                <i className="fas fa-search-plus text-white fa-2x" />
                                </Link>
                            </div>
                            </div>
                            <div className="px-4 py-2 bg-secondary text-white text-center events-rate">
                            29 Nov
                            </div>
                            <div className="d-flex justify-content-between px-4 py-2 bg-secondary">
                            <small className="text-white">
                                <i className="fas fa-calendar me-1 text-primary" /> 10:00am -
                                12:00pm
                            </small>
                            <small className="text-white">
                                <i className="fas fa-map-marker-alt me-1 text-primary" /> New
                                York
                            </small>
                            </div>
                        </div>
                        <div className="events-text p-4 border border-primary bg-white border-top-0 rounded-bottom">
                            <Link to="#" className="h4">
                            Why need study
                            </Link>
                            <p className="mb-0 mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
                            purus consectetur,
                            </p>
                        </div>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
                        data-wow-delay="0.5s"
                    >
                        <div className="events-item bg-primary rounded">
                        <div className="events-inner position-relative">
                            <div className="events-img overflow-hidden rounded-circle position-relative">
                            <img
                                src="img/event-3.jpg"
                                className="img-fluid w-100 rounded-circle"
                                alt="Image"
                            />
                            <div className="event-overlay">
                                <Link to="img/event-3.jpg" data-lightbox="event-1">
                                <i className="fas fa-search-plus text-white fa-2x" />
                                </Link>
                            </div>
                            </div>
                            <div className="px-4 py-2 bg-secondary text-white text-center events-rate">
                            29 Nov
                            </div>
                            <div className="d-flex justify-content-between px-4 py-2 bg-secondary">
                            <small className="text-white">
                                <i className="fas fa-calendar me-1 text-primary" /> 10:00am -
                                12:00pm
                            </small>
                            <small className="text-white">
                                <i className="fas fa-map-marker-alt me-1 text-primary" /> New
                                York
                            </small>
                            </div>
                        </div>
                        <div className="events-text p-4 border border-primary bg-white border-top-0 rounded-bottom">
                            <Link to="#" className="h4">
                            Child health consciousness
                            </Link>
                            <p className="mb-0 mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
                            purus consectetur,
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Event;