import React from "react"
import propTypes from "prop-types"
import styles from "./datePicker.module.scss"

const CalendarCell = props => {
  const { meta, day, today, selected } = props
  return (
    <div
      {...meta}
      className={`${styles.calendarCell} ${
        day.selectable && styles.selectable
      } ${today && styles.today} ${selected && styles.selected}`}
    >
      {day.date ? String(new Date(day.date).getDate()).padStart(2, "0") : day}
    </div>
  )
}

CalendarCell.propTypes = {
  meta: propTypes.shape({
    role: propTypes.string,
    tabIndex: propTypes.string,
    onKeyDown: propTypes.func,
    onClick: propTypes.func,
  }),
  day: propTypes.any,
  today: propTypes.bool,
  selected: propTypes.bool,
}

const MemoizedCalendarCell = React.memo(CalendarCell)
export default MemoizedCalendarCell
