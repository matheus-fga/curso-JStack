import styled, { css } from 'styled-components';

export const Container = styled.article`
  margin-bottom: 1rem;

  ${({ removed }) => css`
    opacity: ${removed ? 0.5 : 1};
    color: ${removed ? '#f00' : '#fff'};
  `}
`;

export const Subtitle = styled.small`
  display: block;
`;

export const Rate = styled.span`
  font-size: 0.7rem;
  opacity: 0.7;
`;