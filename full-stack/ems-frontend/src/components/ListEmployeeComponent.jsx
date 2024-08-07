import 'bootstrap/dist/css/bootstrap.min.css';
const ListEmployeeComponent = () => {

  const dummyData = [
    {
      "id": 1,
      "firstName": "Ramesh",
      "lastName": "Fadatare",
      "email" : "nandubabubattula@gmail.com"
    },
    {
      "id": 2,
      "firstName": "Ramesh naidu",
      "lastName": "Fadatare naidu",
      "email" : "nandubattula@gmail.com"
    },
    {
      "id": 3,
      "firstName": "Ramesh Babu",
      "lastName": "FadatareBabu",
      "email" : "nandubattulababu@gmail.com"
    },


  ]
  return (
    <div className='container'>
      <h2>List of employees </h2>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee First Name</th>
            <th>Employee Last Name </th>
            <th>Employee Email id</th>
          </tr>
        </thead>
        <tbody>
          {
            dummyData.map(employee =>
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
              </tr>
            )
          }
        </tbody>
      </table>

    </div>
  )
}

export default ListEmployeeComponent