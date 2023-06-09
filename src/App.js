import {useRef} from "react";
import thermo from '../src/assets/icon/thermo.png';
import battery from '../src/assets/icon/battery.png';
import {VideoPlayer} from "./components/videoPlayer/VideoPlayer";
import './App.css';
import {Header} from "./components/header/header";
import {Footer} from "./components/footer/Footer";


export function App(technologySectionRef,aboutSectionRef) {
    let videoSectionRef = useRef(null);

    return (
        <div className="wrapper">
            <Header/>
            <main>
                <section className="hero-section">
                    <div className="hero-content">
                        <div className="title-block">
                            <h1 className="title">
                                HeatGuard: Revolutionizing Energy Efficiency
                            </h1>
                            <p className="subtitle">
                                Combat greenhouse gas emissions and alleviate our global energy crisis with HeatGuard -
                                the unique energy transition solution.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="how-it-works-section">
                    <div className="content-wrapper">
                        <h2 className="section-title">How HeatGuard Works</h2>
                        <p className="section-description">
                            In physics, the second law of thermodynamics shows that heat will move toward cold.
                            HeatGuard provides a barrier against heat loss and our patented profile encourages the
                            natural flow of warm air upwards and into the center of the room through the creation of
                            manifold vortices as the air flows over the panel surface.
                        </p>
                        <img className="thermo-image" src={thermo} alt="Thermo"/>
                        <VideoPlayer id="video-player" ref={(ref) => (videoSectionRef = ref)}/>
                    </div>
                </section>
                <section className="proof-section">
                    <div className="content-wrapper">
                        <h2 className="section-title">Our proof from multiple tests</h2>
                        <ul className="test-list">
                            <li className="test-item">
                                <div className="test-item-wrapper">
                                    <h3 className="test-title">Test 1 - UNIVERSITY OF DETROIT MERCY, USA
                                        (2019-2021)</h3>
                                    <p className="test-findings">
                                        "The Panel installation was completed on 19th January 2020. Due to Covid-19 the
                                        data
                                        was only processed in 2021. Compared to the data of 2019 the new data collected
                                        showed over 26% energy savings..."
                                    </p>
                                </div>
                            </li>
                            <li className="test-item">
                                <div className="test-item-wrapper">
                                    <h3 className="test-title">Test 2 - ORLY, FRANCE (2013)</h3>
                                    <p className="test-findings">
                                        This independently verified study in Orly, Val-De-Marne, France produced an
                                        average
                                        of 20 per cent fuel savings in the nine test apartments in a two-year-old
                                        building.
                                        We installed an average of 8 Panels per apartment. The hot water was pumped
                                        directly
                                        from the geothermal plant at Orly, France to individually metered radiators in
                                        each
                                        apartment.
                                    </p>
                                </div>
                            </li>
                            <li className="test-item">
                                <div className="test-item-wrapper">
                                    <h3 className="test-title">Test 3 - HARWELL SCIENCE AND INNOVATION CAMPUS UK
                                        (1987)</h3>
                                    <p className="test-findings">
                                        "...the figure...(26.8%) represents the overall percentage fuel saving from the
                                        panel in conditions modeled."

                                        "...a brief discussion of the transient effect of night-time setback in radiator
                                        temperature suggests that transient heat losses would also be significantly
                                        reduced
                                        by the use of the panel."
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="benefit-section" ref={(ref) => (technologySectionRef = ref)}>
                    <div className="content-wrapper">
                        <h2 className="section-title">The Key Benefit of HeatGuard Technology</h2>
                        <p className="section-description">
                            The results from our in situ tests demonstrate the key benefit of HeatGuard technology:
                            water is returned to the boiler at a higher temperature after installing HeatGuard. This
                            delivers an economically significant reduction in heat loss, energy consumption, and carbon
                            emissions.
                        </p>
                        <img className="battery-image" src={battery} alt="Battery"/>
                    </div>
                </section>
                <section className="about-section" ref={(ref) => (aboutSectionRef = ref)}>
                    <div className="content-wrapper">
                        <div className="about-description-wrapper">
                            <h2 className="section-title">About Us</h2>
                            <p className="about-description">
                                Doug Tolmer guided the invention and early production of HeatGuard panel technology.
                                Despite
                                early success in the UK market in the late 80s, the focus on energy efficiency and the
                                urgent need to reduce greenhouse gas emissions (GHG) was a low priority and the rollout
                                stalled. Now in 2023, there is an urgent need for effective and rapidly deployable
                                technologies to reduce energy costs and combat the global environmental crisis.
                                HeatGuard is
                                well placed to facilitate energy distributors, energy service companies (ESCOs),
                                property
                                managers, and government agencies to participate in the emerging carbon markets, which
                                are a
                                key policy instrument to drive systemic transformation. Chlöe Tolmer is in charge of
                                Operations, and Arpad Maksay is in charge of Distribution, Marketing & Sales.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

