import styled from 'styled-components';

export const ListItem = styled.li`
  min-width: 50vw;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 32px;
  border-radius: 12px;
  background-color: hsla(215, 98%, 79%, 0.1);
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
`;

export const ListItemData = styled.p`
  font-size: 24px;
  margin-right: 36px;
`;