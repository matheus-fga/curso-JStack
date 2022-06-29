import styled from 'styled-components';

export const Nav = styled.nav`
  background: #bbb;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.25rem;

  a {
    color: #000;
    text-decoration: none;
    display: inline-block; 

    & + a {
      margin-left: 1rem;
    }
  }
`;