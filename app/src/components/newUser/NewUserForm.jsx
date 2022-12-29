import React from 'react'
import Mensaje from '../../Mensaje'
function NewUser({ handleRegister, ...props }) {
  return (
    <div>
      <Mensaje message='Register' />
      <form onSubmit={handleRegister}>
        <div>
          <input
            className='form_login'
            type='text'
            value={props.username}
            name='username'
            placeholder='username'
            onChange={props.handleUsernameChange}
            required
          />
        </div>
        <div>
          <input
            className='form_login'
            type='email'
            value={props.email}
            name='email'
            placeholder='email'
            onChange={props.handleEmailChange}
            required
          />
        </div>
        <div>
          <input
            className='form_login'
            type='password'
            value={props.password}
            name='password'
            placeholder='password'
            onChange={props.handlePasswordChange}
            required
          />
        </div>
        <button>REGISTER</button>
      </form>
    </div>
  )
}

export default NewUser
