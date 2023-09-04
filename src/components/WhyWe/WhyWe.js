import WhyWeItem from "../WhyWeItem/WhyWeItem";
import './WhyWe.scss';
import {ApproachIcon, ExperienceIcon, LabIcon, TeamIcon} from "../../icons/Instagram";

function WhyWe() {
    return (
        <div className="why-we" id="about">
            <div className="why-we--header">
                Почему выбрать нас
            </div>
            <div className="why-we--content">
                <WhyWeItem text="Профессиональный коллектив" icon={<TeamIcon />}/>
                <WhyWeItem text="Своя лаборатория" icon={<LabIcon />}/>
                <WhyWeItem text="Большой опыт работы" icon={<ExperienceIcon />}/>
                <WhyWeItem text="Индивидуальный подход" icon={<ApproachIcon />}/>
            </div>
        </div>
    );
}

export default WhyWe;
