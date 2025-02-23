/* eslint-disable react/prop-types */
import React from 'react'

const styles = {

      projectCard: {
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '1rem',
        width: '100%',
        backgroundColor: 'white'
      },
      projectCardContent: {
        display: 'flex',
        flexDirection: 'column',
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

export default function ProjectCard({project}) {

    const statusColors = {
        'over-budget': '#fee2e2',
        'on-track': '#fef3c7',
        'under-budget': '#ccfbf1',
        'completed': '#dcfce7'
      };

  return (
    <div style={{ ...styles.projectCard}}>
      <div style={styles.projectCardContent}>
        <div style={styles.projectInfo}>
          <h3 style={styles.projectTitle}>{project.name}</h3>
          <div style={styles.projectStats}>
            <div>
              <p style={styles.statTitle}>Total Budget</p>
              <p style={{ fontWeight: '500' }}>{project.budget.toLocaleString()}€</p>
            </div>
            <div>
              <p style={styles.statTitle}>Profitability</p>
              <p style={{ fontWeight: '500' }}>{project.profitability.toLocaleString()}€</p>
            </div>
          </div>
        </div>
        <div style={styles.projectProgress}>
          <p style={styles.statTitle}>Actual hours: {project.hours}</p>
          <div style={styles.progressBar}>
            <div 
              style={{
                ...styles.progressFill,
                width: `${(project.hours / 2000) * 100}%`,
                backgroundColor: statusColors[project.status] 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
