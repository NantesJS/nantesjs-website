import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export const query = graphql`
query contributors {
  allContributorsJson{
    nodes {
      contributors {
        login
        name
        avatar_url
        profile
        contributions
      }
    }
  }
}
`

export default function Contributors ({data}) {
  return (
    <Layout>
      <h1>Un grand merci à tous les contributeurs</h1>
      <ul>
        { data.allContributorsJson.nodes[0].contributors.map(c => 
          <li key={c.login}>
            {c.name}
          </li>
        )}
      </ul>
    </Layout>
  )
}

