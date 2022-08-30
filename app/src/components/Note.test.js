import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { UnaNota } from './UnaNota'

test('render content', () => {
  const note = {
    id: '123456',
    title: 'Titulo de test',
    content: 'Contenido desde el test',
  }
  const utils = render(
    <UnaNota id={note.id} title={note.title} content={note.content} />
  )
  //  ? todo esto se leeria. utilizamos el component UnaNota y vamos hacer render de una nota de pruba y quiero que esta se haga correctamente
  //  ? y si se hace correctamente espero que me devuelva alguno de los objetos de la nota , en este caso el content
  //**forma de hacer el test */
  utils.getByText(note.content)
  //** segunda forma de hacerlo */
  //   expect(utils.container).toHaveTextContent(perro)
  //** sino estas seguro puedes usar el debug y ver como esta recibiendo los datos */
//   utils.debug()
})
