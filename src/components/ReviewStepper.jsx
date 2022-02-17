import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Button, MobileStepper, Paper, Typography, Rating } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const reviews = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    author: 'Jhon Doe',
    title: 'CEO Anonymous',
    stars: 2.5,
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    avatarPath: './assets/images/testimonial-1.webp',
  },
  {
    label: 'Bird',
    author: 'Mary Sue',
    title: 'Entrepreneur',
    stars: 5.0,
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    avatarPath: './assets/images/testimonial-2.webp',
  },
  {
    label: 'Bali, Indonesia',
    author: 'Deus Ex',
    title: 'Lead Developer Deus Le Voult',
    stars: 3.5,
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    avatarPath: './assets/images/testimonial-3.webp',
  },
  {
    label: 'Goč, Serbia',
    author: 'Machina Simulacrum',
    title: 'Freelance Senior Web Developer',
    stars: 4.5,
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    avatarPath: './assets/images/testimonial-4.webp',
  },
];

function ReviewStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = reviews.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ m: 4 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            textTransform: 'uppercase',
            mt: 2,
            mr: 2,
            ml: 2,
            mb: 8,
          }}
        >
          Reviews
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {reviews.map((step, index) => (
          <div key={step.label}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4	, ifr)',
                gap: 1,
                gridTemplateRows: 'auto',
                gridTemplateAreas: `"avatar content content content"
          			"avatar rating rating rating"
          			"avatar author author author"
          			"avatar title title title"`,
              }}
            >
              {Math.abs(activeStep - index) <= 2 ? (
                <Avatar
                  sx={{
                    gridArea: 'avatar',
                    width: 150,
                    height: 150,
                    border: 4,
                    borderColor: 'primary.main',
                  }}
                  src={step.avatarPath}
                  alt={step.label}
                />
              ) : null}
              <Typography
                variant="h5"
                align="justify"
                sx={{
                  gridArea: 'content',
                  fontStyle: 'italic',
                }}
              >
                {step.content}
              </Typography>
              <Rating
                sx={{ gridArea: 'rating' }}
                defaultValue= {step.stars}
                precision={0.5}
                readOnly
              />
              <Typography variant="h6" sx={{ gridArea: 'author' }}>
                {' '}
                — {step.author}
              </Typography>
              <Typography sx={{ gridArea: 'title', fontStyle: 'italic' }}>{step.title}</Typography>
            </Box>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        variant="dots"
        position="static"
        steps={maxSteps}
        sx={{ flexGrow: 1 }}
        activeStep={activeStep}
        nextButton={<Button size="large" disabled={activeStep === maxSteps - 1} />}
        backButton={<Button size="large" disabled={activeStep === 0} />}
      />
    </Box>
  );
}

export default ReviewStepper;
