import React, { useState } from "react"
import propTypes from "prop-types"
import { createCalendar, months, dayList } from "../modules/createCalendar"
import styles from "./datePicker.module.scss"

import CalendarCell from "./calendarCell"

const DatePicker = props => {
  const { selected, setSelected, month, setMonth, year, setYear } = props
  const calendar = React.useMemo(() => createCalendar(year, month), [
    year,
    month,
  ])
  const [today] = useState(() => new Date().toDateString())

  const handleDateSelect = React.useCallback((day, setSelected) => {
    return e => {
      if (e.key && e.key !== "Enter") return
      setSelected(day.date)
    }
  }, [])

  const increaseMonth = e => {
    if (e.key && e.key !== "Enter") return
    if (month + 1 > 11) {
      setMonth(0)
      setYear(year + 1)
    } else {
      setMonth(month + 1)
    }
  }

  const decreaseMonth = e => {
    if (e.key && e.key !== "Enter") return
    if (month - 1 < 0) {
      setMonth(11)
      setYear(year - 1)
    } else {
      setMonth(month - 1)
    }
  }

  const days = ["S", "M", "T", "W", "T", "F", "S"]

  return (
    <div className={styles.calendar}>
      <div className={styles.top} style={{ display: "flex" }}>
        <div
          className={styles.arrow}
          role="button"
          onKeyDown={decreaseMonth}
          tabIndex="0"
          onClick={decreaseMonth}
        >
          ◄
        </div>
        <div className={styles.month}>{`${months[month]} ${year}`}</div>
        <div
          className={styles.arrow}
          role="button"
          onKeyDown={increaseMonth}
          tabIndex="0"
          onClick={increaseMonth}
        >
          ►
        </div>
      </div>
      <div role="grid" aria-colcount="6">
        {[days, ...calendar].map((row, rowIdx) => (
          <div role="rowgroup" key={`week-${rowIdx}`}>
            <div
              className={styles.calendarRow}
              style={{
                display: "flex",
              }}
            >
              {row.map((day, dayIdx) => {
                const meta = day.selectable
                  ? {
                      role: "gridcell",
                      tabIndex: "0",
                      onClick: handleDateSelect(day, setSelected),
                      onKeyDown: handleDateSelect(day, setSelected),
                    }
                  : {}

                return (
                  <CalendarCell
                    meta={meta}
                    day={day}
                    today={today === day.date}
                    selected={selected === day.date}
                    key={String(day.date || dayList[dayIdx])}
                  />
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

DatePicker.propTypes = {
  selected: propTypes.string,
  setSelected: propTypes.func,
  month: propTypes.number,
  setMonth: propTypes.func,
  year: propTypes.number,
  setYear: propTypes.func,
}

const MemoizedDatePicker = React.memo(DatePicker)

export default MemoizedDatePicker
