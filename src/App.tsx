import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import MapView from './components/MapView';
import FilterPanel from './components/FilterPanel';
import { projectsData } from './db';
import { Project } from './interfaces/Project';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #e0f7e0;
`;

const App: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState('همه استان‌ها');
  const [selectedProjectType, setSelectedProjectType] = useState('همه');
  const [projects, setProjects] = useState<Project[]>(projectsData);

  const handleProvinceChange = (province: string) => {
    setSelectedProvince(province);
  };

  const handleProjectTypeChange = (projectType: string) => {
    setSelectedProjectType(projectType);
  };

  const handleProjectClick = (project: Project) => {
    console.log('پروژه انتخاب شده:', project);
  };

  return (
    <AppContainer>
      <Navbar />
      <FilterPanel
        selectedProvince={selectedProvince}
        selectedProjectType={selectedProjectType}
        onProvinceChange={handleProvinceChange}
        onProjectTypeChange={handleProjectTypeChange}
      />
      <MapView
        projects={projects}
        selectedProvince={selectedProvince}
        selectedProjectType={selectedProjectType}
        onProjectClick={handleProjectClick}
      />
    </AppContainer>
  );
};

export default App;