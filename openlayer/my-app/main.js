import './style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import { fromLonLat } from 'ol/proj';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: fromLonLat([80.2707, 13.0827]),  
    zoom: 12
  })
});

const markerOverlay = new Overlay({
  element: document.createElement('div'),
  positioning: 'bottom-center',
  offset: [0, -10]
});
map.addOverlay(markerOverlay);

const marker = document.createElement('div');
marker.className = 'marker';
marker.addEventListener('click', () => {
  alert('Current Location');
});
markerOverlay.setElement(marker);
markerOverlay.setPosition(fromLonLat([80.2707, 13.0827]));  