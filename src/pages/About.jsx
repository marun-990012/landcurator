import AboutBanner from "./AboutBanner";
import VideoEmbed from "./VideoEmbed";
import OurServcies from "./OurServices";
import Benefits from "./Benefits";
import TestimonialSlider from "./Testimonial";

function About(){
    return(
        <div>
            <AboutBanner/>
             <VideoEmbed/>
            <OurServcies/>
            <Benefits/>
            <TestimonialSlider/>
        </div>
    )
}
export default About;