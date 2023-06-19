import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import WhyWe from "./components/WhyWe/WhyWe";
import Item_1 from "./item_1.png";
import Item_2 from "./item_2.png";
import Item_3 from "./item_3.png";
import Item_4 from "./item_4.png";
import Item_5 from "./item_5.png";
import BasicServices from "./BasicServices.png";
import MyJobs_1 from "./MyJobs/MyJobs_1.png";
import MyJobs_2 from "./MyJobs/MyJobs_2.png";
import MyJobs_3 from "./MyJobs/MyJobs_3.png";
import MyJobs_4 from "./MyJobs/MyJobs_4.png";
import MyJobs_5 from "./MyJobs/MyJobs_5.png";
import MyJobs_6 from "./MyJobs/MyJobs_6.png";
import PhoneIcon from "./icons/PhoneIcon.svg";
import MailIcon from "./icons/Mail.svg";
import MarkIcon from "./icons/Mark.svg";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import {InstagramIcon} from "./icons/Instagram";

import './App.scss';

function App() {
    const defaultState = {
        center: [55.751574, 37.573856],
        zoom: 5,
    };

  return (
    <div className="App">
        <Header />
        <div className="content">
            <Banner />
            <div className="container">
                <WhyWe />
            </div>
            <div className="item-container-dark">
                <div className="item">
                    <img src={Item_1} alt="item_1"/>
                    <div className="item-text">
                        <div className="item-text--title">Бесплатная консультация</div>
                        <div className="item-text--description">
                            Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться используют потому.  Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться используют потому.
                        </div>
                    </div>
                </div>
            </div>

            <div className="item-container">
                <div className="item">
                    <div className="item-text">
                        <div className="item-text--title">Виниры на зубы</div>
                        <div className="item-text--description">
                            Это небольшие накладки, которые, благодаря множеству преимуществ, широко
                            распространены в эстетической стоматологии. В стоматологии известно два вида виниров.
                        </div>
                        <ul>
                            <li>
                                Керамические или E-Max. Они изготавливаются непрямым методом в лабораторных условиях, затем крепятся специальным цементом, который надёжно фиксирует каждый винир.
                            </li>
                            <li>
                                Второй вид виниров – люминиры (рефракторные виниры). Они представляют собой ультратонкие пластинки, которые изготавливаются по особой технологии из сверхпрочного фарфора.
                            </li>
                        </ul>
                    </div>
                    <img src={Item_2} alt="item_1"/>
                </div>
            </div>

            <div className="item-container">
                <div className="item types-of-prosthetics">
                    <img src={Item_3} alt="item_3"/>
                    <div className="item-text">
                        <div className="item-text--title">виды протезирования</div>
                        <div className="item-text--paragraph">
                            Давайте разберем по порядку:
                        </div>
                        <div className="item-text--description">
                            И так, что же такое коронка? Это «колпачок», который мы надеваем на разрушенный зуб и тем
                            самым восстанавливаем его стетический вид и сохраняем жевательную функцию. Так же коронки
                            бывают на имплантах, когда после установки импланта или ,другими словами, искусственного
                            корня зуба, мы устанавливаем коронковую часть. И бывают конструкции, где мы можем
                            восполнить зубной рядом, такие конструкции называют –мостовидные.

                        </div>
                    </div>
                </div>
            </div>

            <div className="item-container">
                <div className="item">
                    <div className="item-text">
                        <div className="item-text--title">Коронки</div>
                        <div className="item-text--description">
                            Поговорим о тех коронках, которые сейчас наиболее популярные:
                        </div>
                        <ul>
                            <li>
                                Гиппоалергенны и полностью биосовместимы.
                            </li>
                            <li>
                                Высокая прочность коронок и при этом незначительная масса позволяют снизить нагрузку на зуб.
                            </li>
                            <li>
                                За счет отсутствия металлического карскаса возможно добиться высоких эстетических показателей.
                            </li>
                        </ul>
                        <div className="item-text--description">
                            Металлокерамические коронки наиболее распространенные в современной стоматологии. Они состоят из металлического каркаса, как правило это кобальт хром (Cocr), и уже сверху наносится керамическая масса, которая идентична по цвету к своим зубам.
                        </div>
                    </div>
                    <img src={Item_4} alt="item_1"/>
                </div>
            </div>

            <div className="item-container">
                <div className="item types-of-prosthetics">
                    <img src={Item_5} alt="item_5"/>
                    <div className="item-text">
                        <div className="item-text--title">Коронки на импланты</div>
                        <div className="item-text--description">
                            Коронки на импланты, они так же могут быть циркониевыми или металлокерамическими.
                        </div>
                        <div className="item-text--description">
                            Основное различие в протезицировании имплантов заключается в способе фиксации:
                        </div>
                        <ul>
                            <li>
                                Цементная фиксация. При таком виде фиксации коронка фиксируется с помощью стоматологического цемента.
                            </li>
                            <li>
                                Второй вид фиксации коронок на импланты-винтовая фиксация. Наиболее распространенная в
                                современной стоматологии. Благодаря винтовой фиксации при необходимости диагностического
                                осмотра можно будет без последствий и без повреждения импланта коронку «снять».
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="basic-services-container" id="offers">
                <div className="item">
                    <div className="item-text">
                        <div className="item-text--title">Основные Услуги</div>
                    </div>
                    <div className="basic-services-wrapper">
                        <div className="basic-services-item">
                            <img src={BasicServices} alt="BasicServices"/>
                            <div className="basic-services-item--text">
                                Не съёмное протезирование (виниры, коронки)
                            </div>
                        </div>
                        <div className="basic-services-item">
                            <img src={BasicServices} alt="BasicServices"/>
                            <div className="basic-services-item--text">
                                Съёмное протезирование
                            </div>
                        </div>
                        <div className="basic-services-item">
                            <img src={BasicServices} alt="BasicServices"/>
                            <div className="basic-services-item--text">
                                Протезирование на имплантах
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-jobs--container" id="jobs">
                <div className="item">
                    <div className="item-text">
                        <div className="item-text--title">Мои работы</div>
                    </div>
                </div>
                <div className="my-jobs">
                    <div className="my-jobs--item">
                        <img src={MyJobs_1} alt="MyJobs_1"/>
                    </div>
                    <div className="my-jobs--item">
                        <img src={MyJobs_2} alt="MyJobs_2"/>
                    </div>
                    <div className="my-jobs--item">
                        <img src={MyJobs_3} alt="MyJobs_1"/>
                    </div>
                    <div className="my-jobs--item">
                        <img src={MyJobs_4} alt="MyJobs_1"/>
                    </div>
                    <div className="my-jobs--item">
                        <img src={MyJobs_5} alt="MyJobs_1"/>
                    </div>
                    <div className="my-jobs--item">
                        <img src={MyJobs_6} alt="MyJobs_1"/>
                    </div>
                </div>
            </div>

            <div className="my-jobs--container">
                <div className="item">
                    <div className="item-text">
                        <div className="item-text--title">Где нас найти</div>
                    </div>
                </div>
                <div className="my-jobs--map">
                    <YMaps >
                        <Map defaultState={defaultState} width='100%' height={592}>
                            <Placemark geometry={[55.684758, 37.738521]} />
                        </Map>
                    </YMaps>
                </div>
            </div>

            <div className="footer" id="contacts">
                <div className="footer-container">
                    <div className="footer-container--contacts">
                        <div className="footer-container--contacts-item">
                            <div className="footer-container--contacts-item--header">
                                Часы работы
                            </div>
                            <div className="footer-container--contacts-item--text">
                                <span>Понедельник - Пятница</span>
                                <span>10:00 - 21:00</span>
                            </div>
                            <div className="footer-container--contacts-item--text">
                                <span>Суббота - Воскресенье</span>
                                <span>10:00 - 18:00</span>
                            </div>
                        </div>
                        <div className="footer-container--contacts-item">
                            <div className="footer-container--contacts-item--header">
                                Контакты
                            </div>
                            <div className="footer-container--contacts-item--text">
                                <img src={PhoneIcon} alt=""/>+7 (916) 209 09 97
                            </div>
                            <div className="footer-container--contacts-item--text">
                                <img src={MailIcon} alt=""/>mamikonsayadyan@gmail.com
                            </div>
                            <div className="footer-container--contacts-item--text">
                                <img src={MarkIcon} alt=""/>mamikonsayadyan@gmail.com
                            </div>
                        </div>
                        <div className="footer-container--contacts-item">
                            <div className="footer-container--contacts-item--header">Подпишитесь на меня</div>
                            <div className="footer-container--contacts-item--text">
                                <div className="footer-container--contacts-item--social-icon">
                                    <InstagramIcon />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="footer-container--corp">
                        © 2022 - made with love
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
