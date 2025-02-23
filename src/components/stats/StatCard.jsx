/* eslint-disable react/prop-types */
import React from 'react'

const styles = {
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '1rem',
      marginBottom: '2rem',
    },
    statCard: {
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    statCardDelayed: {
      backgroundColor: '#fee2e2',
      color: '#dc2626',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    statContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    statTitle: {
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '0.5rem',
    },
    statValue: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
    }
  }

export default function StatCard({ icon: Icon, title, value, delayed }) {
  return (
    <div style={delayed ? styles.statCardDelayed : styles.statCard}>
    <div style={styles.statContent}>
      <div>
        <p style={styles.statTitle}>{title}</p>
        <p style={styles.statValue}>{value}</p>
      </div>
      <Icon size={24} color={delayed ? '#dc2626' : '#9ca3af'} />
    </div>
  </div>
  )
}
