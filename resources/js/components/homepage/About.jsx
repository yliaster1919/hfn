import React, { useState, useEffect } from "react";
function About() {
    return (
        <section className="about-section section-padding" id="section_2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                        <div className="services-info">
                            <h2 className="text-white mb-4">
                                About Festava 2022
                            </h2>

                            <p className="text-white">
                                Born and raised in Los Angeles, California, Tom
                                Loeffler started in the sport business as a
                                partner representing retired athletes who’s
                                client list included the legendary Muhammad Ali.
                                He specialized in working with active boxers
                                when the company signed Kevin Kelley and Oba
                                Carr as their first clients. From there he went
                                on to work with Shane Moseley, securing a world
                                title fight and getting him on HBO. Tom also
                                worked with many other champions including James
                                Toney and met Vitali and Wladimir Klitschko in
                                1999. Together with the Klitschko brothers, Tom
                                founded K2 Promotions in 2004, his first venture
                                into the promotional side of the business.
                                <br />
                                <br />
                                K2 Promotions promoted their first event on
                                April 24, 2004 at the Staples Center in Los
                                Angeles headlined by the WBC Heavyweight World
                                Championship between Vitali Klitschko and Corrie
                                Sanders. K2 Promotions continued to promote
                                fights featuring both brothers in massive
                                stadiums and arenas in Europe and North America
                                through 2017.
                                <br />
                                <br />
                                In 2011, Loeffler signed Gennadiy Golovkin to K2
                                Promotions and has been credited for being the
                                strategic force behind the rise of the GGG brand
                                worldwide. Tom signed an HBO deal with GGG and
                                helped to develop Golovkin into an international
                                superstar, selling out arenas worldwide and
                                transcending the sport of boxing.
                                <br />
                                <br />
                                During 2017, Loeffler founded 360 Boxing
                                Promotions to provide up and coming boxers
                                additional opportunities to develop their
                                talents. 360 promoted the “Superfly” series,
                                giving exposure to tremendous talents in the
                                lighter divisions like Roman, “Chocolatito”
                                Gonzalez, Juan Francisco Estrada, Srisaket Sor
                                Rungvisai, Nayoa Inoue and Kazuto Ioka. In 2018,
                                360 launched the lauded Hollywood Fight Nights
                                series at the Avalon Nightclub in Hollywood,
                                California. Hollywood Fight Nights is billed as
                                the VIP boxing experience which provides a
                                platform for rising boxers to develop their
                                talents as future champions.
                            </p>

                            <p className="text-white">
                                You are not allowed to redistribute the template
                                ZIP file on any other website without a
                                permission.
                            </p>

                            <h6 className="text-white mt-4">
                                Whole Night Party
                            </h6>

                            <p className="text-white">
                                Please tell your friends about our website.
                                Thank you.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="about-text-wrap">
                            <img
                                src="images/pexels-alexander-suhorucov-6457579.jpg"
                                className="about-image img-fluid"
                            />

                            <div className="about-text-info d-flex">
                                <div className="d-flex">
                                    <i className="about-text-icon bi-person"></i>
                                </div>

                                <div className="ms-4">
                                    <h3>a happy moment</h3>

                                    <p className="mb-0">
                                        your amazing festival experience with us
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
