import DepartmentCost from './DepartmentCost'
import {useEffect, useState}  from 'react'

function Departments(props) {
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    async function fetchDepartments() {
      try {
        const response = await fetch(`/departments/company/${props.companyId}`)
        const departments = await response.json()
        setDepartments(departments)
      } catch (error) {
        console.debug(error)
      }
    }
    fetchDepartments()
  }, [props.companyId])

  return (
    <div>
      {departments.map(department => (
        <DepartmentCost key={department.id} {...department}/>
      ))}
    </div>
  )
}

export default Departments