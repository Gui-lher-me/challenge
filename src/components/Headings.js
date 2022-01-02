import "./Headings.css";

export const Headings = () => {
    return (
        <div className="headings__container">
            <div className="headings__username">
                <h2>Max Smith</h2>
                <div className="bluecheckmark__container">
                    <img
                        src="https://res.cloudinary.com/frontly/image/upload/v1633111416/Screen_Shot_2021-10-01_at_1.02.06_PM_eaai6t.png"
                        alt="Blue Checkmark"
                    />
                </div>
            </div>

            <span>Upgrade to Pro</span>
        </div>
    );
};
