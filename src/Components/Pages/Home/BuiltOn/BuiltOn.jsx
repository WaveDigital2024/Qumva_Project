// import PropTypes from 'prop-types';

import Title from "../../../Shared/Title/Title";
import { FaCoins } from "react-icons/fa";
import { SiBnbchain } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaUserGroup } from "react-icons/fa6";
import { MdGroupWork } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";
const BuiltOn = () => {
    return (
        <div>
            <div className="px-4">
                <Title title={'Built on Web3 Technology'}></Title>
                <div className="font font-poppins text-white px-4 mt-4 mb-5 max-w-5xl mx-auto overflow-hidden">
                    {/* service 1 */}
                    <div className="flex flex-row gap-3 justify-center items-center mb-3 mt-6">
                        <p className="text-2xl md:text-3xl px-3 py-3 rounded-2xl border-2"><FaCoins /></p>
                        <p className="text-xl md:text-2xl"><span className="font-extrabold  uppercase">Decentralized Architecture :</span> SocialFi will operate on a decentralized network, ensuring data privacy, security, and censorship resistance.</p>
                    </div>
                    {/* service 2 */}
                    <div className="flex flex-row gap-3 justify-center items-center mb-3 mt-6">
                        <p className="text-2xl md:text-3xl px-3 py-3 rounded-2xl border-2"><SiBnbchain /></p>
                        <p className="text-xl md:text-2xl "><span className="font-extrabold uppercase ">Blockchain Integration :</span> Leveraging blockchain technology for data storage, content distribution, and user authentication, SocialFi ensures transparent and tamper-proof interactions.</p>
                    </div>
                    <div className="flex flex-row gap-3 justify-center items-center mb-3 mt-6">
                        <p className="text-2xl md:text-3xl px-3 py-3 rounded-2xl border-2"><SiPostman /></p>
                        <p className="text-xl md:text-2xl "><span className="font-extrabold uppercase">Ownership :</span> User  Users will have full control over their data, including the ability to monetize their content and interactions through cryptocurrency micropayments.ce.</p>
                    </div>
                    <div className="flex flex-row gap-3 justify-center items-center mb-3 mt-6">
                        <p className="text-2xl md:text-3xl px-3 py-3 rounded-2xl border-2"><FaUserGroup /></p>
                        <p className="text-xl md:text-2xl "><span className="font-extrabold uppercase">Community Governance :</span>  SocialFi will implement a governance model where users have a say in platform policies, feature developments, and content moderation through decentralized decision-making mechanisms.</p>
                    </div>
                    <div className="flex flex-row gap-3 justify-center items-center mb-3 mt-6">
                        <p className="text-2xl md:text-3xl px-3 py-3 rounded-2xl border-2"><MdGroupWork /></p>
                        <p className="text-xl md:text-2xl "><span className="font-extrabold uppercase ">Interoperability :</span>   SocialFi will strive for interoperability with other decentralized applications (dApps) and blockchain networks, fostering a connected ecosystem of social and financial interactions.</p>
                    </div>
                    <div className="flex flex-row gap-3 justify-center items-center mb-3 mt-6">
                        <p className="text-2xl md:text-3xl px-3 py-3 rounded-2xl border-2"><SiSpringsecurity /></p>
                        <p className="text-xl md:text-2xl "><span className="font-extrabold uppercase">Privacy and Security :</span>   Built-in encryption and privacy features will safeguard user data, ensuring that</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

BuiltOn.propTypes = {

};

export default BuiltOn;