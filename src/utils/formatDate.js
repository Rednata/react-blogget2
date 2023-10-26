export const formatDate = date => {
  console.log(date);
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return (new Intl.DateTimeFormat('ru', options).format(new Date(date)));
};
