import { getProfile } from '../mock-utils';

const DEFAULT_PROFILE = {
  isLoading: false,
}

export function fetchProfile() {
  return (dispatch, getState) => {

    dispatch({ type: 'RESET_COUNTER' });
    dispatch({ type: 'FETCH_PROFILE' });

    const counterInterval = setInterval(() => {
      dispatch({ type: 'INCREMENT' });
    }, 1);

    // simulate network request
    getProfile()
      .then(response => response.json())
      .then(payload => dispatch({ type: 'RECEIVE_PROFILE', payload }))
      .then(() => clearInterval(counterInterval))
  }
}

export default function profile(state = DEFAULT_PROFILE, action) {
  switch (action.type) {
    case 'FETCH_PROFILE':
      return {
        ...DEFAULT_PROFILE,
        isLoading: true,
      };
    case 'RECEIVE_PROFILE':
      return {
        ...state,
        isLoading: false,
        ...action.payload,
      }
    default:
      return state;
  }
}
