import EmployeeDetails from './EmployeeDetails'
import {useEffect, useState} from 'react'

function Employees(props) {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await fetch(`/employees/department/${props.departmentId}`)
        const employees = await response.json()
        setDepartments(employees)
      } catch (error) {
        console.debug(error)
      }
    }
    fetchDepartments()
  }, [props.departmentId])

  return (
    <div>
      {Employees.map(employee => (
        <EmployeeDetails key={employee.id} {...employee} />
      ))}
    </div>
  )
}

export default Employees