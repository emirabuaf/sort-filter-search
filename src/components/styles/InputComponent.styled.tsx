import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  
@media(max-width:${({ theme }) => theme.mobile}){
  input {
    width: 95%
  }
 }
`