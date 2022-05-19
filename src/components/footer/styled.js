import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100px;
  background-color: var(--c-primary);
  font-family: var(--ff-pixel);
  box-shadow: 0 0 10px var(--c-primary);
  gap: 1rem;
`
export const Copyrights = styled.div`
  color: var(--c-white);
  font-size: 1.2rem;
  a {
    color: var(--c-secondary);
    text-decoration: none;
  }
`
export const Links = styled.div`
  display: flex;
  gap: 1rem;
  a {
    color: var(--c-secondary);
    text-decoration: none;
  }
`