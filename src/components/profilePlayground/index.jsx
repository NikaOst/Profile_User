import { useState } from 'react';
import Stack from '@mui/material/Stack';
import PreviewCard from '../card/preview';
import ControlsCard from '../card/controls';

function ProfilePlayground() {
  const [profileSettings, setProfileSettings] = useState({
    name: 'Иван',
    surname: 'Иванов',
    avatarSize: 40,
    buttonColor: 'primary',
    isOnline: false,
    cardVariant: 'elevation',
    showAlert: false,
  });
  return (
    <div>
      <Stack
        direction="row"
        spacing={0}
        sx={{ width: 'calc(100vw - 60px)', mx: '30px', gap: '30px' }}
      >
        <PreviewCard data={profileSettings} sx={{ flex: 1, minWidth: 0 }} />
        <ControlsCard
          setProfileSettings={setProfileSettings}
          sx={{ flex: 1, minWidth: 0 }}
        />
      </Stack>
    </div>
  );
}
export default ProfilePlayground;
