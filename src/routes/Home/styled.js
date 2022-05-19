import styled from "styled-components";

export const Container = styled.div``
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: var(--ff-pixel);
  h1 {
    text-transform: uppercase;
    margin-top: 1rem;
    font-size: 3rem;
  }
`

export const Download = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  img {
    width: 200px;
    object-fit: cover;
  }
`

export const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
`