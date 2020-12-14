import React from 'react'
import styles from '../styles/page.scss'
import { SiteConfig } from '../constants/siteConfig'
import Head from '../src/components/head'
import classNames from 'classnames'
import Header from '../src/components/header'
import { pageAboutTechnology } from '../constants/pageContent'
import Footer from '../src/components/footer'

const Index = props => {
  return (
    <div>
      <Head info={ pageAboutTechnology } baseUrl={ props.baseUrl }/>
      <div className={ classNames(styles.pageWrapper) }>
        <div>
          <Header/>
        </div>
        <div id="content">
          { pageAboutTechnology.content }
        </div>
        <Footer/>
      </div>
    </div>
  )
}
Index.getInitialProps = async () => {
  const baseUrl = `${ SiteConfig.protocol }://${ SiteConfig.domain }`
  return { baseUrl }
}
export default Index
