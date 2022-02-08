import { Container, MapContainer } from '../styles/HomeStyles';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Map = dynamic(() => import('../components/Map/Leaflet'), { ssr: false });

export default function Home() {
  const [position, setPosition] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
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

  const defaultPosition = [52.494626979101454, 13.411428028821229];

  return (
    <Container>
      <MapContainer>
        <Map defaultPosition={defaultPosition} location={position} />
      </MapContainer>
    </Container>
  );
}
