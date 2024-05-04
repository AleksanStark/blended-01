import { formatDistanceToNow, format } from 'date-fns';

const formatDate = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
const dateToString = date => format(new Date(date), 'Pp');
const formating = { formatDate, dateToString };
export default formating;
