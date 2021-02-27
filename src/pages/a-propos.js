import React from 'react'
import { Picture } from '../components/Picture'
import Layout from '../components/layout'
import { SocialLinks } from '../components/SocialLinks'
import styles from './a-propos.module.css'
import grue from './grue.jpg'
import elephant from './elephant.jpg'

export default function About () {
  return (
    <Layout>
      <h1>Communauté nantaise des utilisateurs de javascript</h1>
      <p>
        NantesJS est un groupe nantais informel entre utilisateurs et
        passionnés de JavaScript/ECMAScript. Son but est de favoriser
        les échanges et rencontres des utilisateurs/développeurs autour
        de cette technologie, de ses possibilités, de son avenir...
      </p>
      <div className={styles.gallery}>
        <Picture
          className={styles.gallery__frame}
          source={grue}
          alt="La grue titan jaune, vue du quai de la Fosse, à nantes"
        />
        <Picture
          className={styles.gallery__frame}
          source={elephant}
          alt="Le Grand éléphant des machines de l'île à nantes"
        />
      </div>
      <h2>Les rencontres js nantaises</h2>
      <p>
        {`
        La première rencontre a eu lieu en Janvier 2012. Depuis cette date,
        les rencontres se sont faites sur une base irrégulomadaire.
        Les rencontres seront programmées 1 fois par mois, le 3e jeudi
        du mois !
        `}
      </p>
      <p>
        {`
        Les collations sont toujours les bienvenues.
        `}
      </p>
      <p>
        {`
        Sponsors et autres donateurs anonymes, n'hésitez pas à vous
        manifester 😄
        `}
      </p>
      <h2>Retrouvez-nous sur les réseaux</h2>
      <p>
        {`
        Parce qu'une communauté ne vit que par les discussions et les
        rencontres régulières de ses membres, participez à l'organisation
        et à la vie de NantesJS sur les différents groupes de discussion
        et réseaux
        `}
      </p>
      <SocialLinks/>
    </Layout>
  )
}
