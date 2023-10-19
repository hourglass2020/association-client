import { Helmet } from "react-helmet-async";

import { links } from "../../constants/particles.js";

import LandingHeader from "./LandingHeader.jsx";
import LandingFeatures from "./LandingFeatures.jsx";
import Blog from "../blog/Blog.jsx";
import { Courses } from "../courses/Courses.jsx";

export default function Landing() {

    return (
        <div>
            <Helmet>
                <title>انجمن علمی برق</title>
            </Helmet>
            <Courses />
            <Blog />
        </div>
    )
}