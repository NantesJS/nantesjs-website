import React, { Fragment } from 'react'
import { bool } from 'prop-types'
import { inject } from '@k-ramel/react'
import { withPrefix } from 'gatsby'

import Layout from '../components/layout'
import { NextMeetup } from '../components/NextMeetup'
import { OldMeetups } from '../components/OldMeetups'

import styles from './index.module.css'

IndexPage.propTypes = {
  isLoading: bool,
}

function IndexPage ({ isLoading }) {
  return (
    <Layout>
      {isLoading ? (
        <div className={styles.loading}>
          <img
            src={withPrefix('/images/logo.gif')}
            alt="indicateur de chargement"
          />
        </div>
      ) : (
        <Fragment>
          <NextMeetup />
          <OldMeetups />
        </Fragment>
      )}
    </Layout>
  )
}

const IndexPageContainer = inject(store => ({
  isLoading: store.ui.loading.get().init,
}))(IndexPage)

export default IndexPageContainer
