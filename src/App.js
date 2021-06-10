import ReportHeader from './components/ReportHeader'
import CompanyCost from './components/CompanyCost'
import Departments from './components/Departments'

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [companyId, setCompanyId] = useState(0)
  const [companies, setCompanies] = useState([])

  async function fetchCompanies() {
    try {
      const response = await fetch('/companies')
      const { companies } = await response.json()
      setCompanies(companies)
      setCompanyId(companies[0].id)
    } catch (error) {
      console.debug(error)
    }
  }

  useEffect(() => {
    fetchCompanies()
  }, [])

  return (
    <div className="App">
      <select id="company" value={companyId} onChange={e => setCompanyId(e.target.value)}>
        {companies.map(company => (
          <option key={company.id} value={company.id}>{company.name}</option>
        ))}
      </select>
      <ReportHeader companyId={companyId}/>
      <CompanyCost companyId={companyId}/>
      <Departments companyId={companyId}/>
    </div>
  );
}

export default App;
