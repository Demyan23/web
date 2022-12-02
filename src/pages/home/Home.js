import React, { useState } from "react";
import "./home.css";
import homePageApteka from "./../../assets/icons/home-page-apteka.svg";
import firstVaccine from "./../../assets/icons/pfizer.jpg";
import secondVaccine from "./../../assets/icons/astrazeneca.jpg";
import thirdVaccine from "./../../assets/icons/moderna.jpg";
import panaceja from "./../../assets/icons/panaceja.webp";

function Home() {
    const [show, setShow] = useState(false)
    return (
        <main>
            <section className="hero">
                <img src={homePageApteka} />
                <div className="hero-text">
                    <h1>Ми <span className="orange">допомагаємо знайти </span>більш вигідні пропозиції та
                        <span className="orange"> забронювати товари </span>за зниженою ціною в аптеках,
                        ближчих до вас</h1>
                    <p>Можна не бігати по аптеках у пошуку всіх необхідних товарів, а знайти їх і забронювати
                        на сайті, щоб потім забрати у зручний час у найближчій аптеці поруч із домом чи по
                        дорозі на роботу, заощаджуючи свій час і гроші. На цьому сайті ви також знайдете довідкову
                        інформацію з лікарських засобів (інструкції, аналоги, браковані серії препаратів тощо),
                        актуальні дані про наявність медикаментів і ціни на них в аптеках України.</p>
                    <h2>Tabletki.ua (таблетки юа) - пошук ліків в аптеках</h2>
                </div>
                <p>Реклама</p>
            </section>
            <section className="drugs">
                <div className="first-drug">
                    <img src={firstVaccine} />
                    <h2>Pfizer</h2>
                    <p>Комірнаті, кодова назва BNT162b2, вакцина Pfizer та BioNTech, — вакцина проти
                        COVID-19, розроблена німецькою компанією BioNTech у співпраці з Pfizer. Вводиться
                        внутрішньом'язово. Це РНК-вакцина, що кодує мутовану форму білка-шипа вірусу
                        SARS-CoV-2, інкапсульованого в наночастинки ліпідів.</p>
                </div>
                <div className="second-drug">
                    <img src={secondVaccine} />
                    <h2>Astrazeneca</h2>
                    <p>Вакцина AstraZeneca проти COVID-19, також відома як вакцина Oxford–AstraZeneca,
                        CoviShield (Ковішелд)— вакцина проти COVID-19, розроблена Оксфордським університетом
                        та AstraZeneca, яка є вектором на основі модифікованого аденовірусу шимпанзе ChAdOx1
                        та вводиться внутрішньом'язово.</p>
                </div>
                <div className="third-drug">
                    <img src={thirdVaccine} />
                    <h2>Moderna</h2>
                    <p>Вакцина Moderna проти COVID‑19, кодова назва mRNA-1273 і продається
                        під торговою маркою Spikevax, — вакцина проти COVID-19, розроблена компанією Moderna,
                        американськими Національним інститутом інфекційних захворювань. Вона
                        дозволена для використання для людей у віці 12 років і старше в деяких країнах</p>
                </div>
            </section>
            {show && <div className="awards">
                <img src={panaceja} />
                <div className="awards-block">
                    <div className="awards-text">
                        <h1>Нагороди</h1>
                        <p>Tabletki.ua став переможцем XXI конкурсу професіоналів фармацевтичної галузі України
                            «Панацея - 2020» у номінації «Ресурс з пошуку і замовлення лікарських засобів».
                            <a href="https://panaceja.ua/">
                                <span> Детальніше</span></a></p>
                    </div>
                </div>
            </div>}
            <button className="view-more" onClick={() => setShow(!show)}>View more</button>
        </main>
    );
}

export default Home;