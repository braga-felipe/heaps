import { Container, MapContainer } from '../styles/HomeStyles';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Map = dynamic(() => import('../components/Map/Leaflet'), { ssr: false });

export default function Home() {
  const [position, setPosition] = useState({
    longitude: 0,
    latitude: 0,
  });
  console.log('POSITION INDEX: ' + position);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(
          'COORDINATES: ',
          position.coords.latitude,
          position.coords.longitude
        );
        setPosition({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.log(error);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <Container>
      <MapContainer>
        <Map position={position} />
      </MapContainer>
    </Container>
  );
}
