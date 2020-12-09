import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Nav from '../components/NavGeneric'
import { Waypoint } from 'react-waypoint'
import Header from '../components/HeaderGeneric'


import offer01 from '../assets/images/1.png';
import offer02 from '../assets/images/2.png';
import offer03 from '../assets/images/3.png';
import offer04 from '../assets/images/4.png';
import offer05 from '../assets/images/5.png';


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
        <title>УЗИ В Чите - Ваш Доктор, Гемотест Чита</title>
        <meta name="yandex-verification" content="2c6b2cd549700b18" />
        <meta name="description" content="Где сделать УЗИ Чита? Ваш Доктор - официальный партнер лаборатории Гемотест в Чите."></meta>
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
            <h2>УЗИ в Чите</h2>
            </header>
            <h2>Все виды ультразвуковой диагностики</h2>
            <p>Выявить причину и назначить лечение поможет оборудование экспертного класса и расшифровка от опытных специалистов!</p>
            <br/>
            
            
            <header class="major">
            <h2>АКЦИЯ!</h2>
            <h3>УЗИ молочных желез с цветным доплеровским картированием + УЗИ щитовидной железы 990 рублей (вместо 1510 рублей)</h3>
            </header>
            <a href="https://www.doctor-chita.ru/contactform/" target="_blank">
            <img src={offer02} alt="Ваш + Доктор | Гинеколог" width="100%"/>
            </a>
            
            
            
            
            <header class="major">
            <h2>АКЦИЯ!</h2>
            <h3>Прием (осмотр и консультация) врача акушера-гинеколога первичный + проведение УЗИ определения беременности 1900 рублей (вместо 2330 рублей)</h3>
            </header>
            <a href="https://www.doctor-chita.ru/contactform/" target="_blank">
            <img src={offer01} alt="Ваш + Доктор | Гинеколог" width="100%"/>
            </a>
            


            <header class="major">
            <h2>АКЦИЯ!</h2>
            <h3>Прием (осмотр и консультация) врача акушера-гинеколога первичный + проведение УЗИ матки и придатков трансвагинального за 1175 рублей (вместо 1500 рублей)</h3>
            </header>
            <a href="https://www.doctor-chita.ru/contactform/" target="_blank">
            <img src={offer05} alt="Ваш + Доктор | Гинеколог" width="100%"/>
            </a>
            


            <header class="major">
            <h2>АКЦИЯ!</h2>
            <h3>Прием (осмотр и консультация) врача акушера-гинеколога при планировании беременности + УЗИ за 1900 рублей (вместо 2330 рублей)</h3>
            </header>
            <a href="https://www.doctor-chita.ru/contactform/" target="_blank">
            <img src={offer04} alt="Ваш + Доктор | Гинеколог" width="100%"/>
            </a>
            
            
      
            <p>Ультразвуковое исследование является одним из наиболее популярных и эффективных методов современной диагностики. С помощью УЗИ можно определить болезни внутренних органов, наличие новообразований, воспалений и других нарушений на различных стадиях. Клиника состоит из профессиональных врачей, которые производят сверхточную и тщательную процедуру исследования. Каждый специалист клиники имеет соответствующую квалификацию, что гарантирует высокие результаты ультразвуковой диагностики. Также, наши доктора в ходе УЗИ применяют только передовое оборудование. Наши специалисты используют инновационный УЗИ-сканер экспертного класса Philips HD 11 XE. «RoyalPhilips», голландский производитель УЗИ-сканера, занимает лидирующую позицию в производстве медицинских приборов, способных улучшить качество жизни людей.</p>
            <p>
              Основными достоинствами сканера Philips HD 11 XE являются:
            <ul>
              <li>Полностью цифровое формирование луча;</li>
              <li>ЖК-монитор высокого разрешения;</li>
              <li>Возможность 2D, 3D и 4D режимов сканирования;</li>
              <li>Современная технология FetalEchoSTIC для изучения сердца плода;</li>
              <li>Панорамное сканирование;</li>
              <li>Функция латерального усиления;</li>
            </ul>
            </p>
            <div className="table-wrapper">
            <table>
								<thead>
									<tr>
                    <th>Цена</th>
										<th>Услуга</th>
                    <th>Артикул</th>
									</tr>
								</thead>
								<tbody>
                
                <tr>
                    <td>2000₽</td>
										<td>ЭхоКГ плода</td>
                    <td></td>
									</tr>
                  <tr>
                    <td>830₽</td>
										<td>Ранняя  диагностика беременности</td>
                    <td>А04.30.001.17</td>
									</tr>
                  <tr>
                    <td>680₽</td>
										<td>Допплерометрия сосудов матки и плода (с 20 недели беременности)</td>
                    <td>A04.30.001.16</td>
									</tr>
                  <tr>
                    <td>680₽</td>
										<td>УЗИ молочных желез с регионарными лимфоузлами с цветовым допплеровским картированием</td>
                    <td>А04.20.002.02</td>
									</tr>
                  <tr>
                    <td>1500₽</td>
										<td>Ультразвуковое исследование в I триместре беременности (с 10 по 13 недели беременности)</td>
                    <td>A04.30.001.13</td>
									</tr>
                  <tr>
                    <td>1650₽</td>
										<td>Ультразвуковое исследование в II триместре беременности  (с 14 по 27 недели беременности)</td>
                    <td>A04.30.001.14</td>
									</tr>
                  <tr>
                    <td>1800₽</td>
										<td>Ультразвуковое исследование в III триместре беременности</td>
                    <td>A04.30.001.15</td>
									</tr>
                  <tr>
                    <td>700₽</td>
										<td>Ультразвуковое исследование матки и придатков трансабдоминальное</td>
                    <td>A04.20.001</td>
									</tr>
                  <tr>
                    <td>1400₽</td>
										<td>Ультразвуковое исследование матки и придатков трансабдоминальное  и трансвагинальное</td>
                    <td>A04.20.001.001.03</td>
									</tr>
                  <tr>
                    <td>850₽</td>
										<td>Ультразвуковое исследование матки и придатков трансвагинальное</td>
                    <td>A04.20.001.001</td>
									</tr>
                  <tr>
                    <td>500₽</td>
										<td>Ультразвуковое исследование молочных желез с регионарными лимфоузлами</td>
                    <td>А04.20.002.002.2</td>
									</tr>
                  <tr>
                    <td>1000₽</td>
										<td>Ультразвуковое исследование плода с записью на DVD</td>
                    <td>А04.30.001.09</td>
									</tr>
                  <tr>
                    <td>950₽</td>
										<td>Ультразвуковое исследование фолликулогенеза(фолликулометрия)</td>
                    <td>A04.20.003</td>
									</tr>
                  <tr>
                    <td>550₽</td>
										<td>Цервикометрия</td>
                    <td>А04.20.001.001.07</td>
									</tr>
                  <tr>
                    <td colspan="3" align="center">УЗИ желез</td>
									</tr>
                  <tr>
                    <td>600₽</td>
										<td>Ультразвуковое исследование щитовидной железы</td>
                    <td>A04.22.001.001</td>
									</tr>
                  <tr>
                    <td>600₽</td>
										<td>Ультразвуковое исследование слюнных желез</td>
                    <td>A04.07.002</td>
									</tr>
                  <tr>
                    <td>300₽</td>
										<td>Ультразвуковое исследование паращитовидных желез</td>
                    <td>A04.22.003</td>
									</tr>
                  <tr>
                    <td colspan="3" align="center">Органы брюшной полости</td>
									</tr>
                  <tr>
                    <td>800₽</td>
										<td>Ультразвуковое исследование органов брюшной полости (комплексное) (печень, желчный пузырь, поджелудочная железа, селезенка)</td>
                    <td>А04.16.001.03</td>
									</tr>
                  <tr>
                    <td>300₽</td>
										<td>Ультразвуковое исследование печени</td>
                    <td>A04.14.001</td>
									</tr>
                  <tr>
                    <td>200₽</td>
										<td>Ультразвуковое исследование поджелудочной железы</td>
                    <td>A04.15.001</td>
									</tr>
                  <tr>
                    <td>200₽</td>
										<td>Ультразвуковое исследование селезенки</td>
                    <td>A04.06.001</td>
									</tr>
                  <tr>
                    <td>400₽</td>
										<td>Ультразвуковое исследование желчного пузыря</td>
                    <td>A04.14.002</td>
									</tr>
                  <tr>
                    <td>300₽</td>
										<td>Дуплексное сканирование сосудов печени</td>
                    <td>A04.12.012</td>
									</tr>
                  <tr>
                    <td colspan="3" align="center">Прочие УЗИ</td>
									</tr>
                  <tr>
                    <td>800₽</td>
										<td>Ультразвуковое исследование крупных суставов (2 одноименных сустава)</td>
                    <td>A04.04.001.1</td>
									</tr>
                  <tr>
                    <td>700₽</td>
										<td>Ультразвуковое исследование мягких тканей (патологические элементы кожи, подкожной клетчатки, мышц)</td>
                    <td>A04.01.001</td>
									</tr>
                  <tr>
                    <td>300₽</td>
										<td>Ультразвуковое исследование плевральной полости</td>
                    <td>A04.09.001</td>
									</tr>
                  <tr>
                    <td>400₽</td>
										<td>Ультразвуковое исследование регионарных лимфатических узлов (1область)</td>
                    <td>A04.06.002</td>
									</tr>
                  <tr>
                    <td>1500₽</td>
										<td>Ультразвуковое исследование тазобедренных суставов (2 сустава)</td>
                    <td>A04.04.001.2</td>
									</tr>
                  <tr>
                    <td colspan="3" align="center">Сердечно-сосудистая система</td>
									</tr>
                  <tr>
                    <td>480₽</td>
										<td>Дуплексное сканирование артерий верхних конечностей</td>
                    <td>A04.12.005.002</td>
									</tr>
                  <tr>
                    <td>500₽</td>
										<td>Дуплексное сканирование артерий нижних конечностей</td>
                    <td>A04.12.006.001</td>
									</tr>
                  <tr>
                    <td>500₽</td>
										<td>Дуплексное сканирование вен верхних конечностей</td>
                    <td>A04.12.005.004</td>
									</tr>
                  <tr>
                    <td>2000₽</td>
										<td>Дуплексное сканирование вен нижних конечностей</td>
                    <td>A04.12.006.002</td>
									</tr>
                  <tr>
                    <td>1000₽</td>
										<td>Дуплексное сканирование сосудов (артерий и вен) верхних конечностей</td>
                    <td>A04.12.005</td>
									</tr>
                  <tr>
                    <td>1000₽</td>
										<td>Дуплексное сканирование сосудов (артерий и вен) нижних конечностей</td>
                    <td>A04.12.006</td>
									</tr>
                  <tr>
                    <td>650₽</td>
										<td>Ультразвуковое исследование брюшного отдела аорты</td>
                    <td>A04.12.003.1</td>
									</tr>
                  <tr>
                    <td>1100₽</td>
										<td>Эхокардиография</td>
                    <td>A04.10.002</td>
									</tr>
                  <tr>
                    <td>950₽</td>
										<td>Дуплексное (триплексное) сканирование сосудов головы и шеи</td>
                    <td></td>
									</tr>
                  <tr>
                    <td colspan="3" align="center">Урология-андрология</td>
									</tr>
                  <tr>
                    <td>800₽</td>
										<td>Дуплексное сканирование артерий почек</td>
                    <td>A04.12.001.002</td>
									</tr>
                  <tr>
                    <td>300₽</td>
										<td>Ультразвуковое исследование мочевого пузыря с определением остаточной мочи</td>
                    <td>A04.28.002.005</td>
									</tr>
                  <tr>
                    <td>450₽</td>
										<td>Ультразвуковое исследование мочевыводящих путей</td>
                    <td>A04.28.002</td>
									</tr>
                  <tr>
                    <td>150₽</td>
										<td>Ультразвуковое исследование надпочечников</td>
                    <td>A04.22.002</td>
									</tr>
                  <tr>
                    <td>650₽</td>
										<td>Ультразвуковое исследование органов мошонки</td>
                    <td>A04.28.003</td>
									</tr>
                  <tr>
                    <td>750₽</td>
										<td>Ультразвуковое исследование органов мошонки и полового члена</td>
                    <td>A04.28.003.001</td>
									</tr>
                  <tr>
                    <td>300₽</td>
										<td>Ультразвуковое исследование почек</td>
                    <td>A04.28.002.001</td>
									</tr>
                  <tr>
                    <td>450₽</td>
										<td>Ультразвуковое исследование почек и надпочечников</td>
                    <td>A04.28.001</td>
									</tr>
                  <tr>
                    <td>850₽</td>
										<td>Ультразвуковое исследование предстательной железы (с определением остаточной мочи) трансабдоминально</td>
                    <td>A04.21.001</td>
									</tr>
                  <tr>
                    <td>1000₽</td>
										<td>Ультразвуковое исследование предстательной железы (с определением остаточной мочи) трансабдоминально и трансректально (ТРУЗИ)</td>
                    <td>А04.21.001.001.04</td>
									</tr>
                  <tr>
                    <td colspan="3" align="center">Опорно – Двигательная система</td>
									</tr>
                  <tr>
                    <td>1200₽</td>
										<td>Ультразвуковое исследование плечевых суставов</td>
                    <td>1</td>
									</tr>
                  <tr>
                    <td>1200₽</td>
										<td>Ультразвуковое исследование локтевых суставов</td>
                    <td>2</td>
									</tr>
                  <tr>
                    <td>1200₽</td>
										<td>Ультразвуковое исследование кисти</td>
                    <td>3</td>
									</tr>
                  <tr>
                    <td>1200₽</td>
										<td>Ультразвуковое исследование тазобедренных суставов</td>
                    <td>4</td>
									</tr>
                  <tr>
                    <td>1200₽</td>
										<td>Ультразвуковое исследование коленных суставов</td>
                    <td>5</td>
									</tr>
                  <tr>
                    <td>1200₽</td>
										<td>Ультразвуковое исследование голеностопных суставов</td>
                    <td>6</td>
									</tr>
                  <tr>
                    <td>1200₽</td>
										<td>Ультразвуковое исследование стопы</td>
                    <td>7</td>
									</tr>
								</tbody>
							</table>
						</div>
            </section>
            </div>
      </Layout>
      
    )
  }
}

export default Generic