import { useEffect } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import methods from './MethodModel';

function MethodSelections({ model = methods, onChange }) {
  function handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    onChange((prev) => {
      const element = prev.find((element) => element.name === item);
      element.selected = isChecked;
      return Array.from(prev);
    });
  }

  useEffect(() => {
    console.log(model);
  }, [model]);

  return (
    <>
      {Array.from(model).map((item) => (
        <label key={item.key}>
          <Checkbox
            name={item.name}
            checked={item.selected}
            onChange={handleChange}
          />{' '}
          {item.name}
        </label>
      ))}
    </>
  );
}

export default MethodSelections;
