import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 20px;
  max-width: 400px;
  width: 100%;

  input {
    background-color: #fff;
    border: ${props => (props.withError ? '2px solid #F00' : 'none')};
    border-radius: 4px;
    color: #444;
    flex: 1;
    font-size: 18px;
    height: 56px;
    padding: 0 20px;
  }

  button {
    background-color: #63f5b0;
    border: 0;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    height: 56px;
    margin-left: 10px;
    padding: 0 20px;
    width: 80px;

    &:hover {
      background-color: #52d89f;
    }
  }
`;
