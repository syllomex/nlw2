import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;

  div {
    position: relative;
    &:first-child {
      border-radius: 0.8rem 0.8rem 0 0;
    }

    &:last-child {
      border-radius: 0 0 0.8rem 0.8rem;
    }

    &:not(:last-child) {
      border-bottom: 1px solid var(--color-line-in-white);
    }

    &::before {
      position: absolute;
      background-color: var(--color-primary);
      width: 3px;

      height: 0;
      top: 0;
      opacity: 0;

      transition-duration: .2s;

      content: "";
    }

    &:focus-within::before {
      opacity: 1;
      height: 5rem;
      top: 1.4rem;
    }
  }

  input {
    width: 100%;
    border: none;
    font-size: 2rem;
    padding: 2.4rem;
    color: var(--color-text-base);
    border-radius: inherit;

    &::placeholder, &:-moz-placeholder, &::-webkit-input-placeholder {
      color: var(--color-text-muted);
    }
  }
`;
