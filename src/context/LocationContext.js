import createDataContext from './createDataContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'start_recording':
      return { ...state, recording: true };
    case 'stop_recording':
      return { ...state, recording: false };
    case 'set_current_location':
      return {
        ...state,
        currentLocation: action.payload,
      };
    case 'add_location': {
      return { ...state, locations: [...state.locations, action.payload] };
    }
    case 'change_name': {
      return { ...state, name: action.payload };
    }
    case 'reset': {
      return { ...state, name: '', locations: [] };
    }
    default:
      return state;
  }
};

const reset = dispatch => () => {
  dispatch({ type: 'reset' });
};

const changeName = dispatch => name => {
  dispatch({ type: 'change_name', payload: name });
};

const startRecording = dispatch => () => {
  dispatch({ type: 'start_recording' });
};
const stopRecording = dispatch => () => {
  dispatch({ type: 'stop_recording' });
};
const addLocation = dispatch => (location, recording) => {
  dispatch({ type: 'set_current_location', payload: location });
  if (recording) {
    dispatch({ type: 'add_location', payload: location });
  }
};

const INITIAL_STATE = {
  recording: false,
  locations: [],
  currentLocation: null,
  name: '',
};

export const { Context, Provider } = createDataContext(
  reducer,
  { startRecording, stopRecording, addLocation, changeName, reset },
  INITIAL_STATE,
);
