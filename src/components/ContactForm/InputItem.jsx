import PropTypes from 'prop-types';
import { Input } from './InputItem.styled';

export const InputItem = ({
  type = 'text',
  name,
  placeholder,
  pattern,
  title,
  onChange,
  value,
}) => {
  return (
    <Input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      name={name}
      pattern={pattern}
      title={title}
      required
    />
  );
};

InputItem.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};