import CostumedTextArea from './TextArea.style';

function TextArea(props) {
  return (
    <CostumedTextArea autoComplete="off" placeholder={props.placeholder} />
  );
}

export default TextArea;
