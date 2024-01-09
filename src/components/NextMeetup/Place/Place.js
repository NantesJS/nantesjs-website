import React from 'react'
import { string, number } from 'prop-types'
import { FullWidthContainer } from '../../FullWidthContainer'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
// import { iconNantesJS } from './Icon'

import * as styles from './Place.module.css'
import {withPrefix} from "gatsby"

Place.propTypes = {
  latitude: number,
  longitude: number,
  name: string,
  link: string,
  address: string,
  postal_code: number,
  city: string,
}

export function Place ({
  latitude,
  longitude,
  name,
  link,
  address,
  postal_code,
  city
}) {
  const GATSBY_MAPBOX_TOKEN = process.env.GATSBY_MAPBOX_TOKEN
  const isBrowser = typeof window !== "undefined"
  if (!isBrowser) return

  const iconNantesJS = new Icon({
    iconUrl: withPrefix('/images/logotype.png'),
    iconRetinaUrl: null,
    iconAnchor: null,
    popupAnchor: [0, -10],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [50,50],
    className: 'marker'
  })

  if (!latitude || !longitude || !GATSBY_MAPBOX_TOKEN) return null
  const position = [latitude, longitude]

  return (
    <FullWidthContainer className={styles.place}>
      <div className={styles.place__map}>
        <MapContainer
          center={position}
          zoom={15}
          className={styles.leaflet_container}
          scrollWheelZoom={false}
          dragging={true}
          tap={true}>
          <TileLayer
            attribution="&amp;copy
                <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a>
                &amp;copy <a href=&quot;http://osm.org/copyright&quot;>Mapbox</a>
                 contributors"
            url="https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
            accessToken={GATSBY_MAPBOX_TOKEN}
            id='streets-v9'
          />
          <Marker
            position={position}
            icon={iconNantesJS}
          >
            <Popup>
              <div className={styles.popup}>
                <b><a href={link}>{name}</a></b><br/>
                {address}<br/>
                {postal_code}<br/>
                {city}
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </FullWidthContainer>
  )
}
