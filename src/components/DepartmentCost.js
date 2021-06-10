import { useEffect, useState } from 'react'

function DepartmentCost(props) {
  const [insuranceCosts, setInsuranceCosts] = useState({})

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
      </table>
    </div>
  )
}

export default DepartmentCost