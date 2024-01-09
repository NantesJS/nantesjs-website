import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import * as styles from "./contributeurs.module.css"

const contributions = {
  question: {
    emoji: "💬",
    title: "Réponse aux questions"
  },
  bug: {
    emoji: "🐛",
    title: "Rapports de bug"
  },
  blog: {
    emoji: "📝",
    title: "Articles de blog"
  },
  code: {
    emoji: "💻",
    title: "Code"
  },
  content: {
    emoji: "🖋",
    title: "Contenu"
  },
  doc: {
    emoji: "📖",
    title: "Documentation"
  },
  design: {
    emoji: "🎨",
    title: "Design"
  },
  example: {
    emoji: "💡",
    title: "Examples"
  },
  eventOrganizing: {
    emoji: "📋",
    title: "Organisateur d'évènements"
  },
  financial: {
    emoji: "💵",
    title: "Soutien financier"
  },
  ideas: { emoji: "🤔", title: "Idées" },
  infra: {
    emoji: "🚇",
    title: "Infrastructure"
  },
  maintenance: {
    emoji: "🚧",
    title: "Maintenance"
  },
  platform: {
    emoji: "📦",
    title: "Packaging"
  },
  projectManagement: {
    emoji: "📆",
    title: "Gestion de projet"
  },
  review: { emoji: "👀", title: "Revue de Pull Requests" },
  security: {
    emoji: "🛡️",
    title: "Securité"
  },
  tool: { emoji: "🔧", title: "Outillage" },
  translation: {
    emoji: "🌍",
    title: "Traduction"
  },
  test: {
    emoji: "⚠️",
    title: "Tests"
  },
  tutorial: {
    emoji: "✅",
    title: "Tutoriels"
  },
  talk: {
    emoji: "📢",
    title: "Talks"
  },
  userTesting: {
    emoji: "📓",
    title: "Tests utilisateurs"
  },
  video: { emoji: "📹", title: "Vidéos" }
}

export const query = graphql`
  query contributors {
    allContributorsJson {
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

export default function Contributors ({ data }) {
  return (
    <Layout>
      <h1>Un grand merci à tous les contributeurs</h1>
      <ul className={styles.contributors}>
        {data.allContributorsJson.nodes[0].contributors.map(c => (
          <li key={c.login}>
            <figure className={styles.contributor}>
              <img className={styles.avatar} src={c.avatar_url} alt={c.name} />
              <figcaption>
                <a href={c.profile}>{c.name}</a>
                <br />
                {c.contributions.map(contrib => (
                  <span key={contrib} title={contributions[contrib].title}>
                    {contributions[contrib].emoji}
                  </span>
                ))}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
Contributors.propTypes = {
  data: PropTypes.shape({
    allContributorsJson: PropTypes.shape({
      nodes: PropTypes.shape({
        contributors: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired,
          login: PropTypes.string.isRequired,
          avatar_url: PropTypes.string.isRequired,
          contributions: PropTypes.arrayOf(PropTypes.string).isRequired,
        })),
      }),
    }),
  }),
}
