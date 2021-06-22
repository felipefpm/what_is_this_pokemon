import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: -10px;

  .searchInput {
    border: none;
    height: 40px;
    border-radius: 10px;
    padding: 5px;
  }

  .searchInput:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  .buttons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;

    .buttonItem {
        background-color: transparent;
        padding-top: 10px;
        border: none;
        width: 50px;
        border-radius: 15px;
        font-size: 30px;
        color: #010101;
        background-color: #f5f5f5f5;
    }

    .buttonItem:hover{
        cursor: pointer;
    }
  }
`;
