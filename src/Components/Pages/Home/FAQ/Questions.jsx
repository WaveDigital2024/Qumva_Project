

const Questions = () => {
    return (
        <div className="max-w-5xl px-4 py-3 mx-auto mt-3 mb-4 text-white font-poppins">
        {/* Question 1 */}
        <div tabIndex={0} className="collapse collapse-arrow border-2 bg-gradient-to-r from-slate-900/50 to-sky-950/70 border-sky-300 my-3">
            <div className="collapse-title text-xl font-medium uppercase">
                HOW CAN I EARN COINS?
            </div>
            <div className="collapse-content">
                <p>Visit the Earn Coins page and complete the tasks listed. Each task will reward you with a certain number of coins.</p>
            </div>
        </div>
    
        {/* Question 2 */}
        <div tabIndex={0} className="collapse collapse-arrow border-2 bg-gradient-to-r from-slate-900/50 to-sky-950/70 border-sky-300 my-3">
            <div className="collapse-title text-xl font-medium uppercase">
                ARE COINS TRANSFERABLE?
            </div>
            <div className="collapse-content">
                <p>Yes, coins are transferable. Navigate to your profile section and use the transfer button. You can transfer points using a Gmail ID, with a minimum transfer amount of 20 coins.</p>
            </div>
        </div>
    
        {/* Question 3 */}
        <div tabIndex={0} className="collapse collapse-arrow border-2 bg-gradient-to-r from-slate-900/50 to-sky-950/70 border-sky-300 my-3">
            <div className="collapse-title text-xl font-medium uppercase">
                CAN I CONNECT MY CRYPTO WALLET TO THIS WEBSITE?
            </div>
            <div className="collapse-content">
                <p>Yes, you can connect your crypto wallet after logging in. There is a Connect Wallet button at the top of the website.</p>
            </div>
        </div>
    
        {/* Question 4 */}
        <div tabIndex={0} className="collapse collapse-arrow border-2 bg-gradient-to-r from-slate-900/50 to-sky-950/70 border-sky-300 my-3">
            <div className="collapse-title text-xl font-medium uppercase">
                HOW MUCH CAN I EARN FROM THIS WEBSITE?
            </div>
            <div className="collapse-content">
                <p>Your earnings potential is high. The more tasks you complete, the more coins you will earn.</p>
            </div>
        </div>
    </div>
    
    );
};

export default Questions;