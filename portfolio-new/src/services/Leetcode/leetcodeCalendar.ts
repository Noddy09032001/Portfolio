import {
  addDays,
  eachWeekOfInterval,
  endOfYear,
  format,
  startOfYear,
} from 'date-fns';

export const transformLeetCodeCalendar = (
  submissionCalendar: string,
) => {
  const parsed = JSON.parse(submissionCalendar);

  const start = startOfYear(new Date());
  const end = endOfYear(new Date());

  const weeks = eachWeekOfInterval(
    {
      start,
      end,
    },
    {
      weekStartsOn: 0,
    },
  ).map((weekStart) => {
    const contributionDays = Array.from({
      length: 7,
    }).map((_, index) => {
      const currentDay = addDays(weekStart, index);

      const timestamp = Math.floor(
        Date.UTC(
          currentDay.getFullYear(),
          currentDay.getMonth(),
          currentDay.getDate(),
        ) / 1000
      );

      const contributionCount =
        parsed[timestamp] || 0;

      return {
        contributionCount,
        date: format(currentDay, 'yyyy-MM-dd'),
        color: '',
      };
    });

    return {
      contributionDays,
      firstDay: format(
        weekStart,
        'yyyy-MM-dd',
      ),
    };
  });

  const months = Array.from({
    length: 12,
  }).map((_, i) => {
    const monthDate = new Date(
      new Date().getFullYear(),
      i,
      1,
    );

    return {
      name: format(monthDate, 'MMMM'),
      totalWeeks: 4,
      firstDay: format(
        monthDate,
        'yyyy-MM-dd',
      ),
    };
  });

  const totalContributions = Object.values(
    parsed,
  ).reduce(
    (sum: number, value: any) =>
      sum + Number(value),
    0,
  );

  return {
    totalContributions,
    weeks,
    months,
    colors: [],
  };
};