import React from 'react'
import styled from 'styled-components'
import Nav from '../nav/Nav';
import {BellDot } from 'lucide-react';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1f2937;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    color: white;
`;

const StyledHeaderProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const StyledHeaderImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

export default function Header() {
  return (
    <StyledHeader>
        <Nav />
        <StyledHeaderProfile>
            <BellDot size={20} />
            <StyledHeaderImg src="/api/placeholder/32/32" alt="Profile" />
            <span>Mario</span>
        </StyledHeaderProfile>
    </StyledHeader>
  )
}
