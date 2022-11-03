import styled from 'styled-components';

export const StickyTHead = styled.thead`
  position: sticky;
  top: 0;
  background: azure;
`;

export const StyledTBody = styled.tbody`
  display: block;
  height: 157px;
  overflow-y: scroll;
  width: 100px;
  overflow-x: auto;
  margin: auto;
`;

const Table = styled.table`
  border: 1px solid black;
  margin-top: 10px;
`;

export default Table;
