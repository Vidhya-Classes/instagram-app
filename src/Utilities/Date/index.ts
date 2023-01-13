import { format } from 'date-fns';

const getCurrentTimeStamp = () => {
  const currentDate = format(new Date(), 'MM/dd/yyyy');
  return currentDate;
};

const getCurrentDate = () => {};
const formatTimeStamp = () => {};

export { getCurrentTimeStamp, getCurrentDate, formatTimeStamp };
