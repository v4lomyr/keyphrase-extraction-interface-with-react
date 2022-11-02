import CostumedTextArea from './TextArea.style';

function TextArea({ placeholder, onChange }) {
  return (
    <CostumedTextArea
      autoComplete="off"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default TextArea;
