import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Loading from '../Assets/Loading';
const Map = ({ position }) => {
  const icon = L.icon({
    iconUrl: 'purple_pin_full.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });

  return position.longitude ? (
    <MapContainer
      center={[position.latitude, position.longitude]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: 400, width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker icon={icon} position={[position.latitude, position.longitude]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  ) : (
    <Loading />
  );
};

export default Map;
