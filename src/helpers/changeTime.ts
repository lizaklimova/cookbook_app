export const changeTime = (minutes: string): string => {
  const timeNum: number = Number(minutes);
  if (timeNum < 60) return minutes + 'min';

  const hours = Math.floor(timeNum / 60);
  const minutsLeft = timeNum % 60;

  if (!minutsLeft) return `${hours}h`;

  return `${hours}h${minutsLeft}min`;
};
