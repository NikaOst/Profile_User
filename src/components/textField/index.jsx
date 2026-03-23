import TextField from '@mui/material/TextField';

function TextFieldComponent({ data, variantStyle, lab, fieldName, setProfileSettings, idName }) {
  return (
    <TextField
      id={idName}
      value={data}
      onChange={(event) => {
        setProfileSettings((prev) => ({
          ...prev,
          [fieldName]: event.target.value,
        }));
      }}
      label={lab}
      variant={variantStyle}
    />
  );
}
export default TextFieldComponent;
