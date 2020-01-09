import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { Header } from './Header'
import { LargeContainer } from './LargeContainer'
import { Footer } from './Footer'
import styles from './layout.module.css'
import './base.module.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Communauté Nantaise des utilisateurs de JavaScript',
            },
            { name: 'keywords', content: 'meetup, Nantes, JavaScript' },
            {
              name: 'google-site-verification',
              content: 'qlEe2-C1DYQueNyWsHnPDBC5JDDNZGLxyyz3uXynk0M',
            },
          ]}
        >
          <html lang="fr" />
        </Helmet>
        <section className={styles.layout}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main className={styles.layout__main}>
            <LargeContainer relative >
              <div
                style={{
                  margin: '0 auto',
                  maxWidth: '1020px',
                  padding: '0 20px',
                }}
              >
                {children}
              </div>
            </LargeContainer>
          </main>
          <Footer />
        </section>
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
