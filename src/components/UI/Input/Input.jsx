

const Input = ({ label, type = 'text', value, name, placeholder, onChange, className , style}) => {
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
      />
    </div>
  );
};

export default Input;
