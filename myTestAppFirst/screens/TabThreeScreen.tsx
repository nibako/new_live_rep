import * as React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { AnimatedRegion, LatLng } from 'react-native-maps';
import { Marker } from 'react-native-maps';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen(this: any) {
  return (
    <View style={styles.container}>


     <MapView
     style={styles.map}
    initialRegion={{
      latitude: 49.4873425,
      longitude: 8.4679418,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >

{this.state.markers.map((marker: { latlng: LatLng | AnimatedRegion; title: string | undefined; description: string | undefined; }, index: React.Key | null | undefined) => (
<Marker
key={index}
coordinate={marker.latlng}
title={marker.title}
description={marker.description}

//coordinate={{ latitude : 49.4934689 , longitude : 8.4621149 }}
 // image={{uri: 'https://cdn-0.emojis.wiki/emoji-pics/lg/red-circle-lg.png'}}
  //title= {'Filmriss'}
 // description={'Öffnungszeiten: 18:00-23:00'}
/> ))}
    
  </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
