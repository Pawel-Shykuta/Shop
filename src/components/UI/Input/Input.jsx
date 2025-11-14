

const Input = ({ label, type = 'text', value, name, placeholder, onChange, className , style, disabled}) => {
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
      />
    </div>
  );
};

export default Input;
