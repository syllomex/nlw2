import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  @media (max-width: 1024px) {
    display: initial;
  }

  > div:first-child {
    order: 2;
  }
  > div:first-child {
    order: 1;
    @media (max-width: 1024px) {
      order: 3;
    }
  }
`;

export const HeaderIcon = styled.div`
  display: flex;
  align-items: center;

  width: 60%;
  @media (max-width: 1024px) {
    width: 80%;
  }

  margin: 1rem auto 0;
  margin-top: 1rem;

  > img {
    cursor: pointer;
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

    margin-bottom: 2rem;
  }

  > p {
    max-width: 24rem;
    margin-bottom: 4rem;
  }
`;
