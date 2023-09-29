import { Helmet } from "react-helmet-async";

import { links } from "../../constants/particles.js";

import LandingHeader from "./LandingHeader.jsx";
import LandingFeatures from "./LandingFeatures.jsx";

export default function Landing() {

    return (
        <div>
            <Helmet>
                <title>انجمن علمی برق</title>
            </Helmet>
            <LandingHeader />
            <LandingFeatures />
        </div>
    )
}