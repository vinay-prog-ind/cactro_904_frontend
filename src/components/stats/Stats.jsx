import { AlertTriangle, BarChart, Circle, Clock, Users } from 'lucide-react'
import React from 'react'
import StatCard from './StatCard'

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

export default function Stats() {
  return (
    <div style={styles.statsGrid}>
    <StatCard icon={BarChart} title="Total Projects" value="5" />
    <StatCard icon={Circle} title="Completed" value="1" />
    <StatCard icon={Clock} title="Ongoing" value="3" />
    <StatCard icon={AlertTriangle} title="Delayed" value="1" delayed={true} />
    <StatCard icon={Users} title="Employees" value="5" />
  </div>
  )
}
