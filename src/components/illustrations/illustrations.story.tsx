
import { StoryObj } from '@storybook/react';
import IllustrationPage from '../illustrations/illustrationsComponents/IllustrationPage';
import IllustrationFilters from '../illustrations/illustrationsComponents/Illustrationfilters';
import IllustrationSearch from '../illustrations/illustrationsComponents/IllustrationSearch';


export default {
  title: 'Illustrations/IllustrationPage',
  component: IllustrationPage, IllustrationFilters
};

export const Error404: StoryObj = {
  render() {
    return (
      <IllustrationPage 
        message="לא נמצאו פריטים התואמים לחיפוש."
        is404={true} 
      />
    );
  },
  
};
export const NoFilters: StoryObj = {
  render() {
    return (
      <IllustrationFilters 
      />
    );
  },
};

export const NoSearch: StoryObj = {
  render() {
    return (
      <IllustrationSearch 
      message=''/>
    );
  },
};