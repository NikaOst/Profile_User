import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import AvatarComponent from '../../avatar';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ButtonComponent from '../../button';
import TypographyComponent from '../../typography';

function PreviewCard({ data }) {
  const colorMap = {
    primary: '#1976d2',
    secondary: '#9c27b0',
    success: '#2e7d32',
    error: '#d32f2f',
  };
  const mainColor = colorMap[data.buttonColor] ?? colorMap.primary;
  const transition = 'all 300ms ease';

  return (
    <Card style={{ flex: 1, minWidth: 0 }} variant={data.cardVariant}>
      <CardHeader
        avatar={<AvatarComponent data={data} mainColor={mainColor} transition={transition} />}
        title={
          <div style={{ display: 'flex', gap: '5px' }}>
            <TypographyComponent data={data.name} />
            <TypographyComponent data={data.surname} />
          </div>
        }
        subheader={data.isOnline ? '● Онлайн' : '○ Офлайн'}
      />
      <CardContent>
        <Box
          sx={{
            bgcolor: data.isOnline ? mainColor : 'transparent',
            color: data.isOnline ? '#fff' : '#111111',
          }}
          style={{
            border: `1px solid ${mainColor}`,
            borderRadius: '20px',
            padding: '10px',
            paddingLeft: '30px',
            width: '30%',
            marginBottom: '20px',
            transition,
          }}>
          <span>{data.position}</span>
        </Box>
        <Divider style={{ marginBottom: '20px' }} />
        <Stack spacing={2} direction="row">
          <ButtonComponent
            styles={{
              padding: data.buttonSize,
              backgroundColor: mainColor,
              color: '#fff',
              transition,
            }}
            variantStyle="contained"
            text="Написать сообщение"
          />
          <ButtonComponent
            styles={{
              color: mainColor,
              borderColor: mainColor,
              transition,
            }}
            variantStyle="outlined"
            text="Предложить работу"
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
export default PreviewCard;
