import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1f2937;
    padding: 1rem;
    border-radius: 8px;
    /* margin-bottom: 2rem; */
    color: white;
`;

const StyledLogo = styled.span`
        font-size: 1.5rem;
        font-weight: bold;
`;

const StyledNav = styled.nav`
    display: flex;
    gap: 1.5rem;
    margin-left: 2rem;
`;

const StyledNavLink = styled.button`
    color: #9ca3af;
    border: none;
    background: none;
    cursor:     pointer;
`;

export default function Nav() {
  return (
    <StyledNavbar>
        <StyledLogo >HOURS</StyledLogo>
        <StyledNav >
        {['Dashboard', 'Projects', 'Team', 'Clients', 'Time', 'Reports'].map((item) => (
            <StyledNavLink key={item} >
            {item}
            </StyledNavLink>
        ))}
        </StyledNav>
    </StyledNavbar>
  )
}
