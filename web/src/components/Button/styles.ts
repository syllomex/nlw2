import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;

  background-color: var(--color-secondary);
  color: var(--color-button-text);
  font-size: 2rem;

  border: none;
  border-radius: 0.8rem;

  min-width: 24rem;
  margin-top: 4rem;
  padding: 2rem;

  transition: background-color 0.2s;
  &:hover {
    background-color: var(--color-secondary-dark);
  }
`;
