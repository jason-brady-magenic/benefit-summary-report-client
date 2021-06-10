function Address(props) {
  const {streetNumber, streetName, city, state, zipCode} = props.address ? props.address : {}
  return (
    <div>
      <p>{streetNumber} {streetName}</p>
      <p>{city}, {state}, {zipCode}</p>
    </div>
  )
}

export default Address