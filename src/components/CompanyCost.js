import {useEffect, useState} from 'react'

function CompanyCost(props) {
  const [insuranceCosts, setInsuranceCosts] = useState({})

  useEffect(() => {
    async function fetchCompanyCosts() {
      try {
        const response = await fetch(`/insuranceCosts/company/${props.companyId}`)
        const insuranceCosts = await response.json()
        setInsuranceCosts(insuranceCosts)
      } catch (error) {
        console.debug(error)
      }
    }
    fetchCompanyCosts()
  }, [props.companyId])

  const {totalCostOfInsurance, totalPaidByCompany, totalPaidByEmployees} = insuranceCosts

  return (
    <div>
      <table>
        <caption>Insurance Cost for the Company</caption>
        <tbody>
          <tr>
            <th>Total Cost of Insurance</th>
            <th>Total Paid by Employees</th>
            <th>Total Paid by Company</th>
          </tr>
          <tr>
            <td>{totalCostOfInsurance}</td>
            <td>{totalPaidByEmployees}</td>
            <td>{totalPaidByCompany}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CompanyCost