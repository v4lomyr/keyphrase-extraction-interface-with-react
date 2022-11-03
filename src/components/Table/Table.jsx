import { HorizontalFlex } from '../Form/Form.style';
import methods from '../MethodSelections/MethodModel';
import Table, { StyledTBody } from './Table.style';

function ResultTable({ model = methods }) {
  function generateTD(arr = [], threshold = 3) {
    const children = [];
    arr.forEach((item, index) =>
      children.push(
        <tr>
          {index < threshold ? (
            <td
              style={{ border: '1px solid black', backgroundColor: 'yellow' }}
            >
              {item}
            </td>
          ) : (
            <td style={{ border: '1px solid black' }}>{item}</td>
          )}
        </tr>
      )
    );
    console.log(children);
    return children;
  }

  return (
    <HorizontalFlex>
      {model
        .filter((item) => item.selected)
        .map((item) => (
          <Table>
            <thead>
              <th>{item.name}</th>
            </thead>
            <StyledTBody>{generateTD(item.keyphrase)}</StyledTBody>
          </Table>
        ))}
    </HorizontalFlex>
  );
}

export default ResultTable;
