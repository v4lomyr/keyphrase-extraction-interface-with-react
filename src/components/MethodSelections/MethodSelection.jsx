import { useEffect, useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import methods from './MethodModel';

function MethodSelections() {
  const [checkedItems, setCheckedItems] = useState(new Map());

  function handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setCheckedItems((prev) => {
      prev.set(item, isChecked);
      return new Map(prev);
    });
  }

  useEffect(() => {
    console.log(checkedItems);
  }, [checkedItems]);

  return (
    <>
      {methods.map((item) => (
        <label key={item.key}>
          <Checkbox
            name={item.name}
            checked={checkedItems.get(item.name)}
            onChange={handleChange}
          />{' '}
          {item.name}
        </label>
      ))}
    </>
  );
}

export default MethodSelections;
