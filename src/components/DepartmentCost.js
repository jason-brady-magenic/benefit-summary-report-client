import Employees from './Employees'
import { useEffect, useState } from 'react'

function DepartmentCost(props) {
  const [insuranceCosts, setInsuranceCosts] = useState({})
  const [expand, setExpand] = useState(false)

  useEffect(() => {
    async function fetchDepartmentCosts() {
      try {
        const response = await fetch(`/insuranceCosts/department/${props.id}`)
        const insuranceCosts = await response.json()
        setInsuranceCosts(insuranceCosts)
      } catch (error) {
        console.debug(error)
      }
    }
    fetchDepartmentCosts()
  }, [props.id])

  const {totalCostOfInsurance, totalPaidByDepartment, totalPaidByEmployees} = insuranceCosts

  return (
    <div>
      <table>
        <caption>Insurance Cost for the {props.name} Department</caption>
        <tbody>
          <tr>
            <th>Total Cost of Insurance</th>
            <th>Total Paid by Employees</th>
            <th>Total Paid by Department</th>
          </tr>
          <tr>
            <td>{totalCostOfInsurance}</td>
            <td>{totalPaidByEmployees}</td>
            <td>{totalPaidByDepartment}</td>
          </tr>
        </tbody>
      </table>
      <Employees expand={expand}/>
    </div>
  )
}

export default DepartmentCost