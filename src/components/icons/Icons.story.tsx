/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Grid, Stack, Typography } from '@mui/material';
import * as allIcons from '.';
import { colorPalette } from '../../context/theme/lightMode';

export default {
  title: 'Icons',
  argTypes: {
    size: { control: 'number', name: 'Size' },
  },
  args: {
    size: 30,
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function IconGallery(props: any) {
  const { color } = props;

  return (
    <Grid container spacing={1}>
      {Object.keys(allIcons).map((icon: any) => {
        const IconComponent: any = (allIcons as any)[icon];

        return (
          <Grid item xs={2} key={icon}>
            <Stack direction={'column'} alignItems={'center'} spacing={1}>
              <Card
                sx={{
                  padding: ({ spacing }) => spacing(1),
                  backgroundColor: colorPalette.header.background,
                }}
              >
                <IconComponent {...props} />
              </Card>
              <Typography
                variant='body2'
                fontFamily={'monospace'}
                color={color}
                noWrap
                maxWidth={'100%'}
                title={`<${icon}/>`}
              >
                &lt;{icon}/&gt;
              </Typography>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  );
}
