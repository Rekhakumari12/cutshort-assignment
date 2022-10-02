import styled from "styled-components";
export const AppWrapper = styled.div`
    display: flex;
    border: 1px solid;
    flex-direction: column;
    width: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding:1rem;
`

export const Bullet = styled.li`
    border: 1px solid var(--grey);
    width: 40px;
    height: 40px;
    display: grid;
    place-content: center;
    background-color:white;
    &.active{
          background: var(--purple);
          color: white;
    }
`
export const ProgressBar = styled.div`
    position: relative;
    top: 4.8rem;
    z-index: -2;
    transition: width 0.4s;
    div{
      border-color: #654de4;
      z-index: -1;
      position: absolute;
    }

`