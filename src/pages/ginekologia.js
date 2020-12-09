import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Header from '../components/HeaderGeneric'
import Nav from '../components/NavGeneric'
import { Waypoint } from 'react-waypoint'
import administrator from '../assets/images/administrator.jpg';

import offer04 from '../assets/images/4.jpg';
import offer01 from '../assets/images/1.jpg';
import offer03 from '../assets/images/3.jpg';



class Generic extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {

    return (
      <Layout>
        <Helmet>
        <title>Гинеколог в Чите - Ваш Доктор, Гемотест Чита</title>
        <meta name="yandex-verification" content="2c6b2cd549700b18" />
        <meta name="description" content="Боли внизу живота? Консультация гинеколога Чита. Ваш Доктор - официальный партнер лаборатории Гемотест в Чите."></meta>
        </Helmet>
        <Header/>
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav}/>

        <div id="main">
          <section id="content" className="main">
          <header class="major">
            <h2>Гинеколог в Чите</h2>
          </header>
            <p>Женщинам в любом возрасте может понадобиться консультация гинеколога. Даже в случае, если нет причин для беспокойства, следует проводить осмотр минимум раз в год. Лучшим временем для посещения специалиста станут первые дни после менструации.
            <br/>
            Однако в случае возникновения неудобств следует срочно обратиться ко врачу. Наиболее удобным для этого способом является запись к гинекологу через интернет. Вся процедура занимает несколько минут, и совершить ее можно в любом удобном для Вас месте.
            <br/>
            </p>
            <header class="major">
            <h2>АКЦИЯ!</h2>
            <h3>Прием (осмотр и консультация) врача акушера-гинеколога первичный + проведение УЗИ определения беременности 1900 рублей (вместо 2330 рублей)</h3>
            </header>
            <a href="https://www.doctor-chita.ru/contactform/" target="_blank">
            <img src={offer01} alt="Ваш + Доктор | Гинеколог" width="100%"/>
            </a>
            
            
            <header class="major">
            <h2>АКЦИЯ!</h2>
            <h3>Прием (осмотр и консультация) врача акушера-гинеколога при планировании беременности + УЗИ за 1900 рублей (вместо 2330 рублей)</h3>
            </header>
            <a href="https://www.doctor-chita.ru/contactform/" target="_blank">
            <img src={offer04} alt="Ваш + Доктор | Гинеколог" width="100%"/>
            </a>
            

            <header class="major">
            <h2>АКЦИЯ!</h2>
            <h3>ЭхоКГ плода во время беременности — 1500 р (вместо 2000 р)</h3>
            </header>
            <a href="https://www.doctor-chita.ru/contactform/" target="_blank">
            <img src={offer03} alt="Ваш + Доктор | Гинеколог" width="100%"/>
            </a>
            
            <p>
           Наиболее частой причиной обращения к гинекологу являются боли внизу живота. Существует масса причин их возникновения, которые могут условно разделяться на 2 группы: органические и функциональные. К первому типу относятся:
            <ul>
	            <li>Киста, апоплексия или перекрут ножки кисты яичника.</li>
	            <li>Наличие доброкачественных опухолей на наружных половых органах.</li>
	            <li>Острая патология хирургического характера или патологическое заболевание мочевыделительной системы.</li>
            </ul>
            </p>
            Помимо этого, к органическим причинам можно отнести использование внутриматочных спиралей, а также различные состояния женщины, которые могут быть связаны с беременностью. Функциональными же причинами могут стать:

            <ul>
              <li>Нарушение менструального цикла.</li>
              <li>Предменструальный синдром, влекущий за собой вегето-сосудистое расстройство и повышенную чувствительность нервной системы.</li>
              <li>Воспалительные процессы в матке.</li>
            </ul>

