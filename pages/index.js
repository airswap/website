import React from 'react'
import styles from '../styles/page.scss'
import { SiteConfig } from '../constants/siteConfig'
import Head from '../src/components/head'
import classNames from 'classnames'
import Header from '../src/components/header'
import {
  pageHome, wayToTradeData, pluginData, listPageData
} from '../constants/pageContent'
import Footer from '../src/components/footer'

const Index = props => {
  return (
    <div>
      <Head info={ pageHome } baseUrl={ props.baseUrl }/>
      <div className={ classNames(styles.pageWrapper) }>
        <div>
          <Header/>
        </div>
        <div id="content" className={ styles.pageContent }>
          <div className={ styles.wayToTrade }>
            <div className={ styles.heading }>{ wayToTradeData.title }</div>
            <div className={ styles.items }>
              {
                wayToTradeData.items.map((item, index) => (
                  <div className={ styles.item } key={ index }>
                    <div className={ styles.itemOuter }>
                      <div className={ styles.itemTitle }>
                        { item.title }
                      </div>
                      <div className={ styles.itemDescription }>
                        { item.description }
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className={ styles.plugin }>
            <div className={ styles.heading }>{ pluginData.title }</div>
            <div className={ styles.items }>
              {
                listPageData.items.map((item, index) => (
                  <div className={ styles.item } key={ index }>
                    <div className={ styles.itemOuter }>
                      <div className={ styles.itemTitle }>
                        { item.title }
                      </div>
                      <div className={ styles.itemDescription }>
                        { item.description }
                      </div>
                      <div className={ styles.itemLink }>
                        <a href={ item.link }>More</a>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className={ styles.joinAndShape }>
            <div className={ styles.heading }>{ listPageData.title }</div>
            <div className={ styles.items }>
              {
                listPageData.items.map((item, index) => (
                  <div className={ styles.item } key={ index }>
                    <div className={ styles.itemOuter }>
                      <div className={ styles.itemTitle }>
                        { item.title }
                      </div>
                      <div className={ styles.itemDescription }>
                        { item.description }
                      </div>
                      <div className={ styles.itemLink }>
                        <a href={ item.link }>More</a>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
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
