import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCompanyDetail } from '../actions/companyActions'
import {Container, Col, Card} from "react-bootstrap";

const CompanyDetail = () => {

    // catch id

     const { id } = useParams()
     const dispatch = useDispatch()
     const companyDetails = useSelector(state => state.detailsCompany)

     const { company, loading, error,success} = companyDetails;

     console.log(companyDetails)
     
     useEffect(() => {
       dispatch(getCompanyDetail(id))
     }, [id,dispatch])
     

  return (
    <div>
         <Container
        fluid
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "70%",
          margin: "20px auto",
          justifyContent: "center",
        }}
      >
          <Card style={{padding:"20px"}}>
       <Col>
       <p>{id}</p>
        <p>{company.name}</p>
        <p>{company.company_name}</p>
        <p>{company.budget}</p>
        <p>{company.company_type}</p>
        <p>{company.category}</p>
       </Col>
       </Card>
        </Container>
    </div>
  )
}

export default CompanyDetail