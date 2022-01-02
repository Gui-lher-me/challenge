import { BadgeItem } from "./BadgeItem";

import "./BadgeList.css";

export const BadgeList = () => {
    // fake data
    // in the future we'll make a request to some api
    const features = [
        {
            id: 1,
            title: "Earnings",
            value: "$4,500",
            success: true,
        },
        {
            id: 2,
            title: "Projects",
            value: "75",
            success: false,
        },
        {
            id: 3,
            title: "Success",
            value: "%60",
            success: true,
        },
    ];

    return (
        <div className="badges">
            {features.map((feature) => (
                <BadgeItem key={feature.id} feature={feature} />
            ))}
        </div>
    );
};
