import EmployeeDetails from './EmployeeDetails'
import {useEffect, useState} from 'react'

function Employees(props) {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await fetch(`/employees/department/${props.departmentId}`)
        const employees = await response.json()
        setEmployees(employees)
      } catch (error) {
        console.debug(error)
      }
    }
    fetchEmployees()
  }, [props.departmentId])

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