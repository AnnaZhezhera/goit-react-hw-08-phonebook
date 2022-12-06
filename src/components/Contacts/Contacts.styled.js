import styled from 'styled-components';

export const ContactBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const ListOfContacts = styled.ul`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  padding-left: 0;
  min-width: 300px;
  li {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 10px;

    button {
      padding: 5px 10px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      :hover {
        background-color: lightblue;
      }
    }
  }
`;
