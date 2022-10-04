import styled from "styled-components";
export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;

  #logo {
    svg g {
      fill: var(--purple);
    }
    svg {
      position: relative;
      width: 40px;
      height: 40px;
      bottom: 4px;
    }
  }

  .contentTitle {
    text-align: center;
    h2 {
      font-size: 1.5rem;
      font-weight: bold;
      padding-bottom: 0.3rem;
      padding-top: 1rem;
    }
    span {
      color: var(--dark-grey);
      font-size: smaller;
    }
  }
  label,
  input {
    font-size: smaller;
  }
`;

export const Bullet = styled.li`
  border: 1px solid var(--grey);
  width: 40px;
  height: 40px;
  display: grid;
  place-content: center;
  background-color: white;
  &.active {
    background: var(--purple);
    color: white;
    border: 1px solid var(--purple);
  }
`;
export const ProgressBar = styled.div`
  position: relative;
  top: 4.8rem;
  z-index: -2;
  transition: width 0.4s;
  div {
    border-color: #654de4;
    z-index: -1;
    position: absolute;
  }
`;

export const InputWrapper = styled.div`
  padding-top: 1rem;
`;

export const SetupWrapper = styled.div`
  display: flex;
  margin-top: 2.5rem;
  gap: 2rem;
  h3 {
    font-weight: bold;
    font-size: medium;
    margin-top: 1rem;
  }
  p {
    margin-top: 0.5rem;
    color: var(--dark-grey);
  }
  .card {
    border: 1px solid var(--grey);
    border-radius: 10px;
    padding: 1.5rem;
  }
  svg {
    width: 20px;
  }
  .active {
    border: 1px solid var(--purple);
  }
  input[type="radio"] {
    display: none;
  }
`;


export const CheckWrapper = styled.div`
    margin: auto;
    border: 1px solid var(--purple);
    padding: 1rem;
    border-radius: 50%;
    background-color: var(--purple);
    svg > path {
      fill: white;
    }
    svg {
      position: relative;
      width: 20px;
    }
`