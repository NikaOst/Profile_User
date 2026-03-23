import Avatar from '@mui/material/Avatar';

function AvatarComponent({ data, mainColor, transition }) {
  return (
    <Avatar
      style={{
        backgroundColor: mainColor,
        width: data.avatarSize,
        height: data.avatarSize,
        transition,
      }}
      aria-label="recipe">
      {data.name?.slice(0, 1) || ''}
    </Avatar>
  );
}

export default AvatarComponent;
