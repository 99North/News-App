/* src/lib/date_time.js - datetime lib to format date */

/* Copyright (c) 2023 - present Rajesh's Personal Project */

/*
modification history
--------------------
01a,12nov23,rks  created.
*/

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';

import isPresent from './is_present';

dayjs.extend(utc);
dayjs.extend(duration);

const DateTime = {
  /* eslint-disable max-len */
  /**
   * extracts date from a timestamp as a formatted string.
   *
   * formats date in 'MMM dd, YYYY' format. When the year is this year, year is suppressed.
   * However, year can be forced if options.showYear is true.
   *
   * Weekday, is prefixed when options.showWeekend is true.
   *
   * @param {Object|String} timestamp     - the timestamp to format.
   * @param {Object} options
   * @param {Boolean} options.showYear    - forces year to be included. (default: false => automatic)
   * @param {Boolean} options.showWeekday - includes weekday to be included (default: false)
   *
   * @returns a formatted string on success and null otherwise.
   *
   * @example
   * -> Datetime.formatDate()
   * null
   *
   * -> Datetime.formatDate('xxx')
   * null
   *
   * // a date in current year.
   * -> Datetime.formatDate(new Date())
   * "Jul 16"
   *
   * // current year date, with year
   * -> Datetime.formatDate(new Date(), {showYear: true})
   * "Jul 16, 2022"
   *
   * // a date in future/past year.
   * -> Datetime.formatDate('2098-07-16T12:10:00+05:30'))
   * "Jul 16, 2098"
   *
   * -> Datetime.formatDate('2019-07-16T12:10:00+05:30'))
   * "Jul 16, 2019"
   *
   * // a date with weekday.
   * -> Datetime.formatDate(dayjs('2021-07-16T13:00:00+05:30'), { showWeekday: true })
   * "Fri, Jul 16"
   *
   * // a date with both year and weekday.
   * -> Datetime.formatDate(dayjs(), { showYear: true, showWeekday: true })
   * "Fri, Jul 16, 2021"
   *
   */
  /* eslint-enable max-len */
  formatDate: (timestamp, options = {}) => {
    const ts = dayjs(timestamp);

    if (!isPresent(timestamp) || !ts.isValid()){
      return null;
    }

    const opts = { showYear: false, showWeekday: false, ...(options || {}) };
    const isThisYear = ts.isSame(dayjs(), 'year');

    let format = 'MMM DD';

    if (!isThisYear || opts.showYear){
      format = `${format}, YYYY`;
    }

    if (opts.showWeekday){
      format = `ddd, ${format}`;
    }

    return ts.format(format);
  },

  /**
   * extracts time from a datetime object, and formats it to a 12-hr clock.
   *
   * This method formats time in HH:MM AM/PM format with no leading 0
   * and with AM/PM suffix.
   *
   * Special Cases:
   * - Drops minutes on the hour.
   * - 12 AM, and 12 PM are formatted as Midnight and Noon.
   *
   * @param {String|Object} timestamp  - a Date, or timestamp string object to format.
   * @param {String} tz                - a string that represents the timezone
   *
   * @returns {String} a formatted time string on success, and null otherwise.
   *
   * @examples
   * -> Datetime.formatTime(new Date('2021-07-16T12:10:00'))
   * "12:10 PM"
   *
   * -> Datetime.formatTime(dayjs('2021-07-16T08:10:00'))
   * "8:10 AM"
   *
   * -> Datetime.formatTime('2022-07-16T16:00:00')
   * "4 PM"
   *
   * -> Datetime.formatTime(dayjs('2021-07-16T12:00:00'))
   * "Noon"
   *
   * -> Datetime.formatTime(new Date('2021-07-16T00:00:00'))
   * "Midnight"
   *
   */
  formatTime: (timestamp, tz) => {
    const ts = dayjs(timestamp);

    if (!isPresent(timestamp) || !ts.isValid()) return null;

    let format = 'h:mm A';

    if (ts.minute() === 0){
      format = 'h A';

      if (ts.hour() === 12){
        format = '[Noon]';
      }

      if (ts.hour() === 0){
        format = '[Midnight]';
      }
    }

    if (isPresent(tz)){
      return `${ts.format(format)} ${tz}`;
    }

    return `${ts.format(format)}`;
  },

  /* eslint-disable max-len */
  /**
   * formats datetime object
   *
   * Takes datetime object and formats based on optional parameters and year
   * Passes objects to Datetime.formatDate() & Datetime.formatTime() for formatting
   *
   * @param {Object|String} ts                 - dayjs object
   * @param {Object} options                   - optional parameters
   * @param {Boolean} options.showYear         -  forces year to be display (default: false => automatic)
   * @param {Boolean} options.showWeekday      - forces weekday to be displayed (default: false)
   * @param {Boolean} options.noMidnightAdjust - does not adjust date if time is midnight and passed as true  (default: false)
   * @param {String} options.timezone          - timezone to be displayed (default: '');
   *
   * @returns a formatted date + time string on success, and null otherwise.
   *
   * @examples
   *
   * // datetime in current year (skips year)
   * -> Datetime.formatDateTime(dayjs())
   * "Jul 16, 12:10 PM"
   *
   * // datetime in current year (with showYear)
   * -> Datetime.formatDateTime(dayjs(), { showYear: true })
   * "Jul 16, 2021 at 12:10 pm"
   *
   * // datetime in past/future year
   * -> Datetime.formatDateTime('2098-07-16T12:10:00+05:30'))
   * "Jul 16, 2098 at 12:10 pm"
   *
   * -> Datetime.formatDateTime('1998-07-16T12:10:00+05:30'))
   * "Jul 16, 1998 at 12:10 pm"
   *
   * // Forces weekday
   * -> Datetime.formatDateTime(dayjs(), { showWeekday: true })
   * "Fri, Jul 16, 12:10 PM"
   *
   * -> Datetime.formatDateTime('1998-07-16T12:10:00+05:30'), { showWeekday: true })
   * "Mon, Jul 16, 1998 at 12:10 pm"
   */
  /* eslint-enable max-len */
  formatDateTime: (timestamp, options = {}) => {
    let ts = dayjs(timestamp);

    const {
      showYear, noMidnightAdjust, timezone
    } = {
      showYear: false, showWeekday: false, noMidnightAdjust: false, timezone: '', ...(options || {})
    };

    if (!isPresent(timestamp) || !ts.isValid()) return null;

    const connectorStr = (!ts.isSame(dayjs(), 'year') || showYear) ? ' at ' : ', ';

    if (!noMidnightAdjust && ts.hour() === 0){
      ts = ts.subtract(dayjs.duration({ days: 1 }));
    }

    return `${DateTime.formatDate(ts, options)}${connectorStr}${DateTime.formatTime(ts, timezone)}`;
  },

  /**
   * @returns local dayjs object in utc
   */
  utc: dayjs.utc,
};

export default DateTime;
