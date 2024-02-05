import React, {useState} from 'react';
import '../../styles/MainWorkerSheet/MainPanel.css'
import NewsPanel from "./NewsPanel";
import GreedPanel from "./GreedPanel";

const MainPanel = () => {
    const [news, setPosts] = useState([
        {
            id: 1,
            tittle: "<b>Акция</b> \"Лучшее для ваших рук и ногтей!\" (01.09.2023 - 01.10.2023)",
            text: "<p>Специальное предложение: <b>\"Бриллиантовый маникюр\"</b> за полцены! Ощутите роскошь и\n" +
                "блеск с блестящим маникюром, выполненным нашими опытными мастерами.</p>\n" +
                "<p>Приглашаем наших клиентов на <b>сеанс ультразвукового ухода за кожей рук в подарок после\n" +
                "любого маникюрного обслуживания!</b> Дарите вашим рукам нежность и заботу, чтобы они\n" +
                "всегда оставались ухоженными.</p>",
            link: "#"
        },
        {
            id: 2,
            tittle: "<b>Новость</b> (01.08.2023)",
            text: "<p>Мы постоянно стремимся предложить нашим клиентам уникальный и разнообразный опыт ухода за" +
                "ногтями и кожей рук. Поэтому рады сообщить о расширении нашего спектра услуг. В" +
                "ближайшее время, мы планируем внедрить новые методики маникюра, которые помогут" +
                "удовлетворить запросы самых взыскательных клиентов.</p>",
            link: "#"
        },
        {
            id: 3,
            tittle: "<b>Новость2</b> (01.08.2023)",
            text: "<p>Мы постоянно стремимся предложить нашим клиентам уникальный и разнообразный опыт ухода за" +
                "ногтями и кожей рук. Поэтому рады сообщить о расширении нашего спектра услуг. В" +
                "ближайшее время, мы планируем внедрить новые методики маникюра, которые помогут" +
                "удовлетворить запросы самых взыскательных клиентов.</p>",
            link: "#"
        }
    ])
    const [septemberPay, setSeptemberPay] = useState([
        {id: 1, link: "#", color: "None", date: "1"},
        {id: 2, link: "#", color: "None", date: "2"},
        {id: 3, link: "#", color: "Blue", date: "3"},
        {id: 4, link: "#", color: "Blue", date: "4"},
        {id: 5, link: "#", color: "None", date: "5"},
        {id: 6, link: "#", color: "None", date: "6"},
        {id: 7, link: "#", color: "Blue", date: "7"},
        {id: 8, link: "#", color: "Blue", date: "8"},
        {id: 9, link: "#", color: "None", date: "9"},
        {id: 10, link: "#", color: "None", date: "10"},
        {id: 11, link: "#", color: "Blue", date: "11"},
        {id: 12, link: "#", color: "Blue", date: "12"},
        {id: 13, link: "#", color: "None", date: "13"},
        {id: 14, link: "#", color: "None", date: "14"},
        {id: 15, link: "#", color: "Blue", date: "15"},
        {id: 16, link: "#", color: "Blue", date: "16"},
        {id: 17, link: "#", color: "None", date: "17"},
        {id: 18, link: "#", color: "None", date: "18"},
        {id: 19, link: "#", color: "Blue", date: "19"},
        {id: 20, link: "#", color: "Blue", date: "20"},
        {id: 21, link: "#", color: "None", date: "21"},
        {id: 22, link: "#", color: "None", date: "22"},
        {id: 23, link: "#", color: "Blue", date: "23"},
        {id: 24, link: "#", color: "Blue", date: "24"},
        {id: 25, link: "#", color: "None", date: "25"},
        {id: 26, link: "#", color: "None", date: "26"},
        {id: 27, link: "#", color: "Blue", date: "27"},
        {id: 28, link: "#", color: "Blue", date: "28"},
        {id: 29, link: "#", color: "None", date: "29"},
        {id: 30, link: "#", color: "None", date: "30"},

    ])
    const [octoberPay, setOctoberPay] = useState([
        {id: 1, link: "#", color: "Blue", date: "1"},
        {id: 2, link: "#", color: "Blue", date: "2"},
        {id: 3, link: "#", color: "None", date: "3"},
        {id: 4, link: "#", color: "None", date: "4"},
        {id: 5, link: "#", color: "Blue", date: "5"},
        {id: 6, link: "#", color: "Blue", date: "6"},
        {id: 7, link: "#", color: "None", date: "7"},
        {id: 8, link: "#", color: "None", date: "8"},
        {id: 9, link: "#", color: "Blue", date: "9"},
        {id: 10, link: "#", color: "Blue", date: "10"},
        {id: 11, link: "#", color: "None", date: "11"},
        {id: 12, link: "#", color: "None", date: "12"},
        {id: 13, link: "#", color: "Blue", date: "13"},
        {id: 14, link: "#", color: "Blue", date: "14"},
        {id: 15, link: "#", color: "None", date: "15"},
        {id: 16, link: "#", color: "None", date: "16"},
        {id: 17, link: "#", color: "Blue", date: "17"},
        {id: 18, link: "#", color: "Blue", date: "18"},
        {id: 19, link: "#", color: "None", date: "19"},
        {id: 20, link: "#", color: "None", date: "20"},
        {id: 21, link: "#", color: "Blue", date: "21"},
        {id: 22, link: "#", color: "Blue", date: "22"},
        {id: 23, link: "#", color: "None", date: "23"},
        {id: 24, link: "#", color: "None", date: "24"},
        {id: 25, link: "#", color: "Blue", date: "25"},
        {id: 26, link: "#", color: "Blue", date: "26"},
        {id: 27, link: "#", color: "None", date: "27"},
        {id: 28, link: "#", color: "None", date: "28"},
        {id: 29, link: "#", color: "Blue", date: "29"},
        {id: 30, link: "#", color: "Blue", date: "30"},
        {id: 31, link: "#", color: "None", date: "31"},
    ])
    const [novemberPay, setNovemberPay] = useState([
        {id: 1, link: "#", color: "None", date: "1"},
        {id: 2, link: "#", color: "Blue", date: "2"},
        {id: 3, link: "#", color: "Blue", date: "3"},
        {id: 4, link: "#", color: "None", date: "4"},
        {id: 5, link: "#", color: "None", date: "5"},
        {id: 6, link: "#", color: "Blue", date: "6"},
        {id: 7, link: "#", color: "Blue", date: "7"},
        {id: 8, link: "#", color: "None", date: "8"},
        {id: 9, link: "#", color: "None", date: "9"},
        {id: 10, link: "#", color: "Blue", date: "10"},
        {id: 11, link: "#", color: "Blue", date: "11"},
        {id: 12, link: "#", color: "None", date: "12"},
        {id: 13, link: "#", color: "None", date: "13"},
        {id: 14, link: "#", color: "Blue", date: "14"},
        {id: 15, link: "#", color: "Blue", date: "15"},
        {id: 16, link: "#", color: "None", date: "16"},
        {id: 17, link: "#", color: "None", date: "17"},
        {id: 18, link: "#", color: "Blue", date: "18"},
        {id: 19, link: "#", color: "Blue", date: "19"},
        {id: 20, link: "#", color: "None", date: "20"},
        {id: 21, link: "#", color: "None", date: "21"},
        {id: 22, link: "#", color: "Blue", date: "22"},
        {id: 23, link: "#", color: "Blue", date: "23"},
        {id: 24, link: "#", color: "None", date: "24"},
        {id: 25, link: "#", color: "None", date: "25"},
        {id: 26, link: "#", color: "Blue", date: "26"},
        {id: 27, link: "#", color: "Blue", date: "27"},
        {id: 28, link: "#", color: "None", date: "28"},
        {id: 29, link: "#", color: "None", date: "29"},
        {id: 30, link: "#", color: "Blue", date: "30"},
        {id: 31, link: "#", color: "Blue", date: "31"},
    ])
    const [septemberSch, setSeptemberSch] = useState([
        {id: 1, link: "#", color: "Gray", date: "1"},
        {id: 2, link: "#", color: "Gray", date: "2"},
        {id: 3, link: "#", color: "Blue", date: "3"},
        {id: 4, link: "#", color: "Blue", date: "4"},
        {id: 5, link: "#", color: "Red", date: "5"},
        {id: 6, link: "#", color: "Red", date: "6"},
        {id: 7, link: "#", color: "Blue", date: "7"},
        {id: 8, link: "#", color: "Blue", date: "8"},
        {id: 9, link: "#", color: "Red", date: "9"},
        {id: 10, link: "#", color: "Red", date: "10"},
        {id: 11, link: "#", color: "Blue", date: "11"},
        {id: 12, link: "#", color: "Blue", date: "12"},
        {id: 13, link: "#", color: "Red", date: "13"},
        {id: 14, link: "#", color: "Red", date: "14"},
        {id: 15, link: "#", color: "Blue", date: "15"},
        {id: 16, link: "#", color: "Blue", date: "16"},
        {id: 17, link: "#", color: "Orange", date: "17"},
        {id: 18, link: "#", color: "Red", date: "18"},
        {id: 19, link: "#", color: "Blue", date: "19"},
        {id: 20, link: "#", color: "Blue", date: "20"},
        {id: 21, link: "#", color: "Red", date: "21"},
        {id: 22, link: "#", color: "Orange", date: "22"},
        {id: 23, link: "#", color: "Blue", date: "23"},
        {id: 24, link: "#", color: "Blue", date: "24"},
        {id: 25, link: "#", color: "Yellow", date: "25"},
        {id: 26, link: "#", color: "Orange", date: "26"},
        {id: 27, link: "#", color: "Blue", date: "27"},
        {id: 28, link: "#", color: "Blue", date: "28"},
        {id: 29, link: "#", color: "Yellow", date: "29"},
        {id: 30, link: "#", color: "Orange", date: "30"},

    ])
    const [octoberSch, setOctoberSch] = useState([
        {id: 1, link: "#", color: "Blue", date: "1"},
        {id: 2, link: "#", color: "Blue", date: "2"},
        {id: 3, link: "#", color: "Orange", date: "3"},
        {id: 4, link: "#", color: "Orange", date: "4"},
        {id: 5, link: "#", color: "Blue", date: "5"},
        {id: 6, link: "#", color: "Blue", date: "6"},
        {id: 7, link: "#", color: "Orange", date: "7"},
        {id: 8, link: "#", color: "Yellow", date: "8"},
        {id: 9, link: "#", color: "Blue", date: "9"},
        {id: 10, link: "#", color: "Blue", date: "10"},
        {id: 11, link: "#", color: "Yellow", date: "11"},
        {id: 12, link: "#", color: "Orange", date: "12"},
        {id: 13, link: "#", color: "Blue", date: "13"},
        {id: 14, link: "#", color: "Blue", date: "14"},
        {id: 15, link: "#", color: "Yellow", date: "15"},
        {id: 16, link: "#", color: "Orange", date: "16"},
        {id: 17, link: "#", color: "Blue", date: "17"},
        {id: 18, link: "#", color: "Blue", date: "18"},
        {id: 19, link: "#", color: "Yellow", date: "19"},
        {id: 20, link: "#", color: "Yellow", date: "20"},
        {id: 21, link: "#", color: "Blue", date: "21"},
        {id: 22, link: "#", color: "Blue", date: "22"},
        {id: 23, link: "#", color: "Green", date: "23"},
        {id: 24, link: "#", color: "Yellow", date: "24"},
        {id: 25, link: "#", color: "Blue", date: "25"},
        {id: 26, link: "#", color: "Blue", date: "26"},
        {id: 27, link: "#", color: "Yellow", date: "27"},
        {id: 28, link: "#", color: "Green", date: "28"},
        {id: 29, link: "#", color: "Blue", date: "29"},
        {id: 30, link: "#", color: "Blue", date: "30"},
        {id: 31, link: "#", color: "Yellow", date: "31"},
    ])
    const [novemberSch, setNovemberSch] = useState([
        {id: 1, link: "#", color: "Green", date: "1"},
        {id: 2, link: "#", color: "Blue", date: "2"},
        {id: 3, link: "#", color: "Blue", date: "3"},
        {id: 4, link: "#", color: "Yellow", date: "4"},
        {id: 5, link: "#", color: "Green", date: "5"},
        {id: 6, link: "#", color: "Blue", date: "6"},
        {id: 7, link: "#", color: "Blue", date: "7"},
        {id: 8, link: "#", color: "Yellow", date: "8"},
        {id: 9, link: "#", color: "Green", date: "9"},
        {id: 10, link: "#", color: "Blue", date: "10"},
        {id: 11, link: "#", color: "Blue", date: "11"},
        {id: 12, link: "#", color: "Yellow", date: "12"},
        {id: 13, link: "#", color: "Green", date: "13"},
        {id: 14, link: "#", color: "Blue", date: "14"},
        {id: 15, link: "#", color: "Blue", date: "15"},
        {id: 16, link: "#", color: "Yellow", date: "16"},
        {id: 17, link: "#", color: "Green", date: "17"},
        {id: 18, link: "#", color: "Blue", date: "18"},
        {id: 19, link: "#", color: "Blue", date: "19"},
        {id: 20, link: "#", color: "Yellow", date: "20"},
        {id: 21, link: "#", color: "Green", date: "21"},
        {id: 22, link: "#", color: "Blue", date: "22"},
        {id: 23, link: "#", color: "Blue", date: "23"},
        {id: 24, link: "#", color: "Green", date: "24"},
        {id: 25, link: "#", color: "Green", date: "25"},
        {id: 26, link: "#", color: "Blue", date: "26"},
        {id: 27, link: "#", color: "Blue", date: "27"},
        {id: 28, link: "#", color: "Green", date: "28"},
        {id: 29, link: "#", color: "Green", date: "29"},
        {id: 30, link: "#", color: "Blue", date: "30"},
        {id: 31, link: "#", color: "Blue", date: "31"},
    ])
    const [payment, setPayment] = useState([
        {id: 1, name: "Сентябрь", total: "65000", date: septemberPay},
        {id: 2, name: "Октярь", total: "75000", date: octoberPay},
        {id: 3, name: "Ноябрь", total: "85000", date: novemberPay},
    ])
    const [schedule, setSchedule] = useState([
        {id: 1, name: "Сентябрь", total: "", date: septemberSch},
        {id: 2, name: "Октярь", total: "", date: octoberSch},
        {id: 3, name: "Ноябрь", total: "", date: novemberSch},
    ])
    return (
        <div className="MainPanel">
            <NewsPanel posts={news} tittle={"Новости"}/>
            <GreedPanel posts={payment} tittle={"Оплата"}/>
            <GreedPanel posts={schedule} tittle={"Расписание"}/>
        </div>
    );
};

export default MainPanel;