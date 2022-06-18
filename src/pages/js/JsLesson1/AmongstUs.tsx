import React, { useEffect, useRef } from 'react'
import Particles from 'react-tsparticles'
import type { ISourceOptions } from "tsparticles-engine";
import { loadSlim } from 'tsparticles-slim'

const AmongstUs = () => {
  const tsParticlesOptions: ISourceOptions = {
    particles: {
      color: {
        value: '#888',
      },
      number: {
        density: {
          enable: true,
          area: 25,
        },
        value: 1,
      },
      move: {
        enable: true,
        speed: 1,
      },
      size: {
        value: {
          min: 2,
          max: 3,
        },
      },
    },
  }

  const particlesWrapper = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setImmediate(() => {
      particlesWrapper.current?.classList.add("loaded")
    })
  }, [])

  return (
    <div className="amongst-us d-flex justify-content-center align-items-center">
      <main className="text-light py-5 mx-auto">
        <h1 className="logo-heading display-2 text-center mb-5">Amongst Us</h1>
        <div className="card bg-dark border-light">
          <h5 className="card-header text-center bg-primary border-light text-dark">Create an account</h5>
          <div className="card-body">
            <form>
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="usernameInput">Username</label>
                <input className="form-control bg-dark text-light" id="usernameInput" type="text" />
                <small className="text-primary" id="usernameCaption" dangerouslySetInnerHTML={{ __html: `<!--Sorry, the username _ is already taken-->` }} />
              </div>
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="passwordInput">Password</label>
                <input className="form-control bg-dark text-light" id="passwordInput" type="password" />
                <small className="text-primary" id="passwordCaption" dangerouslySetInnerHTML={{ __html: `<!--Your password needs to be at least 8 characters long-->` }} />
              </div>
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="confirmPasswordInput">Confirm password</label>
                <input className="form-control bg-dark text-light" id="confirmPasswordInput" type="password" />
                <small className="text-primary" id="confirmPasswordCaption" dangerouslySetInnerHTML={{ __html: `<!--Your passwords don't match-->` }} />
              </div>
              <div className="form-check mb-4">
                <input className="form-check-input bg-dark border border-white" id="ageInput" type="checkbox" />
                <label className="form-check-label" htmlFor="ageInput">I am at least 13 years old</label>
                <small className="d-block text-primary" id="ageCaption" dangerouslySetInnerHTML={{ __html: `<!--You must be at least 13 years old to sign up-->` }} />
              </div>
              <button className="btn btn-outline-primary d-block w-100" id="signUpButton" type="button">Sign up</button>
            </form>
          </div>
        </div>
      </main>
      <div className="particles-wrapper" ref={particlesWrapper}>
        <Particles init={loadSlim} options={tsParticlesOptions}/>
      </div>
    </div>
  )
}

export default AmongstUs
