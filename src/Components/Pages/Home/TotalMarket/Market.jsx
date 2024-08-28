
// import PropTypes from 'prop-types';

import Title from "../../../Shared/Title/Title";

import marketimg from "../../../../assets/images/market.png"
import { BsBoxFill } from "react-icons/bs";

const Market = () => {
    return (
        <div className="px-4 max-w-6xl mx-auto text-white font-poppins ">
            <Title title={'QUMVA TOKENOMICS'}></Title>
            <h1 className="text-2xl md:text-3xl px-4 uppercase font-extrabold text-center">Total Supply: 350,000,000,000</h1>
            <div className="flex flex-col md:flex-row gap-4 px-4 mt-3 mb-6 justify-between items-center">
                {/* content */}
                
                <div>
                    
                    {/* cap */}
                    <div>
                        {/* 1 */}
                        <div className="flex flex-row gap-2 items-center mt-4 mb-4 px-4">
                            <h1 className="text-xl md:text-2xl px-2 text-[#000000]"><BsBoxFill /></h1>
                            <div>
                                <h1  className="text-lg md:text-xl font-bold ">LIQUIDITY</h1>
                                <p className="text-sm md:text-lg text-slate-200">LP (10%) + CEX Liquidity (7%)</p>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="flex flex-row gap-2 items-center mt-4 mb-4 px-4">
                            <h1 className="text-xl md:text-2xl px-2 text-[#2d8ea4]"><BsBoxFill /></h1>
                            <div>
                                <h1  className="text-lg md:text-xl font-bold ">TEAM</h1>
                                <p className="text-sm md:text-lg text-slate-200">TGE 10%, linear vesting 24 months</p>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="flex flex-row gap-2 items-center mt-4 mb-4 px-4">
                            <h1 className="text-xl md:text-2xl px-2 text-[#ffab91]"><BsBoxFill /></h1>
                            <div>
                                <h1  className="text-lg md:text-xl font-bold ">ECOSYSTEM FUND</h1>
                                <p className="text-sm md:text-lg text-slate-200">TGE 20%, linear vesting 12 months</p>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className="flex flex-row gap-2 items-center mt-4 mb-4 px-4">
                            <h1 className="text-xl md:text-2xl px-2 text-[#ffccbc]"><BsBoxFill /></h1>
                            <div>
                                <h1  className="text-lg md:text-xl font-bold ">PUBLIC SALE</h1>
                                <p className="text-sm md:text-lg text-slate-200">TGE 100%, Full unlock</p>
                            </div>
                        </div>
                        {/* 5 */}
                        <div className="flex flex-row gap-2 items-center mt-4 mb-4 px-4">
                            <h1 className="text-xl md:text-2xl px-2 text-[#f9f3e3]"><BsBoxFill /></h1>
                            <div>
                                <h1  className="text-lg md:text-xl font-bold ">RESERVE </h1>
                                <p className="text-sm md:text-lg text-slate-200">Treasury for future needs & expansion</p>
                            </div>
                        </div>
                        {/* 6 */}
                        <div className="flex flex-row gap-2 items-center mt-4 mb-4 px-4">
                            <h1 className="text-xl md:text-2xl px-2 text-[#a0a5c2]"><BsBoxFill /></h1>
                            <div>
                                <h1  className="text-lg md:text-xl font-bold ">AIRDROP & BOUNTY PROGRAM </h1>
                                <p className="text-sm md:text-lg text-slate-200">TGE 100%, Full unlock</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* img */}
                <div className="w-2/4">
                    <img src={marketimg} alt="marketcap" />

                </div>
            </div>

        </div>
    );
};

Market.propTypes = {

};

export default Market;