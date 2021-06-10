function EmployeeDetails(props) {
  const {id, name, familySize, costPaid} = props

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>EmployeeId</th>
            <th>Employee Name</th>
            <th>Family Size</th>
            <th>Cost Paid by Employee</th>
            <th>Cost Paid by Department</th>
            <th>Total Insurance Cost</th>
          </tr>
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{familySize}</td>
            <td>{costPaid}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeDetails