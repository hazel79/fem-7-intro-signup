import React from "react";
import ReactDOM from "react-dom";
import IntroSection from "./components/intro-section";
import FormSection from "./components/form-section";
import "./index.css";
function App() {
    return <>

        <main className="font-main text-white py-10 px-[8vw] lg:px-[10vw]
        md:grid md:grid-cols-2 md:min-h-screen md:gap-5">
            <IntroSection />
            <FormSection />
        </main>

        </>
}

document.body.classList.add('bg-mobile', 'md:bg-desktop')
/*
<footer>
<p class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by <a href="#">Your Name Here</a>.
</p>
</footer>
 */
ReactDOM.render(<App />,document.getElementById("root"))