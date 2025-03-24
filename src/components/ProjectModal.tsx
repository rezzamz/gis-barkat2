import React from 'react';
import { Project } from '../interfaces/Project';
import styled from 'styled-components';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  text-align: center;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
`;

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{project.name}</h2>
        <img src={project.image} alt={project.name} style={{ width: '100%', height: 'auto' }} />
        <p>{project.description}</p>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProjectModal;