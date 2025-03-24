import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Project } from '../interfaces/Project';
import { iranProvinces } from '../iranProvinces';
import L, { Map as LeafletMap } from 'leaflet';
import styled from 'styled-components';

interface MapViewProps {
  projects: Project[];
  selectedProvince: string;
  selectedProjectType: string;
  onProjectClick: (project: Project) => void;
}

const MapWrapper = styled.div`
  flex: 1;
  height: 100%;
`;

const createCustomIcon = (color: string) => {
  return L.divIcon({
    html: `<div style="background-color:${color}; width: 24px; height: 24px; border-radius: 50%; border: 2px solid black;"></div>`,
    className: 'custom-div-icon',
    iconSize: L.point(24, 24),
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });
};

const getIcon = (type: string) => {
  switch (type) {
    case 'مسکن':
      return createCustomIcon('green');
    case 'راه‌سازی':
      return createCustomIcon('blue');
    case 'بیمارستان':
      return createCustomIcon('red');
    case 'آموزشی':
      return createCustomIcon('orange');
    case 'فضای سبز':
      return createCustomIcon('purple');
    default:
      return createCustomIcon('gray');
  }
};

const MapView: React.FC<MapViewProps> = ({
  projects,
  selectedProvince,
  selectedProjectType,
  onProjectClick,
}) => {
  const mapRef = useRef<LeafletMap>(null);

  useEffect(() => {
    if (selectedProvince === 'همه استان‌ها' && mapRef.current) {
      mapRef.current.flyTo([32.4279, 53.6880], 6); // زوم اوت به نقشه ایران با انیمیشن
    } else {
      const province = iranProvinces.find((p) => p.name === selectedProvince);
      if (province && mapRef.current) {
        mapRef.current.flyTo([province.lat, province.lng], 10); // حرکت به سمت استان انتخاب شده با انیمیشن
      }
    }
  }, [selectedProvince]);

  const filteredProjects = projects.filter((project) =>
    (selectedProvince === 'همه استان‌ها' || project.province === selectedProvince) &&
    (selectedProjectType === 'همه' || project.type === selectedProjectType)
  );

  return (
    <MapWrapper>
      <MapContainer
        center={[32.4279, 53.6880]}
        zoom={6}
        className="map-view"
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {filteredProjects.map((project) => (
          <Marker
            key={project.id}
            position={[project.lat, project.lng]}
            eventHandlers={{
              click: () => onProjectClick(project),
            }}
            icon={getIcon(project.type)}
          >
            <Popup>
              <div style={{ textAlign: 'center' }}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <img src={project.image} alt={project.name} style={{ width: '100px', height: 'auto' }} />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </MapWrapper>
  );
};

export default MapView;