import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Loading from '../Assets/Loading';
import L from 'leaflet';
import { Container } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import ItemCard from '../ItemList/ItemCard';
import SearchBar from '../SeachBar/SearchBar';
import { ItemProp } from '../Home/HomeList';
import { State } from '../../pages/index';
import { useEffect, useState } from 'react';
const Map = ({ position, isGroceries, buttonName, path }) => {
  const items = useSelector((state: State) => state.items);
  const user = useSelector((state: State) => state.user);

  // const locations = [
  //   {
  //     latitude: 52.49702132212514,
  //     longitude: 13.412426015499745,
  //   },
  //   {
  //     latitude: 52.49724753603104,
  //     longitude: 13.410591427437256,
  //   },
  //   {
  //     latitude: 52.49173324225949,
  //     longitude: 13.421504900958329,
  //   },
  //   {
  //     latitude: 52.492115421218806,
  //     longitude: 13.408594567248748,
  //   },
  // ];

  const userIcon = L.icon({
    iconUrl: 'https://img.icons8.com/office/80/000000/place-marker--v1.png',
    iconSize: [38, 38],
  });

  const itemIcon = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/000000/marker-o.png',
    iconSize: [38, 38],
  });

  // filtering items for search bar
  const [itemsRendered, setItemsRendered] = useState([]);
  const [foundItems, setFoundItems] = useState('');
  //Filtering searchbar dropdownlist to only display the item's name once if there are multiple of the same item
  let result = items.filter(function ({ name }) {
    return !this.has(name) && this.add(name);
  }, new Set());
  useEffect(() => {
    setItemsRendered(items);
  }, [items, foundItems]);

  //Search Bar on change will call this function and set a new state of the filtered keyword. If no keyword then state will be set to the list of items.
  const filter = (itemSearched) => {
    const keyword = itemSearched;
    if (keyword === null) {
      setItemsRendered(items);
    } else if (keyword.name !== '') {
      const results = items.filter((items) => {
        return items.name.startsWith(keyword.name);
      });
      setItemsRendered(results);
    } else {
      setFoundItems(keyword);
    }
  };
console.log('itemsRendered :', itemsRendered)
  console.log('IN LEAFLET!');
  return position.longitude ? (
    <>
      <Container sx={searchStyle()}>
        <SearchBar
          onChange={filter}
          items={result
            .filter((item: ItemProp) => item.isGroceries === isGroceries)
            .map((item: ItemProp, index) => (
              <ItemCard
                user={user}
                item={item}
                key={index}
                buttonName={buttonName}
                path={path}
              />
            ))}
        />
      </Container>
      <Container sx={mapStyle()}>
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
          {itemsRendered.map((item) => (
            <Marker
              key={item.id}
              icon={itemIcon}
              position={[
                item.owner.lat,
                item.owner.lng,
              ]}>
              <Popup>
                {
                  <ItemCard
                    user={user}
                    item={item}
                    buttonName={'Chat'}
                    path={''}
                  />
                }
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Container>
    </>
  ) : (
    <Loading />
  );
};

function mapStyle() {
  return {
    borderRadius: '15px',
    marginTop: '5px',
    zIndex: '0',
    position: 'relative',
  };
}

function searchStyle() {
  return {
    borderRadius: '12px 12px 0 0',
    width: '375px',
    marginTop: '-80px',
    padding: '20px 0px 15px 0',
    position: 'relative',
    backgroundColor: 'white',

    // boxShadow: '3px 3px 10px rgba(116, 65, 0, 0.2)',
  };
}

export default Map;
