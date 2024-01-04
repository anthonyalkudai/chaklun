import React, {ReactNode} from "react";
import Advantage from "../../Advantage/Advantage";
import c from "../AdvantagesSection.module.scss";
import airplane from "../../../assets/images/home/advantages/plane.png";
import reb from 'assets/images/home/advantages/reb.png'
import lock from 'assets/images/home/advantages/lock.png'
import gear from 'assets/images/home/advantages/shesterni.png'
import costs from 'assets/images/home/advantages/costs.png'
import suitcase from 'assets/images/home/advantages/suitcase.png'
import thumbup from 'assets/images/home/advantages/good.png'
import crystal from 'assets/images/home/advantages/gem.png'
import map from 'assets/images/home/advantages/map1.png'
import feather from 'assets/images/home/advantages/pero.png'

const advantages: ReactNode[] = [
    <Advantage
        className={c.advantage}
        title={'МАЛА ЗЛІТНА ВАГА'}
        pictureSrc={feather}
        description={'Вага готового до польоту спорядженого планера "Чаклун" в базовій представленій комплектації - 2,2 кг. З використанням додаткових приладів, максимально можлива вага - до 4 кг.'}
    />,
    <Advantage
        className={c.advantage}
        title={'ВЕЛИКА ТРИВАЛІСТЬ ТА ДАЛЬНІСТЬ ПОЛЬОТУ'}
        pictureSrc={airplane}
        description={'Тривалість польоту безпілотника "Чаклун" складає від однієї години (довжина маршруту до 120 км). Це результат, який у два-три рази перевищує можливості будь-якого квадрокоптеру.'}
    />,
    <Advantage
        className={c.advantage}
        title={'ПРОТИДІЯ ЗРЕБ'}
        pictureSrc={reb}
        description={'Після відправлення на місію оператор на пульті керування контролює відповідність маршруту завданій місії. У разі виявлення ознак спуфінгу оператор має можливість коригувати поточний курс. А у разі втрати сигналу GPS літак, незважаючи на це, продовжує виконувати завдану місію.'}
    />,
    <Advantage
        className={c.advantage}
        title={'ФУНКЦІОНАЛ ТА СИСТЕМИ ЗАХИСТУ'}
        pictureSrc={lock}
        description={'Безпілотник "Чаклун" має функціонал та системи захисту подібні до тих, якими оснащені безпілотники з вартістю в десятки-сотні раз вищою. І це вже перевірено на практиці.'}
    />,
    <Advantage
        className={c.advantage}
        title={'ВЛАСНЕ ВИРОБНИЦТВО'}
        pictureSrc={gear}
        description={'Завдяки тому, що БпЛА "Чаклун" виробляється в Україні, є можливість проводити оперативний капітальний ремонт (заміну окремих елементів конструкції або перенесення вцілілого оснащення в новий.)'}
    />,
    <Advantage
        className={c.advantage}
        title={'НЕВЕЛИКА ВАРТІСТЬ'}
        pictureSrc={costs}
        description={'Порівняно з аналогами, вартість одного зібраного та налаштованого безпілотника Чаклун – невисока. Тобто, ЗСУ можуть отримати більше безпілотників за менші гроші.'}
    />,
    <Advantage
        className={c.advantage}
        title={'КОМПАКТНІСТЬ ТА ТРАНСПОРТУВАННЯ'}
        pictureSrc={suitcase}
        description={'Планер "Чаклун" може транспортуватися як в розібраному, так і в зібраному вигляді. Завдяки розмаху крил всього 1400 мм - це можливо у будь-якому транспортному засобі.'}
    />,
    <Advantage
        className={c.advantage}
        title={'ПРОСТЕ ПОВОДЖЕННЯ'}
        pictureSrc={thumbup}
        description={'Легко навчитись керувати "Чаклуном", адже в нього: зліт "з руки", виконання маршруту в автоматичному режимі, посадка в ручному режимі за літаковим принципом з системою стабілізації.'}
    />,
    <Advantage
        className={c.advantage}
        title={'ЗНОСОСТІЙКІСТЬ'}
        pictureSrc={crystal}
        description={'Матеріал планера є міцним і водночас достатньо еластичним. Це робить його ремонтопридатним у польових умовах. '}
    />,
    <Advantage
        className={c.advantage}
        title={'ЗАХИСТ ОПЕРАТОРА БпЛА.'}
        pictureSrc={map}
        description={'Можливість запрограмувати "Чаклуну" точку повернення на будь-якій відстані від вихідної точки, в яку оператор переміститься за час виконання місії БпЛА.'}
    />,
]

export default advantages;