import EmployeeDetails from './EmployeeDetails'
import {useEffect, useState} from 'react'

function Employees(props) {

  const [employees, setEmployees] = useState([])
  const [hasLoadedEmployees, setHasLoadedEmployees] = useState(false)

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await fetch(`/employees/department/${props.departmentId}`)
        const employees = await response.json()
        setEmployees(employees)
        setHasLoadedEmployees(true)
      } catch (error) {
        console.debug(error)
      }
    }
    if (props.expand && hasLoadedEmployees === false) {
      fetchEmployees()
    }
  }, [props.departmentId, props.expand, hasLoadedEmployees])

  if (!props.expand) {
    return null
  }

  return (
    <div>
      {employees.map(employee => (
        <EmployeeDetails key={employee.id} {...employee} />
      ))}
    </div>
  )
}

export default Employees