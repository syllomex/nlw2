import styled from "styled-components";

import backgroundImg from "../../assets/images/background.svg";

export const Container = styled.div`
  width: 52%;
  height: 100%;
  background-color: var(--color-primary);

  @media (max-width: 1024px) {
    width: 100%;
    height: 50%;
  }
`;

export const Background = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;
  background: url(${backgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  overflow: hidden;

  p {
    color: var(--color-text-in-primary);
    font-size: 2rem;
    line-height: 2.4rem;
    max-width: 20rem;
    align-self: flex-start;
  }

  img {
    width: 100%;
    max-width: 43rem;
  }
`;
