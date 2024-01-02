interface Props {
  users: User[]
  colorRows: boolean
}

export function UsersList ({ users, colorRows }: Props) {
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Lastname</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className={colorRows ? 'table--showColors' : ''}>
        {users.map(user => (
          <tr key={user.email}>
            <td><img src={user.picture.thumbnail} /></td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.location.country}</td>
            <td><button>Delete</button></td>
          </tr>
        )
        )}
      </tbody>
    </table>
  )
}
