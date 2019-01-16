import React, { Component, Fragment } from 'react'
import {
  node,
  bool,
  func
} from 'prop-types'
import MediaQuery from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'

import styles from './Menu.module.css'

export class Menu extends Component {
  static propTypes = {
    isOpen: bool,
    open: func,
    close: func,
    children: node,
  }

  static defaultProps = {
    children: null,
  }

  toggle = () => this.props.isOpen ? this.props.close() : this.props.open()

  render () {
    const {
      children,
      isOpen,
    } = this.props

    return (
      <Fragment>
        <MediaQuery maxWidth={991}>
          <div className={styles.menu}>
            <button
              className={styles.menu__button}
              onClick={this.toggle}
              aria-label="Ouvrir le menu"
            >
              <FontAwesomeIcon
                className={styles.menu__icon}
                icon={faBars}
                size="2x"
              />
            </button>
          </div>
          {isOpen && (
            <div className={styles.menu__contentResponsive}>
              {children}
            </div>
          )}
        </MediaQuery>
        <MediaQuery minWidth={992}>
          <div className={styles.menu__content}>
            {children}
          </div>
        </MediaQuery>
      </Fragment>
    )
  }
}
