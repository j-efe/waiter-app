import styled from "styled-components";

export const Overlay = styled.div`
width: 100%;
height: 100%;
left: 0;
top: 0;
position: fixed;

background: rgba(0,0,0, 0.8);
backdrop-filter: blur(0.45rem);

display: flex;
align-items: center;
justify-content: center;
`;

export const ModalBody = styled.div`
background: #fff;
border-radius: 0.8rem;

width: 48rem;
padding: 3.2rem;

header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 2.4rem;
  }

  button {
    line-height: 0;
    border: 0;
    background: transparent;
  }

}

.status-container{
  margin-top: 3.2rem;

  small {
    font-size: 1.4rem;
    opacity: 0.8;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-top: 0.8rem;
    font-size: 1.6rem;
  }
}
`;

export const OrderDetails = styled.div`
margin-top: 3.2rem;

> strong {
  font-weight: 500;
  font-size: 1.4rem;
  opacity: 0.8;
}

.order-items {
  margin-top: 1.6rem;

  .item {
    display: flex;

    & + .item {
      margin-top: 1.6rem;
    }

    img {
      border-radius: 0.6rem;
    }

    .quantity {
      font-size: 1rem;
      color: #666;

      display: block;
      min-width: 2rem;
      margin-left: 1.2rem;
    }

    .products-details {
      margin-left: 0.4rem;

      strong {
        display: block;
        margin-bottom: 0.4rem;
      }

      span {
        font-size: 1rem;
        color: #666;
      }
    }
  }
}

.total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.4rem;

  span {
    font-weight: 500;
    font-size: 1.4rem;
    opacity: 0.8;
  }

}
`;
