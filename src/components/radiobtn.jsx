export const RadioButton = (props) => {
  return (
    <div>
      <input
        type="radio"
        value={props.valuetext}
        name={props.name}
        required={props.required}
      />
      <label>{props.text}</label>
    </div>
  );
};
