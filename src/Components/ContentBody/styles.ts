import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  h1 {
    color: #f5f5f5f5;
    margin-bottom: 15px;
    text-transform: capitalize;
  }
  
  img {
    border: solid 2px #f5f5f5f5;
    width: 100%;
    height: 80%;
  }
`;
