import Table, {
  StickyTHead,
  StyledTD,
  StyledTH,
  StyledTR,
} from './Table.style';

function ResultTable({ props }) {
  const generateTable = () => {
    let table = [];

    for (let i = 0; i < 100; i++) {
      let children = [];

      for (let j = 0; j < 4; j++) {
        children.push(<StyledTD>Kata A</StyledTD>);
      }

      table.push(<StyledTR>{children}</StyledTR>);
    }
    return table;
  };
  return (
    <Table>
      <StickyTHead>
        <StyledTR>
          <StyledTH>PositionRank</StyledTH>
          <StyledTH>TextRank</StyledTH>
          <StyledTH>TopicRank</StyledTH>
          <StyledTH>YAKE</StyledTH>
        </StyledTR>
      </StickyTHead>
      <tbody>{generateTable()}</tbody>
    </Table>
  );
}

export default ResultTable;
