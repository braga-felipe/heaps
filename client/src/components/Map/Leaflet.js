import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Loading from '../Assets/Loading';

const Map = ({ position }) => {
  const userIcon = L.icon({
    iconUrl:
      'https://cdn-icons.flaticon.com/png/512/2776/premium/2776067.png?token=exp=1644346881~hmac=da83c5327c469f4e4bba422270f70646',
    iconSize: [38, 38],
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
      <Marker
        icon={userIcon}
        position={[position.latitude, position.longitude]}>
        <Popup>You're here.</Popup>
      </Marker>
    </MapContainer>
  ) : (
    <Loading />
  );
};

export default Map;
