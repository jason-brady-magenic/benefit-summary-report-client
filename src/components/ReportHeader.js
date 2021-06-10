import Address from './Address'

import { useEffect, useState } from 'react';

function ReportHeader(props) {
  const [company, setCompany] = useState(null)

  useEffect(() => {
    async function fetchCompany() {
      try {
        const response = await fetch(`/companies/${props.companyId}`)
        const { company } = await response.json()
        setCompany(company)
      } catch (error) {
        console.debug(error)
      }
    }
    fetchCompany()
  }, [props.companyId])

  const {name, logoName, address} = company ? company : {}

  return (
    <div className="report-header">
      <h1>{name} Insurance Report</h1>
      <p>Date: {new Date().toLocaleString() + ''}</p>
      <img className="report-header-logo" alt="company logo" src={`http://localhost:3001/images/${logoName}`} />
      <Address address={address}/>
    </div>
  )
}

export default ReportHeader