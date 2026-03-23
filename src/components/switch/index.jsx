import Switch from '@mui/material/Switch';

function SwitchComponent({ data, setProfileSettings, fieldName }) {
  return (
    <Switch
      checked={data}
      onChange={
        setProfileSettings &&
        ((event) => {
          setProfileSettings((prev) => ({
            ...prev,
            [fieldName]: event.target.checked,
          }));
        })
      }
    />
  );
}
export default SwitchComponent;
