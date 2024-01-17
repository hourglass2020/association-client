import { Helmet } from "react-helmet-async";

import CoursesSection from "../courses/CoursesSection.jsx";
import BlogSection from "../blog/BlogSection.jsx";
import LandingHeader from "../../components/landing/LandingHeader.jsx";

export default function Landing() {

    return (
        <div>
            <Helmet>
                <title>انجمن علمی برق</title>
            </Helmet>
            <LandingHeader />
            <CoursesSection />
            <BlogSection />
        </div>
    )
}