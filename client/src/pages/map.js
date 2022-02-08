import { Container, MapContainer } from '../styles/HomeStyles';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/Map/Leaflet'), { ssr: false });

export default function Home() {
  const defaultPosition = [52.494626979101454, 13.411428028821229];

  return (
    <Container>
      <MapContainer>
        <Map defaultPosition={defaultPosition} location={defaultPosition} />
      </MapContainer>
    </Container>
  );
}
