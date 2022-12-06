import styled from 'styled-components';

export const PhonebookWrapp = styled.div`
  text-align: center;
`;

export const PhonebookForm = styled.form`
  display: inline-block;
  text-align: left;

  label {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-bottom: 10px;
    width: 300px;
  }

  div {
    input {
      padding: 5px 10px;
      border-radius: 5px;
      width: 100px;
      border: none;
      cursor: pointer;
      :hover {
        background-color: lightblue;
      }
    }
  }
`;
