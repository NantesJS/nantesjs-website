import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import Profil from '../components/Profil'


export default function () {
  return (
    <Layout>
      <Router>
        <Profil path="/profil" />
      </Router>
    </Layout>
  )
}
