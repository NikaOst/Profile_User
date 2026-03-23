import { useState } from 'react';
import StackComponent from '../stack';

function ProfilePlayground() {
  const [profileSettings, setProfileSettings] = useState({
    name: 'Иван',
    surname: 'Иванов',
    avatarSize: 40,
    position: '💻 Разработчик',
    buttonSize: '10px',
    buttonColor: 'primary',
    isOnline: false,
    cardVariant: 'elevation',
    showAlert: false,
  });
  return (
    <div>
      <StackComponent profileSettings={profileSettings} setProfileSettings={setProfileSettings} />
    </div>
  );
}
export default ProfilePlayground;
