import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function TopNavbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    HFN Live
                </a>

                <a
                    href="ticket.html"
                    className="btn custom-btn d-lg-none ms-auto me-4"
                >
                    Buy Ticket
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
                        <li className="nav-item">
                            <Link className="nav-link click-scroll" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link click-scroll"
                                href="#section_2"
                            >
                                About
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link click-scroll"
                                href="#section_3"
                            >
                                Boxers
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link click-scroll"
                                href="#section_4"
                            >
                                Gallery
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link click-scroll"
                                href="#section_5"
                            >
                                News
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link click-scroll"
                                href="#section_6"
                            >
                                Events
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link click-scroll"
                                href="#section_7"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>

                    <Link
                        to="/buy_ticket"
                        className="btn custom-btn d-lg-block d-none"
                    >
                        Buy Ticket
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default TopNavbar;
