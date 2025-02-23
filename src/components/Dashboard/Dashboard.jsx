/* eslint-disable react/prop-types */
import React from 'react';
import { BarChart, Circle, Users, Clock, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useState } from 'react';
import Nav from '../nav/Nav';
import Header from '../header/Header';
import Chart from '../../features/Chart';
import Donut from '../../features/Donut'
import Stats from '../stats/Stats';
import styled from 'styled-components';
import TeamSection from '../teamSection/TeamSection';
import Project from '../project/Project';


const revenueData = [
  { date: '19 June', value: 1000 },
  { date: '20 June', value: 3000 },
  { date: '21 June', value: 3500 },
  { date: '22 June', value: 4000 },
  { date: '23 June', value: 5000 },
  { date: '24 June', value: 6500 },
  { date: '25 June', value: 6500 },
];

const budgetData = [
  { name: 'Over Budget', value: 17, color: '#dc2626' },   // Red
  { name: 'On Budget', value: 33, color: '#60a5fa' },     // Blue
  { name: 'Under Budget', value: 50, color: '#2dd4bf' },  // Teal
];

const projects = [
  { name: 'Insurance App', budget: 70000, profitability: -2500, hours: 100, status: 'over-budget' },
  { name: 'Neo', budget: 70000, profitability: 4000, hours: 1000, status: 'on-track' },
  { name: 'VR Website', budget: 70000, profitability: 4000, hours: 2000, status: 'under-budget' },
  { name: 'VR Website 2', budget: 70000, profitability: 4000, hours: 1000, status: 'completed' },
];

const team = [
  { name: 'Andrea', role: 'Product Designer', mood: '😊' },
  { name: 'Alvaro', role: 'Project Manager', mood: '😃' },
  { name: 'Juan', role: 'UX Senior', mood: '😊' },
  { name: 'Jose', role: 'Marketing', mood: '😄' },
  { name: 'Maria', role: 'UX Junior', mood: '😊' },
];

const styles = {
  dashboard: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '2rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1f2937',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '2rem',
    color: 'white',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
    marginLeft: '2rem',
  },
  navLink: {
    color: '#9ca3af',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  profileImg: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
  },
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
  },
  chartsSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    marginBottom: '2rem',
  },
  chartCard : {
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius:'8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      height: '100%',
  },
  chartTitle : {
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '1rem',
  },
  projectsSection: {
    backgroundColor: 'white',
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
  },
  teamSection: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  teamMember: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    padding: '0.5rem',
  },
  memberInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  memberImg: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  memberName: {
    fontWeight: '500',
  },
  memberRole: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
};

const StyledStatSection = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
`;

export default function Dashboard() {
  return (
    <div style={styles.dashboard}>
      <Header />

      <StyledStatSection>
        <div>
          <Stats />
          <div style={styles.chartsSection}>
            <div style={styles.chartCard}>
              <h2 style={styles.chartTitle}>Total revenue</h2>
              <LineChart width={500} height={300} data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#0d9488" />
              </LineChart>
            </div>
            <Donut />
          </div>
        </div>
        <TeamSection />
      </StyledStatSection>

      <Project />

    </div>
  );
}


