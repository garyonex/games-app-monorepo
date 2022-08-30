import Togglable from './Togglable'
import PropTypes from 'prop-types'

export default function LoginForm({ handleSubmit, ...props }) {
  return (
    <Togglable buttonLabel='LOGUEATE'>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className='form_login'
            type='text'
            value={props.username}
            name='Username'
            placeholder='Username'
            onChange={props.handleUsernameChange}
          />
        </div>
        <div>
          <input
            className='form_login'
            type='password'
            value={props.password}
            name='Password'
            placeholder='Passsword'
            onChange={props.handlePasswordChange}
          />
        </div>
        <button>LOGIN</button>
      </form>
    </Togglable>
  )
}
LoginForm.prototype={
  handleSubmit: PropTypes.func.isRequired,
  username:PropTypes.string

}