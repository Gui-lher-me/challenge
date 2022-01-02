import "./BadgeItem.css";

export const BadgeItem = ({ feature }) => {
    const greenArrow =
        "https://res.cloudinary.com/frontly/image/upload/v1633111416/Screen_Shot_2021-10-01_at_1.01.51_PM_cetr92.png";

    const redArrow =
        "https://res.cloudinary.com/frontly/image/upload/v1633111416/Screen_Shot_2021-10-01_at_1.01.58_PM_yyxxuz.png";

    return (
        <div className="badge__container">
            <div>
                <div className="img__container">
                    <img
                        src={feature.success ? greenArrow : redArrow}
                        alt="Arrow"
                    />
                </div>
                <h3>{feature.value}</h3>
            </div>

            <span>{feature.title}</span>
        </div>
    );
};
