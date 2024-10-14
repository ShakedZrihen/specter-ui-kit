import React from 'react';
import { Grid, Card, styled, Tooltip, TooltipProps, tooltipClasses } from '@mui/material';
import { Stack } from '@mui/system';
import * as allIllustrations from '.';
import IllustrationSearch from './illustrationsComponents/IllustrationSearch';
import IllustrationPage from './illustrationsComponents/IllustrationPage';
import IllustrationFilters from './illustrationsComponents/Illustrationfilters';

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    minWidth: 'fit-content',
  },
}));

interface IllustrationsComponentProps {
  messages: {
    notFound: string;
    noItems: string;
    error: string;
  };
  illustrations?: string[];
}

const IllustrationsComponent: React.FC<IllustrationsComponentProps> = ({ messages, illustrations = [] }) => {
  const illustrationKeys = illustrations.length > 0 ? illustrations : Object.keys(allIllustrations);

  return (
    <Grid container spacing={3}>
      {illustrationKeys.length === 0 ? (
        <IllustrationSearch message={messages.noItems} />
      ) : (
        illustrationKeys.map((illustration: string, index: number) => {
          // @ts-expect-error allIllustrations[illustration] 
          const Illustration = allIllustrations[illustration];

          return (
            <Grid item xs={3} key={illustration} flexGrow={1}>
              <Card
                sx={{
                  height: '100%',
                  padding: (theme) => theme.spacing(1), 
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

                  {index === 2 ? (
                    <IllustrationFilters/>
                  ) : index === 1 ? (
                    <IllustrationPage message={messages.notFound} />
                  ) : (
                    <IllustrationSearch message={messages.noItems} />
                  )}
                </Stack>
              </Card>
            </Grid>
          );
        })
      )}
    </Grid>
  );
};

export default IllustrationsComponent;
