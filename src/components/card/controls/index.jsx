import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextFieldComponent from '../../textField';
import SwitchComponent from '../../switch';

function ControlsCard({ data, setProfileSettings }) {
  const positions = ['💻 Разработчик', '🎨 Дизайнер', '📊 Менеджер', '📈 Аналитик'];

  const handleChange = (event) => {
    setProfileSettings((prev) => ({
      ...prev,
      position: event.target.value,
    }));
  };

  return (
    <Card style={{ flex: 1, minWidth: 0 }}>
      <CardContent>
        <Box
          component="form"
          style={{ display: 'flex', gap: '30px', marginBottom: '20px' }}
          noValidate
          autoComplete="off">
          <TextFieldComponent
            data={data.name}
            variantStyle="outlined"
            lab="Имя"
            fieldName="name"
            setProfileSettings={setProfileSettings}
            idName="outlined-basic"
          />
          <TextFieldComponent
            data={data.surname}
            variantStyle="filled"
            lab="Фамилия"
            fieldName="surname"
            setProfileSettings={setProfileSettings}
            idName="filled-basic"
          />
        </Box>

        <Box style={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Position</InputLabel>
            <Select
              style={{ width: 300, marginBottom: '20px' }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.position}
              label="Position"
              onChange={handleChange}>
              {positions.map((el) => {
                return (
                  <MenuItem key={el} value={el}>
                    {el}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>

        <Box style={{ width: 300 }}>
          <span>Размер аватара: {data.avatarSize}px</span>
          <Slider
            value={data.avatarSize}
            onChange={(event) => {
              setProfileSettings((prev) => ({
                ...prev,
                avatarSize: event.target.value,
              }));
            }}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Box>

        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="button-color-radio-group"
            value={data.buttonColor}
            onChange={(event) => {
              setProfileSettings((prev) => ({
                ...prev,
                buttonColor: event.target.value,
              }));
            }}>
            <FormControlLabel value="primary" control={<Radio />} label="Primary" />
            <FormControlLabel value="secondary" control={<Radio />} label="Secondary" />
            <FormControlLabel value="success" control={<Radio />} label="Success" />
            <FormControlLabel value="error" control={<Radio />} label="Error" />
          </RadioGroup>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={data.buttonSize}
            onChange={(event) => {
              setProfileSettings((prev) => ({
                ...prev,
                buttonSize: event.target.value,
              }));
            }}>
            <FormControlLabel value="10px" control={<Radio />} label="Small" />
            <FormControlLabel value="20px" control={<Radio />} label="Medium" />
            <FormControlLabel value="30px" control={<Radio />} label="Large" />
          </RadioGroup>
        </FormControl>

        <FormGroup>
          <FormControlLabel
            control={
              <SwitchComponent
                data={data.isOnline}
                setProfileSettings={setProfileSettings}
                fieldName="isOnline"
              />
            }
            label="Онлайн статус"
          />
          <FormControlLabel control={<SwitchComponent />} label="Показать Alert" />
        </FormGroup>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={data.cardVariant}
            onChange={(event) => {
              setProfileSettings((prev) => ({
                ...prev,
                cardVariant: event.target.value,
              }));
            }}>
            <FormControlLabel value="elevation" control={<Radio />} label="С тенью" />
            <FormControlLabel value="outlined" control={<Radio />} label="С обводкой" />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
}
export default ControlsCard;
