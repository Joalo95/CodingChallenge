function LabelInput({ label, type, id, name, value, onInput, disabled }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        type={type}
        id={id}
        value={value}
        onInput={onInput}
        disabled={disabled}
        autoComplete="off"
      />
    </>
  );
}

export default LabelInput;
