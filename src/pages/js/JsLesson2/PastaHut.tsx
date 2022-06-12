const PastaHut = () => {
  return (
    <>
      <main className="py-5">
        <div className="logo-background bg-danger text-light mb-5">
          <h1 className="logo-heading display-2 text-center mb-0">Pasta &nbsp;Hut</h1>
        </div>
        <div className="card bg-light">
          <h5 className="card-header text-center">Book a table</h5>
          <div className="card-body">
            <form>
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="nameInput">First name</label>
                <input className="form-control" id="nameInput" type="text" />
                <small className="form-text" id="nameCaption" dangerouslySetInnerHTML={{ __html: `<!--Please enter your name to make a booking-->` }} />
              </div>
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="dateInput">When would you like to visit?</label>
                <div className="form-row">
                  <div className="col-sm mb-2">
                    <input className="form-control" id="dateInput" type="date" />
                  </div>
                  <div className="col-sm mb-2">
                    <div className="form-row">
                      <div className="col">
                        <select className="custom-select" id="hourInput">
                          <option value="" selected disabled hidden>HH</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                        </select>
                      </div>
                      <div className="col">
                        <select className="custom-select" id="minuteInput">
                          <option value="" selected disabled hidden>MM</option>
                          <option value="00">00</option>
                          <option value="15">15</option>
                          <option value="30">30</option>
                          <option value="45">45</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <small className="form-text" id="dateCaption" dangerouslySetInnerHTML={{ __html: `<!--Please ensure the date entered is not in the past-->` }} />
              </div>
              <div className="form-group mb-4">
                <div className="form-row">
                  <div className="col">
                    <div className="form-group mb-0">
                      <label className="form-label" htmlFor="numAdultsInput">No. of adults</label>
                      <input className="form-control" id="numAdultsInput" type="number" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group mb-0">
                      <label className="form-label" htmlFor="numChildrenInput">No. of children</label>
                      <input className="form-control" id="numChildrenInput" type="number" />
                    </div>
                  </div>
                </div>
                <small className="form-text" id="numGuestsCaption" dangerouslySetInnerHTML={{ __html: `<!--Please contact us by phone to arrange a booking for more than 6 guests-->` }} />
              </div>
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="phoneInput">Phone</label>
                <input className="form-control" id="phoneInput" type="tel" />
                <small className="form-text" id="phoneCaption" dangerouslySetInnerHTML={{ __html: `<!--Please enter a valid UK phone number-->` }} />
              </div>
              <hr className="border-danger my-4" />
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="emailInput">Email <span className="text-muted">(optional)</span></label>
                <input className="form-control" id="emailInput" type="email" />
                <small className="form-text" id="emailCaption" dangerouslySetInnerHTML={{ __html: `<!--Please ensure the email address you entered is valid-->` }} />
              </div>
              <div className="custom-control custom-checkbox mb-4">
                <input className="custom-control-input" id="newsAndOffersInput" type="checkbox" />
                <label className="custom-control-label" htmlFor="newsAndOffersInput">Please send me news and offers</label>
                <small className="form-text" id="newsAndOffersCaption" dangerouslySetInnerHTML={{ __html: `<!--Please enter a valid email address to receive news and offers-->` }} />
              </div>
              <button className="btn btn-danger btn-block" id="bookingButton" type="button">Book now</button>
            </form>
          </div>
        </div>
      </main>
      <div className="corner-image" id="bottom-left-image"></div>
      <div className="corner-image" id="top-right-image"></div>    
    </>
  )
}

export default PastaHut
