import { FormWrapper, HorizontalFlex, VerticalFlex, Form } from './Form.style';
import TextInput from '../TextInput/TextInput';
import ResultTable from '../Table/Table';
import TextArea from '../TextArea/TextArea';
import MethodSelections from '../MethodSelections/MethodSelection';
import Button from '../Button/Button';

function KeyphraseInterface() {
  return (
    <FormWrapper>
      <Form>
        <VerticalFlex>
          <TextInput placeholder={'Title...'} />
          <TextArea placeholder={'Abstract...'} />
          <TextInput placeholder={'Golden Keyphrase...'} />
        </VerticalFlex>
        <VerticalFlex>
          <HorizontalFlex style={{ justifyContent: 'space-evenly' }}>
            <MethodSelections />
          </HorizontalFlex>
          <Button />
          <ResultTable />
        </VerticalFlex>
      </Form>
    </FormWrapper>
  );
}

export default KeyphraseInterface;
