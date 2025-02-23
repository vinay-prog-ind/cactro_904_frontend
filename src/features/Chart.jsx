/* eslint-disable react/prop-types */
import { LineChart } from 'lucide-react';
import { CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styled from 'styled-components';

// const StyledChartsSection=styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 2rem;
//     margin-bottom: 2rem;
// `
// const StyledChartCard = styled.div`
//     background-color: white;
//     padding: 1.5rem;
//     border-radius: 8px;
//     box-shadow: 0 1px 3px rgba(0,0,0,0.1);
//     height: 100%;
// `

// const StyledChartTitle = styled.h2`
//     font-size: 1.125rem;
//     font-weight: 600;
//     margin-bottom: 1rem;
// `
    
const revenueData = [
    { date: '19 June', value: 1000 },
    { date: '20 June', value: 3000 },
    { date: '21 June', value: 3500 },
    { date: '22 June', value: 4000 },
    { date: '23 June', value: 5000 },
    { date: '24 June', value: 6500 },
    { date: '25 June', value: 6500 },
];

const styles = {
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
    }
}

console.log(revenueData);

export default function Chart() {
  return (
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
  );
}
