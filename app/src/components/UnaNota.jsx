import { Link } from 'react-router-dom'

export const UnaNota = ({ id, title, content }) => {
  return (
    <div>
      <li>{id}</li>
      <Link to={`/notes/${id}`}>
        {' '}
        <h3>{title}</h3>
      </Link>
      <p>{content}</p>
    </div>
  )
}
 