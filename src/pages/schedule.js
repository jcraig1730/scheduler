import React, { useState } from "react"
import DatePicker from "../components/datePicker"
import TimePicker from "../components/timePicker"
import Layout from "../components/layout"

const Schedule = props => {
  const [selected, setSelected] = useState("")
  const [month, setMonth] = useState(() => props.month || new Date().getMonth())
  const [year, setYear] = useState(
    () => props.month || new Date().getFullYear()
  )
  const datePickerProps = {
    selected,
    setSelected,
    month,
    setMonth,
    year,
    setYear,
  }
  return (
    <Layout>
      <div style={{ display: "flex" }}>
        <DatePicker {...datePickerProps} />
        <TimePicker {...datePickerProps} />
      </div>
    </Layout>
  )
}

export default React.memo(Schedule)
