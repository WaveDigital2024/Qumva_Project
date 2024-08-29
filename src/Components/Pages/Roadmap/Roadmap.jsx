// import React from 'react';
// import PropTypes from 'prop-types';

import { Helmet } from "react-helmet";
import Title from "../../Shared/Title/Title";
import Navber from "../../Shared/Navber/Navber";
import Footer from "../../Shared/Footer/Footer";

const Roadmap = () => {
    return (
        <div className='loginbackgrnd min-h-screen'>
            <Helmet>
                <title>RoadMap</title>
            </Helmet>
            <Navber></Navber>
            <div className="pt-48 md:pt-52">

                {/* roadmap */}
                <div>
                    <Title title={'Road Map'}></Title>
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical px-4 mb-6 font-poppins text-white ">
                        <li>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-start mb-10 md:text-end pb-4">
                                <time className="font-mono italic pb-3">Q2 2024</time>
                                <li>- Planing </li>
                                <li>- Establish Social Media </li>
                                <li>- Website Launch </li>
                                <li>- Launch Earn Free Qumva Point </li>
                                           
                                    
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end mb-10">
                                <time className="font-mono italic">Q3 2024</time>
                                <li>- Launch Qumva Special Super Santa NFT</li>
                                <li>- Partnership </li>
                                <li>- Marketing </li>
                                <li>- Private Fundraising </li>

                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-start mb-10 md:text-end">
                                <time className="font-mono italic">Q4 2024</time>
                                <li>- Smart Contract Deployment</li>
                                <li>- Contact Audit</li>
                                <li>- Initial Public Presale </li>
                                <li>- Convert Qumva Point to Token</li>
                                <li>- Dex and Cex Listing </li>

                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end mb-10">
                                <time className="font-mono italic">Q1 2025</time>
                                <li>- Ecosystem Voting Power System</li>
                                <li>- Launch Staking and Farming</li>
                                <li>- Release Whitepaper</li>
                                <li>- Built Eco-system</li>
                                <li>- List Exchange More Exchange</li>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-start mb-10 md:text-end">
                                <time className="font-mono italic">Q2 2025</time>
                                <li>- Launch Qumva Mainnet </li>
                                <li>- Launch Qumva Launchpad and Dex </li>
                                <li>- Partnership</li>
                                <li>- Add Mainnet Qumva Dex and Bridge System</li>
                                <li>- Add Staking Program in Qumva Dex</li>
                                
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

Roadmap.propTypes = {

};

export default Roadmap;