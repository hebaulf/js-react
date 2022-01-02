import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  max-width: 1240px;
  min-width: 320px;
  margin: 0 auto;
  font-family: 'Metamorphous', cursive;
  text-align: center;
`

export const Heading = styled.h1`
  font-size: clamp(2rem, 4vw, 8rem);
  text-transform: uppercase;
`

export const Button = styled.button`
  padding: 12px 22px;
  margin-bottom: 2.5rem;
  background: rgb(40, 40, 40);
  color: rgb(221, 214, 205);
  font-size: 1.2rem;
  font-family: 'Metamorphous', cursive;
  border: 1px solid #000;
  border-radius: 8px;
  transition: all .3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: rgb(221, 214, 205);
    color: rgb(40, 40, 40);
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: .5rem;
  margin-bottom: 3rem;

  @media (min-width: 720px) {
    grid-template-columns:  1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`;