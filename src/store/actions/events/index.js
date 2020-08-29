const ADD_EVENT = "ADD_EVENT";
const CANCEL_EVENT = "CANCEL_EVENT";
export const addEvent = (event) => {
  return {
    type: ADD_EVENT,
    payload: event,
  };
};
export const cancelEvent = (eventId) => {
  return {
    type: CANCEL_EVENT,
    payload: eventId,
  };
};
