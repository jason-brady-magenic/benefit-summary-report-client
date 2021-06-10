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
    <div className="App-header">
      <div className="report-header-left">
        <img alt="company logo" src={`http://localhost:3001/images/${logoName}`} />
        <Address address={address}/>
      </div>
      <div className="report-header-center">
        <h2>{name} Insurance Report</h2>
      </div>
      <div className="report-header-right">
        <p >{new Date().toLocaleString() + ''}</p>
      </div>
    </div>
  )
}

export default ReportHeader