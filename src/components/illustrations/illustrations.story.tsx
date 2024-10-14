import {
  Card,
  Grid,
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses,
} from '@mui/material';
import { Stack } from '@mui/system';
import { StoryObj } from '@storybook/react';
import * as allIllustrations from '.';

export default {
  title: 'Illustrations',
};

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    minWidth: 'fit-content',
  },
}));

export const Illustrations: StoryObj = {
  render() {
    return (
      <Grid container spacing={3}>
        {Object.keys(allIllustrations).map((illustration: string) => {
          // @ts-expect-error - we know that allIllustrations[illustration] is a component
          const Illustration = allIllustrations[illustration];

          return (
            <Grid item xs={3} key={illustration} flexGrow={1}>
              <Card
                sx={{
                  height: '100%',
                  padding: ({ spacing }) => spacing(1),
                }}
                elevation={2}
              >
                <Stack
                  direction={'column'}
                  alignItems={'center'}
                  spacing={1}
                  sx={{
                    height: '100%',
                  }}
                  justifyContent={'space-between'}
                >
                  <StyledTooltip title={<Illustration />}>
                    <Stack justifyContent={'center'} sx={{ height: '100%' }}>
                      <Illustration />
                    </Stack>
                  </StyledTooltip>
                  <Typography variant='body2' fontFamily={'monospace'}>
                    &lt;{illustration}/&gt;
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  },
};
