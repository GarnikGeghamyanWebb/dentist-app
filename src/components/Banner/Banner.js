import MainImage from "../../Main.png";
import './Banner.scss';

function Banner() {
    return (
        <div className="banner" id="main">
            <div className="banner-content">
                <div className="banner-text">
                    <div className="banner-text--header">Хотите обладать <span>голливудской</span> улыбкой?</div>
                    <div className="banner-text--description">
                        Для эстетического восстановления фронтальной части зубного ряда самым распространённым методом является установка виниров.
                    </div>
                </div>
                <div className="banner-image">
                    <img src={MainImage} alt="Main"/>
                </div>
            </div>
        </div>
    );
}

export default Banner;
