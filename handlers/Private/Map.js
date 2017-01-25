/** @flow */
import React, {Component} from 'react';
import {resolve} from 'react-resolver';
import {GoogleMap, Marker, withGoogleMap} from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

const MapImpl = withScriptjs(
  withGoogleMap(
    props => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={10}
      defaultCenter={{lat: 35.451955, lng: -80.8461006}}
      onClick={props.onMapClick}
    >
      {props.markers.map(marker => (
        console.log(marker),
        <Marker
          {...marker}
          onRightClick={() => props.onMarkerRightClick(marker)}
        />
      ))}
    </GoogleMap>
  )
));

@resolve('data', props => (
  fetch(`${process.env.API_URL}/api/people`)
    .then(n => n.json())
))
class Map extends Component {
  static displayName = 'LocationsMap';

  render() {
    if (typeof window === 'undefined') {
      return <div />;
    }

    const markers = this.props.data
      .filter(data => !!data.location)
      .map((data) => ({
        position: data.location,
        key: ('' + data.location.lat) + ('' + data.location.lng)
      }));;
    console.log('Rendering %s markers with GoogleMap', markers.length);
    return (
      <MapImpl
        googleMapURL=`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&v=3.exp`
        loadingElement={<div style={{ height: `100%` }}>Loading...</div>}
        containerElement={<div style={{height: '600px'}} />}
        mapElement={<div style={{height: '600px'}} />}
        markers={markers}
      />
    );
  }
}

export default Map;

