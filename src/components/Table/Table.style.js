import styled from 'styled-components';

export const StyledTD = styled.td`
  border: 1px solid black;
  border-top-width: 0;
  border-left-width: 0;
`;

export const StyledTR = styled.tr`
  border: 1px solid black;
`;

export const StyledTH = styled.th`
  border: 1px solid black;
  width: 100px;
  border-top-width: 0;
  border-left-width: 0;
`;

export const StickyTHead = styled.thead`
  position: sticky;
  top: 0;
  background: azure;
  border: 1px solid black;
`;

const Table = styled.table`
  display: block;
  border: 1px solid black;
  margin-top: 10px;
  height: 165px;
  overflow-y: scroll;
`;

export default Table;
