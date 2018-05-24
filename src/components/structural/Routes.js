import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from '../shared/PrivateRoute';

// Public routes
import HomeContainer from '../pages/home/HomeContainer';
import SignUpContainer from '../pages/sign-up/SignUpContainer';

// Private routes
import FeelingsContainer from '../pages/feelings/FeelingsContainer';
import UniversityPost from '../pages/university_post/UniversityPost';
import ChartsContainer from '../pages/charts/Charts';

const Routes = ({ user }) => (
  <React.Fragment>
    <Route exact path="/" component={HomeContainer} />
    <Route path="/sign-up" component={SignUpContainer} />
    <Route
      path="/UniversityPosts"
      component={UniversityPost}
      user={user}
    />
    <Route
      path="/feelings"
      component={FeelingsContainer}
      user={user}
    />
    <Route
      path="/charts"
      component={ChartsContainer}
      user={user}
    />
  </React.Fragment>
);

export default Routes;
