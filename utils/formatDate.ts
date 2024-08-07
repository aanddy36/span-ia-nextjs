export const formatDate = (date: number) => {
  const iatDate = new Date(date * 1000);
  return `${iatDate.getDate()}/${
    iatDate.getMonth() + 1
  }/${iatDate.getFullYear()}`;
};
