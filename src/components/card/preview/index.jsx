import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// Аватар пользователя (используйте Avatar с вложенной картинкой или первую букву имени).
// Имя и Фамилия (используйте Typography с разными вариантами variant).
// Статус (On/Off), который меняет цвет текста.
// Кнопки действий ("Написать сообщение", "Предложить работу").

function PreviewCard({ data, sx }) {
  const mainColor = `${data.buttonColor}.main`;

  return (
    <Card sx={sx}>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: mainColor,
              width: data.avatarSize,
              height: data.avatarSize,
            }}
            aria-label="recipe">
            R
          </Avatar>
        }
        title={
          <div style={{ display: 'flex', gap: '5px' }}>
            <Typography variant="h6">{data.name}</Typography>{' '}
            <Typography variant="h6">{data.surname}</Typography>
          </div>
        }
        subheader={data.isOnline ? '● Онлайн' : '○ Офлайн'}
      />
      <CardContent>
        <Box
          sx={{
            border: 1,
            borderColor: mainColor,
            borderRadius: '20px',
            p: '5px',
            width: '30%',
            mb: '20px',
          }}>
          <span>Разработчик</span>
        </Box>
        <Divider style={{ marginBottom: '20px' }} />
        <Stack spacing={2} direction="row">
          <Button
            sx={{
              bgcolor: mainColor,
            }}
            variant="contained">
            Написать сообщение
          </Button>
          <Button
            sx={{
              color: mainColor,
              borderColor: mainColor,
            }}
            variant="outlined">
            Предложить работу
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
export default PreviewCard;
