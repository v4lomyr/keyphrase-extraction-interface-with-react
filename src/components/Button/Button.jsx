import methods from '../MethodSelections/MethodModel';
import StyledButton from './Button.style';

function Button({
  title,
  abstract,
  goldenKeyphrase,
  model = methods,
  setModel,
}) {
  function handleOnClick() {
    model
      .filter((item) => item.selected)
      .forEach((method) => {
        fetch(method.url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: title,
            abstract: abstract,
          }),
        })
          .then((response) => response.json())
          .then((data) =>
            setModel((prev) => {
              const index = prev.find((e) => e.name === method.name);
              index.keyphrase = data.keyphrases;
              return Array.from(prev);
            })
          );
      });
  }

  return <StyledButton onClick={handleOnClick}>Submit</StyledButton>;
}

export default Button;
