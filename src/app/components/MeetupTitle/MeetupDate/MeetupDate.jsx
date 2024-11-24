import { format, getDate, getYear } from 'date-fns'
import './MeetupDate.css'

/**
 * MeetupDate is a functional component that displays the date of a meetup
 */

export function MeetupDate ({ date }) {
    const formattedDate = format(date, 'yyyy-MM-dd')
    const formattedMonth = format(date, 'MMM.')

    return (
        <time className="meetup-date" dateTime={formattedDate}>
            <span>
                <span className="day">{getDate(date)}</span>
                <span className="month">{formattedMonth}</span>
            </span>
            <span className="year">{getYear(date)}</span>
        </time>
    )
}
