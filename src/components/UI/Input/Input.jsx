

const Input = ({ label, type = 'text', value, name, placeholder, onChange, className }) => {
  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
