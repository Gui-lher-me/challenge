import { ImageContainer } from "../ImageContainer";
import { Headings } from "../Headings";
import { UserInformation } from "../UserInformation";
import { BadgeList } from "../badges/BadgeList";
import "./ProfileCard.css";

export const ProfileCard = () => {
    return (
        <div className="profile__container">
            <ImageContainer />

            <div>
                <Headings />

                <UserInformation />

                <BadgeList />
            </div>
        </div>
    );
};
