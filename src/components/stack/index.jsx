import Stack from '@mui/material/Stack';
import PreviewCard from '../card/preview';
import ControlsCard from '../card/controls';

function StackComponent({ profileSettings, setProfileSettings }) {
  return (
    <Stack
      direction="row"
      spacing={0}
      sx={{ width: 'calc(100vw - 60px)', mx: '30px', gap: '30px' }}>
      <PreviewCard data={profileSettings} />
      <ControlsCard data={profileSettings} setProfileSettings={setProfileSettings} />
    </Stack>
  );
}
export default StackComponent;
