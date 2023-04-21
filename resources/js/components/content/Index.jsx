import React, { useState, useEffect } from "react";
import Header from "../homepage/Header";
import TopNavbar from "../homepage/TopNavbar";
import Position from "./Position";
function SectionIndex() {
    return (
        <main>
            <Header />
            <TopNavbar />
            <Position />
        </main>
    );
}

export default SectionIndex;
