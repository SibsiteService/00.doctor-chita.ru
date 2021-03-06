import { Link } from 'gatsby'

import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'

import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

import uzi_pic from '../assets/images/pic_1(1).jpg'
import end_pic from '../assets/images/pic_3(1).jpg'
import rak_pic from '../assets/images/pic_4(1).jpg'
import ana_pic from '../assets/images/pic_5(1).jpg'
import dnk_pic from '../assets/images/pic_6(1).jpg'
import che_pic from '../assets/images/pic_8(1).jpg'
import ber_pic from '../assets/images/pic_9(1).jpg'
import gin_pic from '../assets/images/pic_2(1).jpg'
import onko_pic from '../assets/images/pic_10(1).jpg'
import exp_pic from '../assets/images/pic_7(1).jpg'
import administrator from '../assets/images/administrator.jpg';


class Index extends React.Component {
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
        <title>Анализы и УЗИ в Чите. Гинеколог, комплексные обследования, эндокринолог. - Ваш Доктор. Официальный представитель лаборатории Гемотест в Чите</title>
        <meta name="yandex-verification" content="2c6b2cd549700b18" />
        <meta name="description" content="Мы предлагаем широкий спектр медицинских услуг: сдача всех типов анализов, прием гинеколога, УЗИ, комплексные обследование, 
        дополнительное мнение экспертов об онкологии, ДНК анализы. 
        Ваш Доктор - официальный партнер лаборатории Гемотест в Чите. 
        У нас Вы сможете пройти весь спектр диагностики здоровья и узнать о Ваших болезнях на ранних этапах."></meta>
        </Helmet>        
        <Header/>
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
        <section id="first" className="main special">
            <header className="major">
              <h2>В Чите в честь открытия нового медицинского центра предлагаются подарки и скидки на обследования!</h2>
              <img src={administrator} alt="Ваш + Доктор | Гинеколог" width="80%"/>
            </header>
            <ul className="statistics">
              <li className="style1">
              <Link to="/uzi">  
                <span className="icon fa-diamond"></span>
                <strong>УЗИ</strong> высокой точности
              </Link>
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>Врачи</strong> со стажем более 10 лет
              </li>
              <li className="style3">
                <a target="_blank" rel="noopener noreferrer" href="https://www.gemotest.ru/patients/actions/" className="icon fa-exclamation"></a>
               <a target="_blank" rel="noopener noreferrer" href="https://www.gemotest.ru/patients/actions/"> <strong>Акции и Предложения</strong> от нашего партнера лаборатории Гемотест</a>
              </li>
              <li className="style4">
                <span className="icon fa-percent"></span>
                <strong>Скидки</strong> до 25 % по бонусной программе
              </li>
              <li className="style5">
                <span className="icon fa-stethoscope"></span>
                <strong>ЭКО</strong> все виды анализов для подготовки
              </li>
            </ul>
            </section>
          <section id="second" className="main special">
            <ul className="features">
              <li>
              <span className="image">
              <a href="/ginekologia">  
                <img src={gin_pic} alt="" />
              </a>
              </span>
              <Link to="/ginekologia">
                <h3>Гинекология</h3>
              </Link>  
              </li>
              <li>
              <span className="image">
              <a href="/beremennost"> 
                <img src={ber_pic} alt="" />
              </a>   
              </span>
              <Link to="/beremennost">
                <h3>Планирование беременности</h3>
              </Link>
              </li>
              <li>
              <span className="image">
              <a href="/uzi">  
                <img src={uzi_pic} alt="" />
              </a>
              </span>
              <Link to="/uzi">
                <h3>УЗИ</h3>
              </Link>  
              </li>
              <li>
              <span className="image">
                <a href="/endokrinologia">
                <img src={end_pic} alt="" />
                </a>
              </span>
                <Link to="/endokrinologia">
                <h3>Эндокринология в гинекологии</h3>
                </Link>
              </li>
              <li>
              <span className="image">
              <a href="/onkologia">  
                <img src={onko_pic} alt="" />
              </a>
              </span>
              <Link to="/onkologia">
                <h3>Диагностика онкологии</h3>
              </Link>  
              </li>
              <li>
              <span className="image">
              <a href="/dnk">
                <img src={dnk_pic} alt="" />
              </a>
              </span>
                <Link to="/dnk">
                <h3>ДНК анализы на установление отцовства</h3>
                </Link>
              </li>
              <li>
              <span className="image">
              <a href="/check-up">
                <img src={che_pic} alt="" />
              </a> 
              </span>
              <Link to="/check-up">
                <h3>Комплексные чек-ап обследования</h3>
              </Link>
              </li>
              
