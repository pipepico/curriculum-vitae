import React from 'react'

const Education = props => (
    <div className="Education">
      <div className="Education-container">
        {props.data.map((e,i) => (
        <div className="Education-item" key={`Edu-${i}`}>
          <h3>{e.degree} {e.institution}</h3>
          <span>{e.startDate} - {e.endDate}</span>
          <p></p>
        </div>
        ))}
      </div>
    </div>
  )

export default Education
