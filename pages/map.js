import React from 'react'
import dynamic from 'next/dynamic'
import Page from '../layouts/main'

const LeafletMap = dynamic(import('../components/map'), { ssr: false })

const Map = () => (
  <Page showFooter={false}>
    <LeafletMap />
  </Page>
)

export default Map