              <li>
              <span className="image">
                <a href="/raksheikimatki">
                <img src={rak_pic} alt="" />
                </a>
              </span>
                <Link to="/raksheikimatki">
                <h3>Диагностика рака шейки матки</h3>
                </Link>
              </li>
              <li>
              <span className="image">
                <a href="/experts">
                <img src={exp_pic} alt="" />
                </a>
              </span>
                <Link to="/experts">
                <h3>Второе мнение в онкодиагностике</h3>
                </Link>
              </li>
              <li>
              <span className="image">
                <a href="/analisy">
                <img src={ana_pic} alt="" />
                </a>
              </span>
                <Link to="/analisy">
                <h3>Медицинские анализы</h3>
                </Link>
              </li>
            </ul>

            <Link to="/prices"  target="_blank" rel="noopener noreferrer" class="button fit">
                  ОЗНАКОМИТЬСЯ С ЦЕНАМИ
            </Link>
            
          </section>

          
            <section id="third" className="main special">
            <header className="major">
              <h2>Для нас важны люди, которым мы помогаем быть здоровыми!</h2>
            </header>
            <p className="content">
            Мы приглашаем Вас на обследование в новую медицинскую лабораторию под известным брендом 
            <strong> «Гемотест»</strong> по адресу <strong>ул. Шилова, 19</strong>. 
            Предоставляются скидки на важные исследования при планировании беременности и 
            выявлении проблем на ранних стадиях их появления. Компания «Гемотест» является лидером на рынке медицинских обследований в России. 
            Здесь применяются самые современные технологии в области исследования и диагностики. 
            Успешно выявляются даже генетические патологии. Очень многое о здоровье расскажет биохимический анализ. 
            В <strong>скриннинговый комплекс за 390 рублей</strong> входит 8 основных показателей состояния почек, печени, уровня холестерина и железа.
            Рекомендуется для профилактики мониторить появление в крови онкомаркеров – веществ, свидетельствующих о наличии патологических процессов.  
            Для диагностики аденомы и карциномы предстательной железы мужчинам по акции можно сдать <strong>ПСА свободный/ПСА общий всего за 690 рублей</strong>.
            Женщинам можно пройти <strong>цитологическое исследование соскобов шейки матки и цервикального канала всего за 2 250 рублей</strong>.
            Очень важно ответственно и осознанно подходить к планированию беременности, чтобы выносить и родить здорового малыша. 
            Поэтому предлагаются специальные льготные цены на обязательные обследования для тех, кто планирует забеременеть. 
            Например, <strong>цикл анализов на TORCH-инфекции</strong>, которыми может заразиться плод во время беременности и при прохождении родовых путей, <strong>обойдется в 2950 рублей</strong>. 
            <strong> Общеклинические показатели можно сдать за 2916 рублей</strong>. Цервикальный скринниг, <strong>ИППП (прегравидарная подготовка к беременности) – 2420 рублей</strong>, 
            <strong> женские гормоны (лютеиновая фаза) – 540 рублей</strong>, 
            <strong> женские гормоны (фолликулярная фаза) – 2830 рублей</strong>. Консультация врача по результатам анализов – в подарок!
            </p>
            <p>"Лаборатория Гемотест" и общество с ограниченной ответственностью "Ваш Доктор", работающие по договору коммерческой концессии, на основании Лицензии № ЛО-75-01-001494 от 22.01.2019 г., выданной Министерством здравоохранения Забайкальского края.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
