import "./budget-section.css"

const Budget_section = () => {
    return (
    <div className = "budget-section">
        {/* <!-- The Essentials Section --> */}
        <div className="budget-item align-left">
            <p className="essentials-intro"> First things first, </p>
            <h2 className="title"> The Essentials (50%) </h2>
                <img src="/hex-class/00ff00/financial-literacy/essentials_image.png" alt="Essentials Icon" className="image essentials-image"/>
                <p className = "description">
                    Half of your income should go toward essential expenses that you can&apos;t
                    live without, such as rent, utilities, groceries, transportation, and
                    tuition/minimum loan payments. Needs are your top priority, as they cover
                    your basic living requirements.
                </p>
            <p className="budget-tags essentials-tags">
                RENT • UTILITIES • GROCERIES • TRANSPORTATION • TUITION • LOANS • HYGIENE • SCHOOL SUPPLIES
            </p>
        </div>


        {/* "The "Fun Fund" Section */}
        <div className = "budget-item align-right">
            <h2 className = "title fun-title"> The &quot;Fun Fund&quot; (30%) </h2>
                <img src="/hex-class/00ff00/financial-literacy/fun_image.png" alt="Fun Icon" className="image fun-image"/>
                <p className = "description fun-description"> 
                The next 30% is for your wants. These are non-essential expenses that
                enhance your lifestyle, like dining out, entertainment, hobbies, and
                shopping. It&apos;s important to enjoy your money responsibly while sticking
                to this budget to avoid overspending on luxuries.
                </p>
            <p className = "budget-tags fun-tags">
                FASHION • DINING • CONCERTS • HOBBIES • TRAVEL • BEAUTY • TECHNOLOGY• ENTERTAINMENT
            </p>
        </div>

        {/* <!-- Save and Secure Section --> */}
        <div className = "budget-item align-left">
            <h2 className = "title"> Save and Secure (20%) </h2>
            <p className = "description save-description"> 
                The final 20% is dedicated to your future. This includes building an
                emergency fund, saving for long-term goals, and paying off debt faster
                than the minimum. Prioritizing this category helps secure financial
                stability and peace of mind.
            </p>
            <p className = "budget-tags save-tags">
                MEDICAL EMERGENCY • REPAIRS • LONG-TERM FINANCIAL GOALS • INVESTING • DEBT • CAR • HOUSE
            </p>
        </div>

    </div>
    )
}

export default Budget_section