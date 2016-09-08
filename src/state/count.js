export default function count(currentCount = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return currentCount + 1;
    case 'RESET_COUNTER':
      return 0;
    default:
      return currentCount;
  }
}
