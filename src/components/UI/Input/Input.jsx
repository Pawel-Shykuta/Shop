

const Input = ({error, label, type = 'text', value, name, placeholder, onChange, className , style, disabled ,checked ,required }) => {
  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        style={style}
        disabled={disabled}
        checked={checked}
        className={error ? 'error':''}
        required={required }
      />
    </div>
  );
};

export default Input;
