import React from 'react';
import "./Main.css"

const Main = () => {
    return (
        <div className="content">
            <div className="content_inner">
                <div className="content__items right">
                    <p className="content__items__text__manual">Зарабатывайте больше</p>
                    <p className="content__items__text__grdt">с WELBEX</p>
                    <p className="content__items__text__default">Развиваем и контролируем продажи за вас</p>
                </div>
                <div className="content__items left">
                    <div className="content__items__left__text__header">
                        <p className="content__items__left__text__header__text">
                            Вместе с <span className="content__items__left__text__header__text__grdt" >
                            БЕСПЛАТНОЙ</span><span className="content__items__left__text__header__text__grdt" > КОНСУЛЬТАЦИЕЙ
                        </span> мы дарим
                        </p>
                    </div>
                    <div className="content__items__left__text__header__inner">
                        <div className="content__items__left__text__header__items">
                           <div className="content__items__left__text__header__item">
                               <p className="content__items__left__text__header__item__header">ВИДЖЕТЫ</p>
                               <p className="content__items__left__text__header__item__text">
                                   30 готовых решений
                               </p>
                           </div>
                            <div className="content__items__left__text__header__item">
                               <p className="content__items__left__text__header__item__header">Skype Аудит</p>
                               <p className="content__items__left__text__header__item__text">
                                   отдела продаж и CRM системы
                               </p>
                           </div>
                        </div>
                        <div className="content__items__left__text__header__items">
                            <div className="content__items__left__text__header__item">
                                <p className="content__items__left__text__header__item__header">Dashboard</p>
                                <p className="content__items__left__text__header__item__text">
                                    с показателями
                                    вашего бизнеса
                                </p>
                            </div>
                            <div className="content__items__left__text__header__item">
                                <p className="content__items__left__text__header__item__header">35 дней</p>
                                <p className="content__items__left__text__header__item__text">
                                    использования CRM
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="content__inner__btn">
                        <button className="content__btn">Получить консультацию</button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Main;