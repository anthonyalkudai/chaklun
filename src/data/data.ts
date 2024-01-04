import {IBlog} from "../types/types";
import giftFromFriendsPreview from 'assets/images/blog/podarok_ot_druzey.jpg'
import ryibalskiy_bayraktar_1 from 'assets/images/blog/ryibalskiy_bayraktar_1.jpg'
import ryibalskiy_bayraktar_2 from 'assets/images/blog/ryibalskiy_bayraktar_2.jpg'
import ryibalskiy_bayraktar_3 from 'assets/images/blog/ryibalskiy_bayraktar_3.jpg'
import ryibalskiy_bayraktar_4 from 'assets/images/blog/ryibalskiy_bayraktar_4.jpg'
import ryibalskiy_bayraktar_5 from 'assets/images/blog/ryibalskiy_bayraktar_5.jpg'

export const blogs: IBlog[] = [
    {
        author: 'admin',
        category: 'Блог',
        date: '08 листопада 2022',
        views: 683,
        preview: '',
        title: '2 УКРАЇНСЬКІ БЕЗПІЛОТНИКИ ДЛЯ УКРАЇНСЬКОЇ АЕРОРОЗВІДКИ!',
        body: '2 радіокеровані комплекси БпАК "Чаклун" вартістю 900 000 гривень для Аеророзвідка "Карлсон" днями придбано завдяки Біржа Благодійності «ДоброДій»',
        additionalBody: '2 радіокеровані комплекси БпАК "Чаклун" вартістю 900 000 гривень для Аеророзвідка "Карлсон" днями придбано завдяки Біржа Благодійності «ДоброДій»\n' +
            '\n' +
            'спільно з партнерами Конкорд Банк / Concord bank та Concord Fintech Solutions та передано підрозділу. Цей безпілотник вже встиг неодноразово дуже добре зарекомендувати себе у повітряному фронті!\n' +
            '\n' +
            'Серед його опцій:\n' +
            '➡️ аерозйомка та аерофотографія місцевості з прив\'язкою координат;\n' +
            '➡️ проведення спостережних та розвідувальних місій;\n' +
            '➡️ швидкість: 80 км/год (мах 130 км/год);\n' +
            '➡️ час перебування у повітрі – 60 хв. (гарантовано).\n' +
            '\n' +
            '✅ Комплектація цієї пташки порівнюється з БПЛА вищого класу, які за вартістю значно перевищують вартість «Чаклуна». Але вітчизняне “крило” ані трохи не поступається якістю світовим аналогам. Та найприємніше - те, що створений цей комплекс українськими авіаконструкторами у космічній столиці України, в Дніпрі.\n' +
            '\n' +
            'Комплекс складається з:\n' +
            '🛫 радіокерований літак 2 шт;\n' +
            '🎮 пульт керування;\n' +
            '💻 наземна станція (ноутбук).',
    },
    {
        author: 'admin',
        category: 'Блог',
        date: '12 листопада 2022',
        views: 683,
        preview: giftFromFriendsPreview,
        title: 'Подарунок від наших друзів',
        additionalBody: 'Подарунок від наших друзів, працюючих на лівому березі.\n' +
            '\n' +
            'Наш Чаклун розвідав. Дуже важлива ціль вражена. І це вдячність наших бійців за красиву роботу. А влучна робота завжди красива!!! 🧙🧙🧙💪🏻💪🏻💪🏻\n' +
            '\n' +
            'Дякуємо нашим захисникам!!!🇺🇦🇺🇦🇺🇦',
        body: 'Подарунок від наших друзів, працюючих на лівому березі.',
    },
    {
        author: 'admin',
        category: 'Блог',
        date: '29 листопада 2022',
        views: 683,
        preview: [ryibalskiy_bayraktar_1, ryibalskiy_bayraktar_2, ryibalskiy_bayraktar_3, ryibalskiy_bayraktar_4, ryibalskiy_bayraktar_5],
        title: 'Цікавий фітбек від волонетра Сергія Іволгіна',
        body: '«Звісно ми не просто зібрали разом з вами гроші і віддали пташок працювати заради нашої перемоги...',
        additionalBody: '«Звісно ми не просто зібрали разом з вами гроші і віддали пташок працювати заради нашої перемоги...\n' +
            '\n' +
            'Хочеться волати - Ось на ту штуку я скинув, хочеться фітбек, і він є!!! Різний, але справжній. На днях ми ледь не втратили 2 пташки разом з ССО на Донецькому напрямку, але у режимі ручного керування повернули їх з відстані 5км під ворожим вогнем. Інша пташка загубилася втративши точку "дім", але її знайшли та повернули наші бійці завдяки доказам, що ця пташка саме наша, наліпки на корпусі зробили своє призначення. Один робочий день розвідки одного літачка окуповує себе у більше, ніж 20 разів. На даний момент з 4-х придбаних вами комлексів втрачен усього один літак, інші працюють вже майже місяць.\n' +
            '\n' +
            'Дякуємо за плідну співпрацю! Є над чим працювати разом!'
    },
]