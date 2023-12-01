import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => (props.isRed ? 'darkred' : 'blue')};
  background: lightseagreen;

  small {
    font-size: 12pt;
    margin-left: 15px;
    color: darkslateblue;
  }
`;

export const Paragrafo = styled.p`
  color: darkblue;
  font-size: 60px;
`;
