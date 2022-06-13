import React, { useEffect, useRef } from 'react'

const PastaHut = () => {
  const bottomLeftImage = useRef<HTMLDivElement | null>(null)
  const topRightImage = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    bottomLeftImage.current?.classList.add("visible")
    topRightImage.current?.classList.add("visible")
  }, [])

  return (
    <div className="pasta-hut d-flex justify-content-center align-items-center">
      <main className="py-5 mx-auto">
        <div className="logo-background bg-danger border border-light text-light rounded-circle mb-5 mx-auto">
          <h1 className="logo-heading text-center mb-0">Pasta &nbsp;Hut</h1>
        </div>
        <div className="card bg-light">
          <h5 className="card-header text-center">Book a table</h5>
          <div className="card-body">
            <form>
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="nameInput">First name</label>
                <input className="form-control bg-light" id="nameInput" type="text" />
                <small className="text-danger" id="nameCaption" dangerouslySetInnerHTML={{ __html: `<!--Please enter your name to make a booking-->` }} />
              </div>
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="dateInput">When would you like to visit?</label>
                <div className="row g-2">
                  <div className="col-sm mb-sm-2">
                    <input className="form-control bg-light" id="dateInput" type="date" />
                  </div>
                  <div className="col-sm mb-2">
                    <div className="row g-2">
                      <div className="col">
                        <select className="form-select bg-light" id="hourInput" defaultValue="">
                          <option value="" disabled hidden>HH</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                        </select>
                      </div>
                      <div className="col">
                        <select className="form-select bg-light" id="minuteInput" defaultValue="">
                          <option value="" disabled hidden>MM</option>
                          <option value="00">00</option>
                          <option value="15">15</option>
                          <option value="30">30</option>
                          <option value="45">45</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <small className="text-danger" id="dateCaption" dangerouslySetInnerHTML={{ __html: `<!--Please ensure the date entered is not in the past-->` }} />
              </div>
              <div className="form-group mb-4">
                <div className="row g-2">
                  <div className="col">
                    <div className="form-group mb-0">
                      <label className="form-label" htmlFor="numAdultsInput">No. of adults</label>
                      <input className="form-control bg-light" id="numAdultsInput" type="number" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group mb-0">
                      <label className="form-label" htmlFor="numChildrenInput">No. of children</label>
                      <input className="form-control bg-light" id="numChildrenInput" type="number" />
                    </div>
                  </div>
                </div>
                <small className="text-danger" id="numGuestsCaption" dangerouslySetInnerHTML={{ __html: `<!--Please contact us by phone to arrange a booking for more than 6 guests-->` }} />
              </div>
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="phoneInput">Phone</label>
                <input className="form-control bg-light" id="phoneInput" type="tel" />
                <small className="text-danger" id="phoneCaption" dangerouslySetInnerHTML={{ __html: `<!--Please enter a valid UK phone number-->` }} />
              </div>
              <hr className="bg-transparent border-danger opacity-75 my-4" />
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="emailInput">Email <span className="text-muted">(optional)</span></label>
                <input className="form-control bg-light" id="emailInput" type="email" />
                <small className="text-danger" id="emailCaption" dangerouslySetInnerHTML={{ __html: `<!--Please ensure the email address you entered is valid-->` }} />
              </div>
              <div className="form-check mb-4">
                <input className="form-check-input bg-light" id="newsAndOffersInput" type="checkbox" />
                <label className="form-check-label" htmlFor="newsAndOffersInput">Please send me news and offers</label>
                <small className="d-block text-danger" id="newsAndOffersCaption" dangerouslySetInnerHTML={{ __html: `<!--Please enter a valid email address to receive news and offers-->` }} />
              </div>
              <button className="btn btn-danger d-block w-100" id="bookingButton" type="button">Book now</button>
            </form>
          </div>
        </div>
      </main>
      <div className="corner-image" ref={bottomLeftImage} id="bottom-left-image"></div>
      <div className="corner-image" ref={topRightImage} id="top-right-image"></div>    
    </div>
  )
}

export default PastaHut
