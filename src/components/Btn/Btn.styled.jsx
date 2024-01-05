import styled from 'styled-components';

export const BtnElement = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 24px;
  font-weight: bold;
  border: none;
  background-color: #cab1c79d;
  box-shadow: 0px 12px 8px 4px #cab1b14d;
  transform: scale(1);
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: ${props =>
      props.status === 'add'
        ? 'rgba(0, 128, 75, 0.7)'
        : 'rgba(202, 30, 30, 0.6)'};
    box-shadow: 0px 14px 6px 4px #cab1b98c;
  }
  &:active {
    transform: scale(1.2);
  }

  & > svg {
    margin-right: 8px;
  }
`;