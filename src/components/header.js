import React from 'react'
import styles from '../../styles/page.scss'
import classNames from 'classnames'
import {
  headerLinkData
} from '../../constants/pageContent'
import logo from '../../public/images/logo.svg';

const Header = props => {
  return (
    <>
      <div className={ classNames(styles.header) }>
        <div>
          <div className={ classNames(styles.logo) }>
            <a href="/">
              <img src={logo}/>
            </a>
          </div>
          <div className={ classNames(styles.menu) }>
            {
              headerLinkData.items.map((item, index) => (
                <div className={ styles.item } key={ index }>
                  <a href={ item.link }>{ item.title }</a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
