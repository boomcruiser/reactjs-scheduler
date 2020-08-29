const initialState = {
  eventList: [],
};
const eventsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { eventList } = state;
  let newEventList = [...eventList];
  switch (type) {
    case "ADD_EVENT":
      newEventList = [...eventList, payload];
      break;
    case "CANCEL_EVENT":
      newEventList = eventList.filter((item) => item.id !== payload);
      break;
    default:
  }
  state = { ...state, eventList: newEventList };
  return state;
};
export default eventsReducer;
