import Togglable from './Togglable'
import PropTypes from 'prop-types'

export default function LoginForm({ handleSubmit, ...props }) {
  return (
    <Togglable buttonLabel='LOGUEATE'>
      <form onSubmit={handleSubmit}>
        <div id='usernameLogin' className='form-group'>
          <input
            className='form-control'
            type='text'
            value={props.username}
            name='Username'
            placeholder='Your username'
            onChange={props.handleUsernameChange}
            w
          />
        </div>
        <div id='passwordLogin' className='form-group'>
          <input
            className='form-control'
            type='password'
            value={props.password}
            name='Password'
            placeholder='Passsword'
            onChange={props.handlePasswordChange}
          />
        </div>
        <button className='btn btn-danger mt-2 mb-2'>LOGIN</button>
      </form>
    </Togglable>
  )
}
// para documentar al momento de hacer el test sea ma facilidentificarl
LoginForm.prototype = {
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string,
}
