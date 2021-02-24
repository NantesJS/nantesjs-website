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
      <h2>Code de conduite</h2>
      <h3>Notre engagement</h3>
      <p>
        En tant que membres, contributeur·trice·s et dirigeant·e·s, nous nous engageons à faire de la participation
        à notre communauté une expérience sans harcèlement, quel que soit l’âge,
        la taille corporelle, le handicap visible ou invisible, l’appartenance ethnique,
        les caractéristiques sexuelles, l’identité et l’expression de genre, le niveau d’expérience,
        l’éducation, le statut socio-économique, la nationalité, l’apparence personnelle, la race,
        la religion, ou l’identité et l’orientation sexuelle.
      </p>
      <p>
        Nous nous engageons à agir et interagir de manière à contribuer à une communauté ouverte,
        accueillante, diversifiée, inclusive et saine.
      </p>

      <h3>Nos critères</h3>
      <p>
        Exemples de comportements qui contribuent à créer un environnement positif :

        <ul>
          <li>Faire preuve d’empathie et de bienveillance envers les autres</li>
          <li>Être respectueux des opinions, points de vue et expériences divergents</li>
          <li>Donner et recevoir avec grâce les critiques constructives</li>
          <li>Assumer ses responsabilités et s’excuser auprès des personnes affectées par nos erreurs
            et apprendre de ces expériences</li>
          <li>Se concentrer sur ce qui est le meilleur non pas uniquement pour nous en tant qu’individu,
            mais aussi pour l’ensemble de la communauté</li>
        </ul>

      </p>

      <p>
        Exemples de comportements inacceptables :

        <ul>
          <li>L’utilisation de langage ou d’images sexualisés et d’attentions ou d’avances sexuelles de toute nature</li>
          <li>Le trolling, les commentaires insultants ou désobligeants et les attaques personnelles ou d’ordre politique</li>
          <li>Le harcèlement en public ou en privé</li>
          <li>
            La publication d’informations privées d’autrui, telle qu’une adresse postale ou une adresse électronique,
            sans leur autorisation explicite
          </li>
          <li>
            Toute autre conduite qui pourrait raisonnablement être considérée comme inappropriée dans un cadre professionnel
          </li>
        </ul>
      </p>

      <h3>Responsabilités d’application</h3>
      <p>
        Les dirigeant·e·s de la communauté sont chargé·e·s de clarifier et de faire respecter nos normes de
        comportements acceptables et prendront des mesures correctives appropriées et équitables en réponse
        à tout comportement qu’ils ou elles jugent inapproprié, menaçant, offensant ou nuisible.
      </p>
      <p>
        Les dirigeant·e·s de la communauté ont le droit et la responsabilité de supprimer, modifier ou
        rejeter les commentaires, les contributions, le code, les modifications de wikis,
        les rapports d’incidents ou de bogues et autres contributions qui ne sont pas alignés sur ce code de
        conduite, et communiqueront les raisons des décisions de modération le cas échéant.
      </p>

      <h3>Portée d’application</h3>

      <p>
        Ce code de conduite s’applique à la fois au sein des espaces du projet ainsi que dans les espaces publics
        lorsqu’un individu représente officiellement le projet ou sa communauté. Font parties des exemples de
        représentation d’un projet ou d’une communauté l’utilisation d’une adresse électronique officielle,
        la publication sur les réseaux sociaux à l’aide d’un compte officiel ou le fait d’agir en tant que
        représentant·e désigné·e lors d’un événement en ligne ou hors-ligne.
      </p>

      <h3>Application</h3>
      <p>
        Les cas de comportements abusifs, harcelants ou tout autre comportement inacceptables peuvent être
        signalés aux dirigeant·e·s de la communauté responsables de l’application du code de conduite
        via nos réseaux sociaux.
      </p>
      <p>
        Toutes les plaintes seront examinées et feront l’objet d’une enquête rapide et équitable.
      </p>
      <p>
        Tou·te·s les dirigeant·e·s de la communauté sont tenu·e·s de respecter la vie privée et la sécurité des
      personnes ayant signalé un incident.
      </p>

      <h3>Directives d’application</h3>

      <p>
        Les dirigeant·e·s de communauté suivront ces directives d’application sur l’impact communautaire
        afin de déterminer les conséquences de toute action qu’ils jugent contraire au présent code de conduite :
      </p>

      <h4>1. Correction</h4>
      <p>
        <strong>Impact communautaire :</strong> utilisation d’un langage inapproprié ou tout autre comportement jugé
        non professionnel ou indésirable dans la communauté.
      </p>
      <p>
        <strong>Conséquence :</strong> un avertissement écrit et privé de la part des dirigeant·e·s de la communauté,
        clarifiant la nature du non-respect et expliquant pourquoi  le comportement était inapproprié.
        Des excuses publiques peuvent être demandées.
      </p>

      <h4>2. Avertissement</h4>

      <p>
        <strong>Impact communautaire :</strong> un non-respect par un seul incident ou une série d’actions.
      </p>
      <p>
        <strong>Conséquence :</strong> un avertissement avec des conséquences dû à la poursuite du comportement.
        Aucune interaction avec les personnes concernées, y compris l’interaction non sollicitée avec celles et
        ceux qui sont chargé·e·s de l’application de ce code de conduite, pendant une période déterminée.
        Cela comprend le fait d’éviter les interactions dans les espaces communautaires ainsi que sur les
        canaux externes comme les médias sociaux. Le non-respect de ces conditions peut entraîner un
        bannissement temporaire ou permanent.
      </p>

      <h4>3. Bannissement temporaire</h4>
      <p>
        <strong>Impact communautaire :</strong> un non-respect grave des normes communautaires,
        notamment un comportement inapproprié soutenu.
      </p>
      <p>
        <strong>Conséquence :</strong> un bannissement temporaire de toutes formes d’interactions ou de communications avec
        la communauté pendant une période déterminée. Aucune interaction publique ou privée avec les
        personnes concernées, y compris les interactions non sollicitées avec celles et ceux qui appliquent
        ce code de conduite, n’est autorisée pendant cette période. Le non-respect de ces conditions
        peut entraîner un bannissement permanent.
      </p>

      <h4>4. Bannissement permanent</h4>
      <p>
        <strong>Impact communautaire :</strong> démontrer un schéma récurrent de non-respect des normes de la communauté y
        compris un comportement inapproprié soutenu, le harcèlement d’un individu ainsi que l’agression
        ou le dénigrement de catégories d’individus.
      </p>
      <p>
        <strong>Conséquence :</strong> un bannissement permanent de toutes formes d’interactions publiques
        au sein de la communauté.
      </p>

      <h3>Attributions</h3>

      <p>
        Ce code de conduite est adapté du Contributor Covenant, version 2.0, disponible à <a href="https://www.contributor-covenant.org/version/2/0/code_of_conduct.html">cette adresse</a>.
      </p>

    </Layout>
  )
}