            <div id="Layout" className="main" className="table-wrapper">
            <table>
								<thead>
									<tr>
                    <th>Цена</th>
                    <th>Наименование</th>
                    <th>Артикул</th>										
									</tr>
								</thead>
								<tbody>
                <tr>
                    <td>1500₽</td>
                    <td>Ультразвуковое исследование в I триместре беременности (с 10 по 13 недели беременности)</td>
                    <td>А04.30.001.13</td>
									</tr>
                  <tr>
                    <td>1650₽</td>
                    <td>Ультразвуковое исследование во II триместре беременности (с 14 по 27 недели беременности)</td>
                    <td>А04.30.001.14</td>
									</tr>
                  <tr>
                    <td>1800₽</td>
                    <td>Ультразвуковое исследование в III триместре беременности</td>
                    <td>А04.30.001.15</td>
									</tr>
                  <tr>
                    <td>1500₽</td>
                    <td>Прием (осмотр, консультация) врача-акушера-гинеколога беременной первичный</td>
                    <td>B01.001.003.GIN</td>
									</tr>
                  <tr>
                    <td>1000₽</td>
                    <td>Прием (осмотр, консультация) врача-акушера-гинеколога беременной повторный</td>
                    <td>B01.001.005</td>
									</tr>
                  <tr>
                    <td>850₽</td>
                    <td>Прием (осмотр, консультация) врача-акушера-гинеколога первичный</td>
                    <td>B01.001.001.GIN</td>
									</tr>
                  <tr>
                    <td>600₽</td>
                    <td>Прием (осмотр, консультация) врача-акушера-гинеколога повторный</td>
                    <td>B01.001.002.GIN</td>
									</tr>
                  <tr>
                    <td>800₽ (600₽ + 200₽)</td>
                    <td>Аппаратная кольпоскопия с выдачей результата на бумажном/цифровом носителе + Установка Шиллер-Теста</td>
                    <td>A03.20.001.GIN</td>
									</tr>
                  <tr>
                    <td>2000₽</td>
                    <td>Биопсия</td>
                    <td>A11.20.011.GIN</td>
									</tr>
                  <tr>
                    <td>200₽</td>
                    <td>Постановка Шиллер-теста</td>
                    <td>A02.20.001.001.GIN</td>
									</tr>
                  <tr>
                    <td>1000₽</td>
                    <td>Вскрытие кисты шейки матки ("наботовой кисты") (1 единица)</td>
                    <td>A16.20.036.005.GIN</td>
									</tr>
                  <tr>
                    <td>1000₽</td>
                    <td>Удаление кисты шейки матки (“наботовой кисты“) (1 единица)</td>
                    <td>A16.20.036.006.GIN</td>
									</tr>
                  <tr>
                    <td>1500₽</td>
                    <td>Удаление контагиозного моллюска, остроконечных кондилом (генитальных бородавок), папиллом половых органов любой локализации, аппаратным  методом (1 единица)</td>
                    <td>A14.20.003.002.GIN</td>
									</tr>
                  <tr>
                    <td colspan="3" align="center"><strong>Лечение инфекционно-воспалительных заболеваний (акушер-гинеколог)</strong></td>
									</tr>
                  <tr>
                    <td>1000₽</td>
                    <td>Лечение эрозии шейки матки химическим препаратом "Солковагин" (1 сеанс)</td>
                    <td>A14.20.003.001.GIN</td>
									</tr>
                  <tr>
                    <td>1000₽</td>
                    <td>Медикаментозное лечение молочницы "Гинофортом" (1 сеанс)</td>
                    <td>A11.20.024.002.GIN</td>
									</tr>
                  <tr>
                    <td>500₽</td>
                    <td>Послеоперационная обработка шейки матки, влагалища антибактериальными препаратами</td>
                    <td>A11.20.024.001.GIN</td>
									</tr>
                  <tr>
                    <td>500₽</td>
                    <td>Анестезия (обкалывание) шейки матки или влагалища</td>
                    <td>B01.003.004.005.GIN</td>
									</tr>
                  <tr>
                    <td>1000₽</td>
                    <td>Введение внутриматочной спирали (без стоимости ВМС)</td>
                    <td>A11.20.014.GIN</td>
									</tr>
                  <tr>
                    <td>1500₽</td>
                    <td>Массаж при заболеваниях женских половых органов (1 сеанс)</td>
                    <td>A21.20.001.GIN</td>
									</tr>
                  <tr>
                    <td>300₽</td>
                    <td>Медикаментозная обработка вульвы, влагалища, шейки матки (ванночки, аппликация, суппозитории)</td>
                    <td>A11.20.024.GIN</td>
									</tr>
                  <tr>
                    <td>500₽</td>
                    <td>Постановка / удаление влагалищного кольца (без стоимости кольца)</td>
                    <td>A14.20.002.GIN</td>
									</tr>
                  <tr>
                    <td>500₽</td>
                    <td>Постановка / удаление контрацептивного кольца (без стоимости кольца)</td>
                    <td>A14.20.002.001.GIN</td>
									</tr>
                  <tr>
                    <td>500₽</td>
                    <td>Спринцевание влагалища</td>
                    <td>A14.20.001.GIN</td>
									</tr>
                  <tr>
                    <td>300₽</td>
                    <td>Тампонирование лечебное влагалища (без стоимости лекарственных препаратов)</td>
                    <td>A11.20.013.GIN</td>
									</tr>
                  <tr>
                    <td>1000₽</td>
                    <td>Удаление внутриматочной спирали</td>
                    <td>A11.20.015.GIN</td>
									</tr>
                  <tr>
                    <td>500₽</td>
                    <td>Удаление инородных тел из влагалища</td>
                    <td>A16.20.059.GIN</td>
									</tr>
                  <tr>
                    <td>4500₽</td>
                    <td>Электровагинальная эксцизия шейки матки</td>
                    <td>A18.20.021.GIN</td>
									</tr>
                  <tr>
                    <td>3500₽</td>
                    <td>РВ коагуляция шейки матки</td>
                    <td>A18.20.054.GIN</td>
									</tr>
                </tbody>
							</table>
              </div>

