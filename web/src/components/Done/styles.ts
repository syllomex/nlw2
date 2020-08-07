import styled from "styled-components";

import backgroundImg from "../../assets/images/background-wide.svg";

export const Container = styled.div`
  position: relative;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  height: 100vh;
  width: 100vw;
  background-color: var(--color-primary);
  color: var(--color-text-in-primary);

  > div {
    background: url(${backgroundImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    
    width: 80vw;
    height: 80vh;

    position: absolute;
  }

  > h1 {
    color: var(--color-title-in-primary);
    font-size: 6rem;
    z-index: 4;

    text-align: center;
  }

  > p {
    font-size: 1.6rem;
    text-align: center;
    z-index: 4;
    margin-top: 1rem;
    margin-bottom: 4rem;
    white-space: pre-line;
  }

  > button {
    z-index: 4;
  }
`;
