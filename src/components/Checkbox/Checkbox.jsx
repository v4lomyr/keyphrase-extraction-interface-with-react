function Checkbox({ type = 'checkbox', name, checked = false, onChange }) {
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
}

export default Checkbox;