            <h3>Почему стоит обратиться в нашу клинику</h3>
            <p>
            Посещение платного гинеколога в современных реалиях является одним из лучших решений для женщин и девушек, которым необходима срочная помощь. Специалисты нашего центра смогут провести внимательный осмотр и правильно соберут биоматериал для отправки на исследование. А для установления наиболее точного диагноза будет проведено гинекологическое УЗИ.<br />
            За более, чем десятилетний период работы наши специалисты смогли выявить несколько причин, по которым женщины чаще всего обращаются за помощью к гинекологу. Среди них встречаются как симптомы болезней, так и простые походы для проведения консультаций.
            </p>

            <img src={administrator} alt="Ваш + Доктор | Гинеколог" width="80%"/>

            <li>Боли внизу живота</li> 
            Это наиболее частая жалоба. Такие симптомы могут быть вызваны целым рядом заболеваний: от воспаления женских органов или миомы матки, вплоть до онкологий органов малого таза или внематочной беременности.<br />
            В нашем центре для выявления конкретного диагноза производится целый ряд диагностических процедур, в том числе и гинекологическое УЗИ. Это позволяет выделить точную причину недомогания и быстро начать лечение. 
            <br /><br />
            <li>Дискомфорт во влагалище</li>
            Не менее редко женщин беспокоит дискомфорт во влагалище, который может иметь разные характеры: от простого зуда до раздражения и неприятного запаха. Причиной тому могут стать воспалительные процессы или полипы, а также киста влагалища.
            <br />Так же, как и при болях в животе, нашими специалистами проводится комплекс мер, позволяющих установить точный диагноз, после чего начинается нужное лечение.
            <br /><br />
            <li>Нарушение менструального цикла</li>
            Нарушения менструального цикла могут носить различный характер. Встречаются наблюдения увеличения цикла до 35 дней и снижения до 21. При некоторых заболеваниях месячные могут отсутствовать длительный период или же иметь хаотичный порядок. Могут отмечаться мажущие выделения кровянистого или темно-коричневого оттенка. Также нарушением считаются и обильные месячные, при которых приходится менять средства гигиены более 5 раз в сутки.
            <br />
            Для установления диагноза наши специалисты проведут полную диагностику, включающую гормональные анализы, а также ультразвуковое исследование. На основании полученных результатов врач установит причины нарушения менструального цикла и назначит необходимое лечение.
            <br /><br />
            <li>Советы по контрацепции</li>
            Помимо различных симптомов заболеваний, походы к гинекологу могут носить и консультационный характер. Так, многие обращаются за помощью при выборе способов контрацепции. Консультация специалиста, а также проведение различных диагностик позволит установить наиболее безопасные для обоих партнеров способы предотвращения зачатия.
            <br /><br />
            <li>Планирование беременности</li>
            При обращении во время планирования беременности наши специалисты проводят стандартное обследование, по завершению которого могут назначаться дополнительные анализы и процедуры. Существуют определенные сроки планирования беременности:
                <ol>
                  <li>Если у партнеров активная половая жизнь, то беременность может наступить в период до 6 месяцев.</li>
                  <li>Если за полугодовалый период зачатие не произошло, то проводится более глубокое обследование.</li>
                  <li>При отсутствии беременности более года может быть установлен диагноз бесплодия. Также могут проводиться обследования на совместимость партнеров, а, при необходимости, и лапароскопия.</li>
                </ol>
            <li>Ультразвуковое сканирование</li>
            УЗИ, или ультразвуковое исследование ― это одна из наиболее важных диагностических процедур, которая может помочь в установлении точного диагноза и при наблюдении за состоянием здоровья пациентки. Наши специалисты смогут провести качественное УЗИ для того, чтобы помочь Вам:
                <ol>
                  <li>При выявлении причин болей внизу живота или чрезмерного кровотечения в период менструации.</li>
                  <li>При подборе контрацептических средств.</li>
                  <li>В планировании будущей беременности.</li>
                </ol>
            <li>Интимный филлинг</li>
            Современное оборудование и наличие специалистов в нашей клинике позволяет Вам получить качественные услуги по интимной пластике, или филлингу. Данные манипуляции обладают несколькими преимуществами:
                <ol>
                  <li>Физиологичность. В филлерах содержится гиалуроновая кислота, которая является естественным компонентом соединительных тканей. Ее широко используют для контурной пластики инъекционного типа.</li>
                  <li>Нетравматичность. Перед манипуляцией производится обезболивание за счет специального крема. Осуществление инъекций производится за счет микроиглы, которая вводится на минимальную глубину (до 5 мм).</li>
                  <li>Быстрый результат. Вы сможете проследить хорошие результаты сразу после окончания манипуляции. Благодаря инъекциям кожа станет снова подтянутой, увлажненной и гладкой. Такой эффект сможет продлиться от 6 месяцев до одного года.</li>
                </ol>
            <li>Другие причины обращения к гинекологу</li>
            Помимо перечисленных, существует еще целый ряд причин, при которых девушки стараются побыстрее попасть к специалисту, в чем им часто помогают платные гинекологи. Причиной тому могут стать симптомы миомы матки или воспалительные заболевания женских органов. В любом случае, наши специалисты готовы принять пациенток и помочь им в решении возникших проблем.    
            <br /><br />
            Перед проведением данных услуг врачи нашего центра проведут комплексное обследование, которое позволит исключить наличие воспалительных и инфекционных заболеваний.
            Ультразвуковая диагностика позволит быстро выявить признаки миомы, кисты яичника или внематочную беременность. При этом, для ее проведения не требуется специальной подготовки, а само обследование является полностью безболезненным для пациентки.
            <br /><br />
            
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic