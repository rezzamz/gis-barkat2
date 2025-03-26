import React from 'react';
import styled from 'styled-components';
import { iranProvinces } from '../iranProvinces';

interface FilterPanelProps {
  selectedProvince: string;
  selectedProjectType: string;
  onProvinceChange: (province: string) => void;
  onProjectTypeChange: (projectType: string) => void;
}
const PanelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #004d00; /* سبز تیره */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 10px; /* کوچک‌تر کردن حاشیه‌ها */
`;

const Select = styled.select`
  margin: 0 5px; /* کوچک‌تر کردن حاشیه‌های داخلی سلکت */
  padding: 5px; /* کوچک‌تر کردن پدینگ سلکت */
  font-size: 14px; /* کوچک‌تر کردن فونت سلکت */
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  color: #004d00; /* سبز تیره */
  outline: none;
  

  &:focus {
    border-color: #004d00; /* سبز تیره */
    box-shadow: 0 0 5px rgba(0, 77, 0, 0.3);
  }
`;


const FilterPanel: React.FC<FilterPanelProps> = ({
  selectedProvince,
  selectedProjectType,
  onProvinceChange,
  onProjectTypeChange,
}) => {
  const provinces = ['همه استان‌ها', ...iranProvinces.map(p => p.name)];
  const projectTypes = ['همه', 'مسکن', 'راه‌سازی', 'بیمارستان', 'آموزشی', 'فضای سبز'];

  return (
    <PanelContainer className="panel-container">
      <Select value={selectedProvince} onChange={(e) => onProvinceChange(e.target.value)}>
        {provinces.map((province) => (
          <option key={province} value={province}>{province}</option>
        ))}
      </Select>
      <Select value={selectedProjectType} onChange={(e) => onProjectTypeChange(e.target.value)}>
        {projectTypes.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </Select>
    </PanelContainer>
  );
};

export default FilterPanel;