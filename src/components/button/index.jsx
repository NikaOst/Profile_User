import Button from '@mui/material/Button';

function ButtonComponent({ styles, variantStyle, text }) {
  return (
    <Button style={styles} variant={variantStyle}>
      {text}
    </Button>
  );
}
export default ButtonComponent;
