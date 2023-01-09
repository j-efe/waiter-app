import styled from "styled-components";

export const Container = styled.header`
background: #D73035;
display: flex;
justify-content: center;
align-items: center;

height: 19.8rem;
`;

export const Content = styled.div`
width: 100%;
max-width: 121.6rem;
display: flex;
justify-content: space-between;
align-items: center;


.page-details {
  h1{
    font-size: 3.2rem;
    color: #FFF;
  }

  h2{
  font-size: 1.6rem;
  font-weight: 400;
  opacity: 0.9;
  color: #FFF;

  margin-top: 0.6rem;
  }
}
`;
