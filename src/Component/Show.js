import React from 'react'

function Show() {
    return (
        <ol className=" container mt-5 p-5 list-group list-group-numbered">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <span className="badge bg-primary rounded-pill">14</span>
        </li>
        <br />
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <span className="badge bg-primary rounded-pill">14</span>
        </li>
      </ol>
    )
}

export default Show
