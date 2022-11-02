function TextInput({ placeholder, onChange }) {
  return (
    <input
      type={'text'}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default TextInput;
