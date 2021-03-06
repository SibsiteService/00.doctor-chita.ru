import React from 'react'
import Helmet from 'react-helmet'
import '../assets/css/react-web-tabs-cust.css'

import Layout from '../components/layout'

import HeaderGeneric from '../components/HeaderGeneric'
import PricesTabs from '../components/PricesTabs'
import Nav from '../components/NavGeneric'
import { Waypoint } from 'react-waypoint'


class prices extends React.Component {
  
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
        <title>Цены на медицинские обследования в Чите - Ваш Доктор, Гемотест Чита</title>
        <meta name="yandex-verification" content="2c6b2cd549700b18" />
        <meta name="description" content="Анализы и обследования в Чите дешево. Ваш Доктор - официальный партнер лаборатории Гемотест в Чите."></meta>
        </Helmet>
        <HeaderGeneric/>
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav}/>
        
        <div id="main">
          <section id="Layout" className="main">
            <PricesTabs/>
            </section>
        </div>
        
      </Layout>

    )
  }
  
}

export default prices
