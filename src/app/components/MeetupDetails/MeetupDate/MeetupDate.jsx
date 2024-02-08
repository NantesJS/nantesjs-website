import './MeetupDate.css'

/**
 * MeetupDate is a functional component that displays the date of a meetup
 */

export function MeetupDate () {
    return (
        <time className="meetup-date" dateTime="2024-01-18">
            <span>
                <span className="day">18</span>
                <span className="month">janv.</span>
            </span>
            <span className="year">2024</span>
        </time>
    )
}
