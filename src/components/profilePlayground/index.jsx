import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import PreviewCard from '../card/preview';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

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
      <Stack direction="row" spacing={0} style={{ width: '90vw', gap: '30px', margin: '0 auto' }}>
        <PreviewCard data={profileSettings} style={{ width: '50vw', borderRadius: 0 }} />
        <Item sx={{ width: '50vw', borderRadius: 0 }}>Item 2</Item>
      </Stack>
    </div>
  );
}
export default ProfilePlayground;
