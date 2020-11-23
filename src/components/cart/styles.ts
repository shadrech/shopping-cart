import styled from 'styled-components';

export const CartWrapperDiv = styled.div`
  margin: 50% auto 0;
  width: 30rem;
  max-width: 90vw;
  transform: translateY(-50%);
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.lightGrey};

  section {
    display: flex;

    &:first-child {
      flex-direction: column;
    }
  }
`;

export const SummarySection = styled.section`
  justify-content: space-between;
  align-items: center;
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

export const ItemWrapperDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
  border-bottom: 1px dotted #d4d4d4;
  margin: 0.25rem 0;
  padding: 0.25rem 0;

  ${ErrorMessage} {
    font-size: 0.75rem;
    position: absolute;
    width: 100%;
    top: 0;
    margin: 0;
  }
`;

export const QuantityInput = styled.input`
  width: 35%;
  height: 2rem;
  border: 1px solid #d4d4d4;
  border-radius: 0;
`;

export const TotalP = styled.p`
  font-family: sans-serif;
  font-weight: bolder;
  font-size: 1.2rem;
  width: 50%;
`;

export const NameP = styled.p`
  width: 40%;
  font-size: 1.2rem;
`;

export const PriceP = styled.p`
  width: 20%;
  text-align: right;
  padding: 0 0.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryOrange};
`;

export const BorderlessButton = styled.button`
  border: none;
  background: white;
  font-size: 1.25rem;
  font-weight:  bold;
  color: ${({ theme }) => theme.lightGrey};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.textBlack};
  }
`;

export const CheckoutButton = styled.button`
  border: 1px solid ${({ theme }) => theme.lightGrey};
  background: ${({ theme }) => theme.primaryBlue};
  color: white;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.1rem;
  height: 3rem;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.secondaryBlue};
  }
`;
