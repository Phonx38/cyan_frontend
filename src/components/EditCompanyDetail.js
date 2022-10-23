import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

import {
  getCompanyDetail,
  updateCompanyDetail,
} from "../actions/companyActions";

const EditCompanyDetail = () => {
  const { id } = useParams();

  const [formValue, setFormValue] = useState({
    name: "",
    companyName: "",
    type: "",
    category: "",
    budget: 0,
    num: 0,
  });
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const companyDetails = useSelector((state) => state.detailsCompany);
  const { company, loading, error, success } = companyDetails;

  const companyUpdatedData = useSelector((state) => state.updateCompany);
  const {
    company: updatedCompany,
    success: updatedSuccess,
    error: updateError,
  } = companyUpdatedData;

  console.log(company);

  useEffect(() => {
    dispatch(getCompanyDetail(id));

    formValue.name = company.name;
    formValue.companyName = company.company_name;
    formValue.type = company.company_type;
    formValue.category = company.category;
    formValue.budget = company.budget;
    formValue.num = company.mobile_num;
  }, [
    company.budget,
    company.category,
    company.company_name,
    company.company_type,
    company.mobile_num,
    company.name,
    dispatch,
    id,
  ]);

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(validationForm(formValue));
    setIsSubmit(true);

    if (Object.keys(formError).length === 0 && isSubmit) {
      const formData = new FormData();
      formData.append("name", formValue.name);
      formData.append("company_name", formValue.companyName);
      formData.append("mobile_num", formValue.num);
      formData.append("budget", formValue.budget);
      formData.append("company_type", formValue.type);
      formData.append("category", formValue.category);

      dispatch(updateCompanyDetail(id, formData));

      navigate("/");
      alert("Company Updated!!");
    }
  };

  const validationForm = (value) => {
    const errors = {};
    var regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (!value.num || !regex.test(value.num)) {
      errors.num = "Please enter valid mobile number";
    }
    if (value.budget < 2000) {
      errors.budget = "Budget should be more that $2000 ";
    }

    return errors;
  };

  return (
    <div>
      <Container style={{ width: "100%" }}>
        <Card style={{ padding: "20px", margin: "0 auto", width: "70%" }}>
          <Card.Title>Update Company</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                disabled
                value={formValue.name}
                type="text"
                required
                placeholder="Enter name"
                onChange={handleValidation}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicComapnyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                name="companyName"
                disabled
                value={formValue.companyName}
                type="text"
                required
                placeholder="Enter company name"
                onChange={handleValidation}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                name="num"
                placeholder="Enter Mobile number"
                value={formValue.num}
                type="number"
                required
                placeholder="Enter Mobile number"
                onChange={handleValidation}
              />
              <Form.Text style={{ color: "red" }}>{formError.num}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicBudget">
              <Form.Label>Budget</Form.Label>
              <Form.Control
                name="budget"
                value={formValue.budget}
                type="number"
                required
                placeholder="Enter budget"
                onChange={handleValidation}
              />
              <Form.Text style={{ color: "red" }}>{formError.budget}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSelect">
              <Form.Label>Company Type</Form.Label>
              <Form.Control
                name="type"
                as="select"
                value={formValue.type}
                onChange={handleValidation}
              >
                <option value="DISTRIBUTOR">Distributor</option>
                <option value="PRODUCTION">Production</option>
                <option value="STORE">Store</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSelect">
              <Form.Label>Category</Form.Label>
              <Form.Control
                name="category"
                as="select"
                value={formValue.category}
                onChange={handleValidation}
              >
                <option value="GROCERIES">Groceries</option>
                <option value="ELECTRONICS">Electronics</option>
                <option value="STATIONERY">Stationery</option>
                <option value="FURNITURE">Furniture</option>
                <option value="CONSTRUCTION">Construction</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Update Company
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default EditCompanyDetail;
