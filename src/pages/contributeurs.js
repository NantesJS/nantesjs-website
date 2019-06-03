import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Picture } from "../components/Picture";

import styles from "./contributeurs.module.css";

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
    title: "Organisateur d'éveènement"
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
};

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
`;

export default function Contributors({ data }) {
  return (
    <Layout>
      <h1>Un grand merci à tous les contributeurs</h1>
      <ul className={styles.contributors}>
        {data.allContributorsJson.nodes[0].contributors.map(c => (
          <li key={c.login}>
            <figure className={styles.contributor}>
              <img className={styles.avatar} src={c.avatar_url} alt={c.name} />
              <figcaption>
                {c.name}
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
