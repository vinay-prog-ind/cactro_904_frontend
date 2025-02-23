import React from 'react'
import ProjectCard from './ProjectCard'
import styled from 'styled-components';

const styles = {
    projectsSection: {
        // backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        marginBottom: '2rem',
      },
      projectHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem',
      },
      buttonPrimary: {
        backgroundColor: '#0d9488',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
      },
      buttonSecondary: {
        backgroundColor: 'white',
        border: '1px solid #d1d5db',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        marginLeft: '1rem',
        cursor: 'pointer',
      },
      projectCard: {
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '1rem',
      },
      projectCardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      projectInfo: {
        flex: '1',
      },
      projectTitle: {
        fontWeight: '600',
        marginBottom: '0.5rem',
      },
      projectStats: {
        display: 'flex',
        gap: '2rem',
        marginTop: '0.5rem',
      },
      projectProgress: {
        width: '12rem',
      },
      progressBar: {
        height: '8px',
        backgroundColor: '#e5e7eb',
        borderRadius: '4px',
        marginTop: '0.5rem',
      },
      progressFill: {
        height: '100%',
        backgroundColor: '#0d9488',
        borderRadius: '4px',
      }
}

const ProjectCardsGrid = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
`;

const projects = [
    { name: 'Insurance App', budget: 70000, profitability: -2500, hours: 100, status: 'over-budget' },
    { name: 'Neo', budget: 70000, profitability: 4000, hours: 1000, status: 'on-track' },
    { name: 'VR Website', budget: 70000, profitability: 4000, hours: 2000, status: 'under-budget' },
    { name: 'VR Website 2', budget: 70000, profitability: 4000, hours: 1000, status: 'completed' },
];

export default function Project() {
    
  return (
    <div style={styles.projectsSection}>
        <div style={styles.projectHeader}>
          <h2 style={styles.chartTitle}>Budget status</h2>
          <div>
            <button style={styles.buttonPrimary}>Add New Project</button>
            <button style={styles.buttonSecondary}>Download report</button>
          </div>
        </div>
        <ProjectCardsGrid>
            {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </ProjectCardsGrid>
      </div>
  )
}
