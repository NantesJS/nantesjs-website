import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import { compareDesc } from 'date-fns'
import { parse } from 'date-fns/fp'

import { OldMeetups } from './OldMeetups'

const parseDate = parse(new Date(), 'dd/MM/yyyy')

export function OldMeetupsContainer () {
  const data = useStaticQuery(graphql`query {
              allMarkdownRemark(
                filter: { frontmatter: { status: { eq: "done" } } }
              ) {
                edges {
                  node {
                    parent  {
                      ... on File {
                        name
                      }
                    }
                    frontmatter {
                      id
                      status
                      date
                      image
                      title
                      sponsor { name }
                      venue { name }
                      talks {
                          id
                          title
                          video
                          speakers {
                              id
                              name
                              link
                          }
                      }
                    }
              } } }
            }`)

  const currentYear = new Date().getFullYear()
  const { allMarkdownRemark: { edges } } = data
  const allMeetups = edges
    .map(({ node }) => {
      const parsedDate = parseDate(node.frontmatter.date)

      return {
        ...node.frontmatter,
        parsedDate,
        year: parsedDate.getFullYear(),
        filename: node.parent.name,
      }
    })
  const meetups = allMeetups
    .filter(meetup => meetup.year === currentYear)
    .sort((a, b) => {
      return compareDesc(a.parsedDate, b.parsedDate)
    })

  const pastYearsMeetups = allMeetups.filter(meetup => meetup.year != currentYear)
  const years = [...new Set(pastYearsMeetups.map(meetup => meetup.year))]

  return (
    <OldMeetups meetups={meetups} years={years} />
  )
}
