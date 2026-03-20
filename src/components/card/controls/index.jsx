import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';

function ControlsCard({ sx, data, setProfileSettings }) {
  const positions = ['💻 Разработчик', '🎨 Дизайнер', '📊 Менеджер', '📈 Аналитик'];
  return (
    <Card sx={sx}>
      <CardContent>
        <Box
          component="form"
          sx={{ display: 'flex', gap: '30px', marginBottom: '20px' }}
          noValidate
          autoComplete="off">
          <TextField id="outlined-basic" defaultValue={data.name} label="Имя" variant="outlined" />
          <TextField
            id="filled-basic"
            defaultValue={data.surname}
            label="Фамилия"
            variant="filled"
          />
        </Box>
        <Autocomplete
          disablePortal
          options={positions}
          sx={{ width: 300, marginBottom: '20px' }}
          renderInput={(params) => <TextField {...params} label="Position" />}
        />
        <Box sx={{ width: 300 }}>
          <span>Размер аватара: {data.avatarSize}px</span>
          <Slider defaultValue={data.avatarSize} aria-label="Default" valueLabelDisplay="auto" />
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
            name="row-radio-buttons-group">
            <FormControlLabel value="small" control={<Radio />} label="Small" />
            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
            <FormControlLabel value="large" control={<Radio />} label="Large" />
          </RadioGroup>
        </FormControl>
        <FormGroup>
          <FormControlLabel
            value={data.isOnline}
            onChange={(event) => {
              setProfileSettings((prev) => ({
                ...prev,
                isOnline: event.target.value,
              }));
            }}
            control={<Switch />}
            label="Онлайн статус"
          />
          <FormControlLabel control={<Switch />} label="Показать Alert" />
        </FormGroup>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group">
            <FormControlLabel value="shadow" control={<Radio />} label="С тенью" />
            <FormControlLabel value="outline" control={<Radio />} label="С обводкой" />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
}
export default ControlsCard;
