import { forwardRef, useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'

const Togglable = forwardRef(({ children, buttonLabel ='Valor por defecto del button'}, ref) => {
  const [visible, setVisible] = useState(false)
  // ESTILOS EN LINEA PARA MOSTRAR EL FORMULARIO
  const hideVisible = { display: visible ? 'none' : '' }
  const showVisible = { display: visible ? '' : 'none' }
  const toggleVisibility = () => setVisible(!visible)
  useImperativeHandle(ref, () => {
    return { toggleVisibility }
  })
  return (
    <div>
      <div style={hideVisible}>
        {/* <button onClick={() => setVisible(true)}>{buttonLabel}</button> */}
        <button onClick={toggleVisibility}>{buttonLabel}</button>
      </div>
      <div style={showVisible}>
        {children}
        <button onClick={toggleVisibility}>Cancel</button>
      </div>
    </div>
  )
})
// como le estaqmos pasando la referencia al momento de un error podemos darle el verdadero nombre desde aqui
Togglable.displayName = 'Togglable'
// eso es par aayudarnos a saber si un elemento es requerido y como debemos pasarle al componente para poder utilizarlo de la mejor forma
Togglable.propTypes = {
  buttonLabel: PropTypes.string
}
export default Togglable
