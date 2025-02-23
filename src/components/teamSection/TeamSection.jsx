import React from 'react'

const styles = {
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
}


// teamSection: {
    // backgroundColor: 'white',
    // padding: '1.5rem',
    // borderRadius: '8px',
    // boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
// },
// teamMember: {
    // display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // marginBottom: '1rem',
    // padding: '0.5rem',
// },
// memberInfo: {
    // display: 'flex',
    // alignItems: 'center',
    // gap: '1rem',
// },
// memberImg: {
    // width: '40px',
    // height: '40px',
    // borderRadius: '50%',
// },
// memberName: {
    // fontWeight: '500',
// },
// memberRole: {
    // fontSize: '0.875rem',
    // color: '#6b7280',
// },

const team = [
    { name: 'Andrea', role: 'Product Designer', mood: '😊' },
    { name: 'Alvaro', role: 'Project Manager', mood: '😃' },
    { name: 'Juan', role: 'UX Senior', mood: '😊' },
    { name: 'Jose', role: 'Marketing', mood: '😄' },
    { name: 'Maria', role: 'UX Junior', mood: '😊' },
  ];
  

export default function TeamSection() {
  return (
    <div style={styles.teamSection}>
    <h2 style={styles.chartTitle}>Team mood</h2>
    {team.map((member) => (
      <div key={member.name} style={styles.teamMember}>
        <div style={styles.memberInfo}>
          <img src="../../assets/blank-profile.png" alt={member.name} style={styles.memberImg} />
          <div>
            <div style={styles.memberName}>{member.name}</div>
            <div style={styles.memberRole}>{member.role}</div>
          </div>
        </div>
        <span style={{ fontSize: '1.5rem' }}>{member.mood}</span>
      </div>
    ))}
  </div>
  )
}
