import moment from 'moment-timezone';

export default function parseDate(date) {
    const parsedDate = moment(date)
        .tz('America/Sao_Paulo')
        .format('YYYY-MM-DDTHH:mm:ss');

    return parsedDate;
}