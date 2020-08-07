import styled from "styled-components";

interface ICheckbox {
  checked: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  @media (max-width: 1024px) {
    display: initial;
  }
`;

export const FormContainer = styled.div`
  background-color: var(--color-background);

  display: flex;
  flex-direction: column;

  width: 48vw;
  height: 100vh;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 60%;
  height: 100vh;

  @media (max-width: 1024px) {
    width: 80%;
  }

  margin: 0 auto;

  > h1 {
    color: var(--color-text-title);
    font-size: 3.6rem;
    font-weight: bold;

    margin-bottom: 4rem;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;

  color: var(--color-text-complement);

  > div {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: var(--color-text-complement);
  }
`;

export const Checkbox = styled.div<ICheckbox>`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  width: 3rem;
  height: 3rem;
  border-radius: 0.8rem;
  margin-right: 1rem;

  background-color: ${(props) =>
    props.checked ? `var(--color-secondary)` : `var(--color-box-base)`};
`;

export const Footer = styled.div`
  width: 60%;
  margin: 0 auto 8rem;
  justify-self: flex-end;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  @media (max-width: 1024px) {
    width: 80%;
  }

  a {
    color: var(--color-primary);
    font-weight: bold;
  }

  > p:first-child {
    font-size: 2rem;
  }

  > p:last-child {
    opacity: 0.7;
  }
`;
