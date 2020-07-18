import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { GET_LAUNCH_DETAILS } from '../pages/launch';
import Button from '../components/button';
import * as LaunchDetailTypes from '../pages/__generated__/LaunchDetails';

export const TOGGLE_CART = gql`
  mutation addOrRemoveFromCart($launchId: ID!){
    addOrRemoveFromCart(launchId: $launchId) @client
  }
`

const ActionButton: React.FC<any> = () => {
  return <div/>;
}

export default ActionButton;