import { FormWrapper, HorizontalFlex, VerticalFlex, Form } from './Form.style';
import TextInput from '../TextInput/TextInput';
import ResultTable from '../Table/Table';
import TextArea from '../TextArea/TextArea';
import MethodSelections from '../MethodSelections/MethodSelection';
import Button from '../Button/Button';
import { useState } from 'react';

function KeyphraseInterface() {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [goldenKeyphrase, setGoldenKeyphrase] = useState('');

  return (
    <FormWrapper>
      <Form>
        <VerticalFlex>
          <TextInput placeholder={'Title...'} onChange={setTitle} />
          <TextArea placeholder={'Abstract...'} onChange={setAbstract} />
          <TextInput
            placeholder={'Golden Keyphrase...'}
            onChange={setGoldenKeyphrase}
          />
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
