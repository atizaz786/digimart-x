import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
`;

export const FormContainer = styled.form`
height: 100px;
min-width: 500px;

`;

export const PaymentButton = styled(Button)`
margin-top: 50px;
margin-left: auto;
`;  
