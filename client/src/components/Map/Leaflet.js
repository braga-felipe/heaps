import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Loading from '../Assets/Loading';
import L from 'leaflet';
import { useSelector } from 'react-redux';
import ItemCard from '../../components/ItemList/ItemCard';

const Map = ({ position }) => {
  const items = useSelector((state) => state.items);
  const user = useSelector((state) => state.user);
  /* user, item, buttonName=chat, path='' */
  console.log({ items });
  const locations = [
    {
      latitude: 52.49702132212514,
      longitude: 13.412426015499745,
    },
    {
      latitude: 52.49724753603104,
      longitude: 13.410591427437256,
    },
    {
      latitude: 52.49173324225949,
      longitude: 13.421504900958329,
    },
    {
      latitude: 52.492115421218806,
      longitude: 13.408594567248748,
    },
  ];

  const userIcon = L.icon({
    iconUrl: 'https://img.icons8.com/office/80/000000/place-marker--v1.png',
    iconSize: [38, 38],
  });

  const itemIcon = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/000000/marker-o.png',
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
      {items.slice(0, 4).map((item, index) => (
        <Marker
          key={index}
          icon={itemIcon}
          position={[locations[index].latitude, locations[index].longitude]}>
          <Popup>
            {
              <ItemCard
                user={user}
                item={item}
                buttonName={'Chat'}
                patch={''}
              />
            }
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  ) : (
    <Loading />
  );
};

export default Map;
