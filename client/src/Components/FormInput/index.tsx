import "./style.css";

interface IFormInput {
  name: string;
  placeholder: string;
  type: string;
  handleChange: Function;
}

const FormInput = ({ name, placeholder, type, handleChange }: IFormInput) => {
  return (
    <div className="form_group">
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        className="form_input"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default FormInput;
