import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

const PricesTabs = props => (

      <Tabs defaultTab="horizontal-tab-one" horizontal>
        <section id="first" className="main special">
        <TabList>
          <Tab class="tab" tabFor="horizontal-tab-one">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Гинекология&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Tab>
          <Tab class="tab" tabFor="horizontal-tab-six">&nbsp;Процедуры и манипуляции&nbsp;&nbsp;&nbsp;</Tab>
          <Tab class="tab" tabFor="horizontal-tab-two">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          УЗИ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Tab>
          <Tab class="tab" tabFor="horizontal-tab-three">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Эндокринология&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Tab>
          <Tab class="tab" tabFor="horizontal-tab-four">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Заключение экспертов&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Tab>
          <Tab class="tab" tabFor="horizontal-tab-five">Комплексные обследования&nbsp;</Tab>
        </TabList>
        </section>
        <TabPanel tabId="horizontal-tab-five">
        <br/>
        <div className="table-wrapper">
        <h2>Комплексные Чек-Ап обследования</h2>
        <p>
        Комплексные Чек-Ап обследования помогают исключить или своевременно обнаружить незаметно протекающие опасные заболевания. Данный вид диагностики включает в себя множество лабораторных тестов, анализ сердечной деятельности, ультразвуковую и рентгенологическую диагностику внутренних органов.
        </p>
              <table>
								<thead>
									<tr>
                    <th>Цена</th>
                    <th>Название комплекса</th>
										<th>Какие анализы включены</th>	
									</tr>
								</thead>
								<tbody>
                  <tr>
                    <td>750₽</td>
                    <td>Скрининг сердечно-сосудистой системы. Кардиопрогноз.</td>
										<td> 
                        <li>Холестерол общий</li>
                        <li>ЛПВП (липопротеины высокой плотности)</li>
                        <li>ЛПНП (липопротеины низкой плотности)</li>
                        <li>С-реактивный белок</li>
                        <li>УЗИ сердца</li>
                    </td>
									</tr>
                  <tr>
                    <td>1460₽</td>
                    <td>Скрининг функции щитовидной железы</td>
										<td>
                    <li>Тиреотропный гормон (ТТГ)</li>
                    <li>Свободный тироксин (Т4 свободный)</li>
                    <li>УЗИ щитовидной железы</li>
                    </td>
									</tr><tr>
                    <td>570₽</td>
                    <td>Скрининг функции почек</td>
										<td>
                    <li>Общий анализ мочи</li>
                    <li>Уровень мочевины в крови</li>
                    <li>Уровень креатинина в крови</li>
                    <li>Скорость клубочковой фильтрации (СКФ)</li>
                    <li>УЗИ почек</li>
                    </td>
									</tr><tr>
                    <td>790₽</td>
                    <td>Скрининг функции печени и поджелудочной железы</td>
										<td>
                    <li>АЛТ</li>
                    <li>Гамма-ГТ</li>
                    <li>Уровень общего билирубина</li>
                    <li>Липаза</li>
                    <li>Амилаза общая</li>
                    <li>УЗИ печени</li>
                    <li>УЗИ поджелудочной железы</li>
                    </td>
									</tr><tr>
                    <td>1390₽</td>
                    <td>Профилактическое обследование онкологии для женщин</td>
										<td>
                    <li>Анализ крови на РЭА(раковый эмбриональный антиген)</li>
                    <li>СА 125 (женский онкомаркер на малый таз)</li>
                    <li>СА 15-3 (онкомаркер молочных желез,женский)</li>
                    <li>УЗИ малого таза</li>
                    </td>
									</tr><tr>
                    <td>810₽</td>
                    <td>Профилактическое обследование онкологии для мужчин</td>
										<td>
                    <li>ПСА общий (Показывает наличие или отсутствие клеток, подозрительных на злокачественные в малом тазу)</li>
                    <li>Анализ крови на РЭА (раковый эмбриональный антиген)</li>
                    <li>УЗИ малого таза</li>
                    </td>
									</tr>
                  <tr>
                    <td>4910₽</td>
                    <td>Планирование беременности <br /> <strong>TORCH – инфекции</strong> - это группа внутриутробных инфекций, которыми плод может заразится во время беременности или при прохождении родовых путей</td>
										<td>
                    <li>Токсоплазменная инфекция (Toxoplasma)</li>
                    <li>Краснуха(Rubella)</li>
                    <li>Цитогмегаловирус (Cytomegalovirus)</li>
                    <li>Вирус простого герпеса 1,2 типов (Herpes)</li>
                    </td>
									</tr>                          
                  <tr>
                    <td>3550₽</td>
                    <td>Планирование беременности <br /> Цервикальный скрининг, ИППП (прегравидарная подготовка)</td>
										<td>
                    <li>Микоплазма гениталиум (мазок)</li>
                    <li>Нейсерия гонореи</li>
                    <li>Трихомонас вагиналис</li>
                    <li>Хламидия трахоматис</li>
                    <li>Гинекологический мазок на флору</li>
                    <li>ВПЧ Типы 16,18,31,33,35,39,45,51,52,56,58,59 (Метод Real- time)</li>
                    <li>Цитологическое исследование соскобов шейки матки и цервикального канала методом жидкостной цитологии</li>
                    </td>
									</tr>
                  <tr>
                    <td>1670₽</td>
                    <td>Исследование микрофлоры урогенитального тракта у женщин 16 показателей</td>
										<td>
                    <li>Оценка качества взятия биоматериала</li>
                    <li>Общая бактериальная масса</li>
                    <li>Лактобактерии количественно</li>
                    <li>Суммарные энтеробактерии</li>
                    <li>Стрептококки</li>
                    <li>Стафилококки</li>
                    <li>Гарднерелла вагиналис + Превотелла бивиа</li>
                    <li>Порфиромонас</li>
                    <li>Эубактерии</li>
                    <li>Снеатия + Лептотрихия + Фузобактерии</li>
                    <li>Мегасфера + Вейлонелла + Диалистер</li>
                    <li>Лакнобактерии + Клостридии</li>
                    <li>Мобилункус + Коринебактерии</li>
                    <li>Пептострептококки</li>
                    <li>Атопобиум вагиналис</li>
                    <li>Микоплазма хоминис + Микоплазма гениталиум</li>
                    <li>Уреаплазма уреалитикум + Уреаплазма парвум</li>
                    <li>Кандида</li>
                    </td>
									</tr>
                  
                </tbody>
							</table>
        </div>
        </TabPanel>
        <TabPanel tabId="horizontal-tab-two">
        <br/>
        <div className="table-wrapper">
        <h2>Ультразвуковое сканирование</h2>
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
                    <td>850₽</td>
										<td>Ультразвуковое исследование в I триместре беременности (с 10 по 13 недели беременности)</td>
                    <td>A04.30.001.13</td>
									</tr>
                  <tr>
                    <td>1000₽</td>
										<td>Ультразвуковое исследование в II триместре беременности  (с 14 по 27 недели беременности)</td>
                    <td>A04.30.001.14</td>
									</tr>
                  <tr>
                    <td>1200₽</td>
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
        </TabPanel>
        <TabPanel tabId="horizontal-tab-three">
        <br/>
        <div className="table-wrapper">
        <h2>Что делать при нарушении менструального цикла, гормональных сбоях в организме?</h2>
        <p>Одним из критериев женского здоровья является стабильный менструальный цикл. Но его нарушения, к сожалению, не редкость. Единичные сбои могут быть обусловлены общим заболеванием, стрессом и другими транзиторными факторами. Если нарушение менструального цикла носит постоянный характер, нужно пройти обследование у гинеколога.</p>
              <table>
								<thead>
									<tr>
                    <th>Цена</th>
                    <th>Название анализа</th>
										<th>Для чего необходимо его сдавать</th>
										
									</tr>
								</thead>
								<tbody>
									<tr>
                    <td>270₽</td>
                    <td>ЛГ (лютеинизирующий гормон)</td>
										<td>Гонадотропный гормон передней доли гипофиза,
                       который стимулирует секрецию половых гормонов, эстрогенов и прогестерона</td>
                    
									</tr>
                  <tr>
                  <td>270₽</td>
                    <td>Эстрадиол</td>
										<td>Эстрогенный стероидный гормон , который играет важную роль в формировании и функционировании половой системы</td>
                    
									</tr>
                  <tr>
                  <td>270₽</td>
                    <td>ФСГ (фолликулостимулирующий гормон)</td>
										<td>Гликопротеиновый гормон передней доли гипофиза , который влияет на функцию половых желез</td>
                    
									</tr>
                  <tr>
                  <td>270₽</td>
                    <td>Пролактин</td>
										<td>Гормон, контролирующий метаболизм, а так же процессы роста и развития организма. Так же он тормозит секрецию ФСГ, обеспечивая нормальный менструальный цикл</td>
                    
									</tr>
                  <tr>
                  <td>290₽</td>
                    <td>Прогестерон</td>
										<td>Это стероидный гормон, основной функцией которого является подготовка организма женщины к беременности. Он вырабатывается желтым телом яичников</td>
                    
									</tr>
                  <tr>
                  <td>290₽</td>
                    <td>Тестостерон</td>
										<td>Это стероидный гормон из группы андрогенов, отвечающий за формирование вторичных половых признаков и половую функцию.</td>
                    
									</tr>
                  <tr>
                  <td>430₽</td>
                    <td>17- ОПГ</td>
										<td>Гормон, продуцирующийся надпочечниками, участвует в метаболизме, поддержании кровяного давления и регуляции иммунной системы</td>
                    
									</tr>
                  <tr>
                  <td>430₽</td>
                    <td>ДЭА-сульфат (Дегидроэпиандростерон-сульфат</td>
										<td>Андроген, мужской половой гормон, который присутствует в крови как у мужчин, так и у женщин. Он играет важную роль в развитии вторичных мужских половых признаков при половом созревании и может преобразовываться в тестостерон и эстрадиол. ДЭА-SO4 вырабатывается корой надпочечников, его производство контролируется адренокортикотропным гормоном (АКТГ).</td>
                    
									</tr>
                  <tr>
                  <td>270₽</td>
                    <td>ТТГ(Тиреотропный гормон)</td>
										<td>Основной регулятор функции щитовидной железы, синтезирующийся гипофизом.Основная его функция – поддерживать постоянную концентрацию гормонов щитовидной железы – тиреоидных гормонов, которые регулируют процессы образования энергии в организме. Когда их содержание в крови понижается, гипоталамус высвобождает гормон, стимулирующий секрецию ТТГ гипофизом.</td>
                    
									</tr>
                  <tr>
                  <td>270₽</td>
                    <td>Т4 свободный</td>
										<td>Один из двух главных гормонов щитовидной железы, основной функцией которого является регуляция энергетического и пластического обмена в организме. Свободный тироксин – биологически активная часть общего тироксина, которая играет важную роль в обмене веществ.</td>
                    
									</tr>
                  <tr>
                  <td>340₽</td>
                    <td>А/т к ТРО</td>
										<td>Антитела к тиреопероксидазе – специфические иммуноглобулины, направленные против фермента, содержащегося в клетках щитовидной железы и отвечающего за образование активной формы йода для синтеза тиреоидных гормонов. Они являются специфичным маркером аутоиммунных заболеваний щитовидной железы.</td>
                    
									</tr>
                </tbody>
							</table>
        <h2>АКЦИЯ 45+ <br />Какие анализы следует сдать при наступлении Климакса?</h2>
        <p>Климакс - естественный биологический период в жизни женщины, который связан с угасанием функции яичников. Клинически проявляется в отсутствии менструаций.</p>      
              <table>
								<thead>
									<tr>
                    <th></th>
                    <th></th>
                  </tr>
                  <td colspan="3" ><strong>Оценивает работу печени</strong></td>
								</thead>
								<tbody>
									<tr>
                    <td>120₽</td>
                    <td>АЛТ</td>
                  </tr>
                  <tr>
                    <td>120₽</td>
                    <td>АСТ</td>
									</tr>
                  <tr>
                    <td>150₽</td>
                    <td>Билирубин</td>
                  </tr>
                  <td colspan="3" ><strong>Выявляет скрытый сахарный диабет</strong></td>
                  <tr>
                    <td>400₽</td>
                    <td>Гликированный гемоглобин</td>
                  </tr>
                  <td colspan="3" ><strong>Профилактика тромбозов (инсульты, инфаркты, ТЭЛА)</strong></td>
                  <tr>
                    <td>150₽</td>
                    <td>Общий холестерин</td>
                  </tr>
                  <td colspan="3" ><strong>Отображают гормональные нарушения, показывают стадию менопаузы</strong></td>
                  <tr>
                    <td>290₽</td>
                    <td>ФСГ</td>
                  </tr>
                  <tr>
                    <td>290₽</td>
                    <td>ЛГ</td>
                  </tr>
                  <tr>
                    <td>270₽</td>
                    <td>Эстрадиол</td>
                  </tr>
                  <tr>
                    <td>270₽</td>
                    <td>Пролактин</td>
                  </tr>
                  <td colspan="3" ><strong>Оценивают работу щитовидной железы</strong></td>
                  <tr>
                    <td>270₽</td>
                    <td>ТТГ</td>
                  </tr>
                  <tr>
                    <td>340₽</td>
                    <td>А/т к ТРО</td>
                  </tr>
                  <tr>
                    <td>270₽</td>
                    <td>Свободный Т4</td>
                  </tr>
                  <td colspan="3" ><strong>Показатели, выражающие протромбиновое время, которое характеризует первую и вторую фазу гемостаза</strong></td>
                  <tr>
                    <td>180₽</td>
                    <td>Протромбин №1, МНО</td>
                   </tr>
                  <td colspan="3" ><strong>Маркер тромбообразования , так как в процессе тромбообразования , запускается и процесс растворения тромбов с образованием D – димеров</strong></td>
                  <tr>
                    <td>780₽</td>
                    <td>D – димер (по показаниям при наличии варикозной болезни, наследственности)</td>
                  </tr>
                  <td colspan="3" ><strong>Белок, вырабатываемый в печени и превращающийся в нерастворимый фибрин – основу сгустка при свертывании крови</strong></td>
                  <tr>
                    <td>160₽</td>
                    <td>Фибриноген</td>
                  </tr>
                  <td colspan="3" ><strong>Активированное частичное тромбопластиновое время, время за которое образуется сгусток</strong></td>
                  <tr>
                    <td>130₽</td>
                    <td>АЧТВ</td>
									</tr>
                </tbody>
							</table>
						
        </div>
        </TabPanel>
        <TabPanel tabId="horizontal-tab-four">
        <br/>
        <div className="table-wrapper">
        <h2>Как получить заключение эксперта? Второе мнение в онкодиагностке.</h2>
              <table>
								<thead>
									<tr>
                    <th>Цена за случай</th>
                    <th>Вид экспертного заявления</th>										
									</tr>
								</thead>
								<tbody>
									<tr>
                    <td>5000₽</td>
                    <td>Пересмотр ГИСТОЛОГИЧЕСКИХ препаратов <strong>врачами Лаборатории Гемотест</strong> методом консилиума (кроме костной ткани, ЦНС, гематологии)</td>
									</tr>
                  <tr>
                    <td>7000₽</td>
                    <td>Пересмотр ГИСТОЛОГИЧЕСКИХ препаратов <strong>ведущими российскими экспертами</strong></td>
									</tr>
                  <tr>
                    <td>12000₽</td>
                    <td>Комплексное иммуногистохимическое исследование биоптатов предстательной железы с оценкой экспрессии AMACR (a-methylacyl-CoA racemase, P504S), цитокератинов высокого молекулярного веса (34bE12), белка p63 (одного блока/столбика)</td>
									</tr>     
                </tbody>
							</table>
						
        </div>
        </TabPanel>
        <TabPanel tabId="horizontal-tab-one">
        <br/>
        <div className="table-wrapper">
        <h2>Гинеколог в Чите</h2>
        <p>Женщинам в любом возрасте может понадобиться консультация гинеколога. Даже в случае, если нет причин для беспокойства, следует проводить осмотр минимум раз в год. Лучшим временем для посещения специалиста станут первые дни после менструации.
        <br />
        Прием ведут специалисты с большим опытом работы, которые постоянно повышают уровень квалификации.
        </p>
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
                    <td>Прием (осмотр, консультация) врача-акушера-гинеколога беременной первичный</td>
                    <td>B01.001.003.GIN</td>
									</tr>
                  <tr>
                    <td>1000₽</td>
                    <td>Прием (осмотр, консультация) врача-акушера-гинеколога беременной повторный</td>
                    <td>B01.001.005</td>
									</tr>
                  <tr>
                    <td>600₽</td>
                    <td>Аппаратная кольпоскопия с выдачей результата на бумажном/цифровом носителе</td>
                    <td>A03.20.001.GIN</td>
									</tr>
                  <tr>
                    <td>750₽</td>
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
                    <td></td>
                    <td>Удаление контагиозного моллюска, остроконечных кондилом (генитальных бородавок), папиллом половых органов любой локализации,  аппаратным  методом</td>
                    <td>A14.20.003.002.GIN</td>
									</tr>
                  <tr>
                    <td colspan="3" align="center">Лечение инфекционно-воспалительных заболеваний (акушер-гинеколог)</td>
									</tr>
                  <tr>
                    <td>800₽</td>
                    <td>Лечение эрозии шейки матки химическим препаратом "Солковагин" (1 сеанс)</td>
                    <td>A14.20.003.001.GIN</td>
									</tr>
                  <tr>
                    <td>650₽</td>
                    <td>Медикаментозное лечение молочницы "Гинофортом" (1 сеанс)</td>
                    <td>A11.20.024.002.GIN</td>
									</tr>
                  <tr>
                    <td>500₽</td>
                    <td>Послеоперационная обработка шейки матки, влагалища антибактериальными препаратами</td>
                    <td>A11.20.024.001.GIN</td>
									</tr>
                  <tr>
                    <td>400₽</td>
                    <td>Анестезия (обкалывание) шейки матки или влагалища</td>
                    <td>B01.003.004.005.GIN</td>
									</tr>
                  <tr>
                    <td>1000₽</td>
                    <td>Введение внутриматочной спирали (без стоимости ВМС)</td>
                    <td>A11.20.014.GIN</td>
									</tr>
                  <tr>
                    <td>500₽</td>
                    <td>Массаж при заболеваниях женских половых органов (1 сеанс)</td>
                    <td>A21.20.001.GIN</td>
									</tr>
                  <tr>
                    <td>300₽</td>
                    <td>Медикаментозная обработка вульвы, влагалища, шейки матки (ванночки, аппликация, суппозитории)</td>
                    <td>A11.20.024.GIN</td>
									</tr>
                  <tr>
                    <td>400₽</td>
                    <td>Постановка / удаление влагалищного кольца (без стоимости кольца)</td>
                    <td>A14.20.002.GIN</td>
									</tr>
                  <tr>
                    <td>300₽</td>
                    <td>Постановка / удаление контрацептивного кольца (без стоимости кольца)</td>
                    <td>A14.20.002.001.GIN</td>
									</tr>
                  <tr>
                    <td>300₽</td>
                    <td>Спринцевание влагалища</td>
                    <td>A14.20.001.GIN</td>
									</tr>
                  <tr>
                    <td>200₽</td>
                    <td>Тампонирование лечебное влагалища (без стоимости лекарственных препаратов)</td>
                    <td>A11.20.013.GIN</td>
									</tr>
                  <tr>
                    <td>800₽</td>
                    <td>Удаление внутриматочной спирали</td>
                    <td>A11.20.015.GIN</td>
									</tr>
                  <tr>
                    <td>400₽</td>
                    <td>Удаление инородных тел из влагалища</td>
                    <td>A16.20.059.GIN</td>
									</tr>
                </tbody>
							</table>
        </div>
        </TabPanel>
        <TabPanel tabId="horizontal-tab-six">
        <br/>
        <div className="table-wrapper">
        <h2>Дополнительные процедуры и манипуляции</h2>
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
                    <td>270₽</td>
                    <td>Внутривенное введение лекарственных препаратов</td>
                    <td>A11.12.003</td>
									</tr>
                  <tr>
                    <td>2300₽</td>
                    <td>Внутривенное введение лекарственных препаратов (курс 10 процедур)</td>
                    <td>A11.12.003.001.2</td>
									</tr>    
                  <tr>
                    <td>170₽</td>
                    <td>Внутримышечное введение лекарственных препаратов</td>
                    <td>A11.02.002</td>
									</tr>
                  <tr>
                    <td>1300₽</td>
                    <td>Внутримышечное введение лекарственных препаратов (курс 10 процедур)</td>
                    <td>A11.02.002.001</td>
									</tr>
                  <tr>
                    <td>90₽</td>
                    <td>Измерение артериального давления на периферических артериях</td>
                    <td>A02.12.002</td>
									</tr>
                  <tr>
                    <td>60₽</td>
                    <td>Измерение массы тела</td>
                    <td>A02.01.001</td>
									</tr>
                  <tr>
                    <td>60₽</td>
                    <td>Измерение роста</td>
                    <td>A02.03.005</td>
									</tr>
                  <tr>
                    <td>300₽</td>
                    <td>Непрерывное внутривенное введение лекарственных препаратов</td>
                    <td>A11.12.003.001</td>
									</tr>
                  <tr>
                    <td>2700₽</td>
                    <td>Непрерывное внутривенное введение лекарственных препаратов (курс 10 процедур)</td>
                    <td>A11.12.003.001.1</td>
									</tr>
                  <tr>
                    <td>170₽</td>
                    <td>Подкожное введение лекарственных препаратов</td>
                    <td>A11.01.002</td>
									</tr>
                  <tr>
                    <td>60₽</td>
                    <td>Термометрия общая</td>
                    <td>A02.30.001</td>
									</tr>
                </tbody>
							</table>
        </div>
        </TabPanel>
        
      </Tabs>
      
      
)

export default PricesTabs