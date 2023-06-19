import WhyWeItem from "../WhyWeItem/WhyWeItem";
import './WhyWe.scss';

function WhyWe() {
    return (
        <div className="why-we" id="about">
            <div className="why-we--header">
                Почему выбрать нас
            </div>
            <div className="why-we--content">
                <WhyWeItem text="Профессиональный коллектив"/>
                <WhyWeItem text="Своя лаборатория"/>
                <WhyWeItem text="Большой опыт работы"/>
                <WhyWeItem text="Индивидуальный подход"/>
            </div>
        </div>
    );
}

export default WhyWe;
