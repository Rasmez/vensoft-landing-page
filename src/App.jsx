import React from 'react';
import vstheme from './Theme';
import Header from './components/Header/Header';
import StickyFooter from './components/Footer';
import SwipeableStepper from './components/Carousel';
import ReviewStepper from './components/ReviewStepper';

const top = [<Header />];

const content = [<SwipeableStepper />, <ReviewStepper />];

const bottom = [<StickyFooter />];

// Function to clear complete cache data
const clearCacheData = () => {
  caches.keys().then((names) => {
    names.forEach((name) => {
      caches.delete(name);
    });
  });
};

function App() {
  clearCacheData();
  return vstheme(top, content, bottom);
}
export default App;
