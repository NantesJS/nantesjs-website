import React from 'react'
import { number } from 'prop-types'
import { FullWidthContainer } from '../../FullWidthContainer'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { iconNantesJS } from './Icon'
import L from 'leaflet'

import * as styles from './Place.module.css'

Place.propTypes = {
  latitude: number,
  longitude: number,
  name: String,
  link: String,
  address: String,
  postal_code: number,
  city: String,

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
  if (!latitude || !longitude || !GATSBY_MAPBOX_TOKEN) return null
  const position = [latitude, longitude]
  console.log({position})
  return (
    <FullWidthContainer className={styles.place}>
      <div className={styles.place__map}>
        <MapContainer
          center={position}
          zoom={15}
          className={styles.leaflet_container}
          scrollWheelZoom={false}
          dragging={!L.Browser.mobile}
          tap={!L.Browser.mobile}>
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
            icon={new L.Icon(iconNantesJS)}>
            <Popup>
              <div className={styles.popup}>
                <b><a href={link}>{name}</a></b><br />
                {address}<br />
                {postal_code}<br />
                {city}
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </FullWidthContainer>
  )
}
