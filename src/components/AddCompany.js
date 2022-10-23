import React, { useState, useEffect } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addCompany } from "../actions/companyActions";
import validator from "validator";
const AddCompany = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:8000/api/");
      console.log("data", data);
      setCompanies(data);
    };
    fetchData();
  }, []);

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

  //clear data

  const clearData = () => {
    setFormValue({
      name: "",
      companyName: "",
      type: "",
      category: "",
      budget: 0,
      num: 0,
    });
  };

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

      dispatch(addCompany(formData));

      clearData();

      navigate("/");
      alert("Company Added!!");
    }
  };

  const validationForm = (value) => {
    var regex = /^[a-zA-Z ]*$/;
    const errors = {};
    if (!value.name || !regex.test(value.name)) {
      errors.name = "Please enter valid name";
    }
    if (
      !value.companyName ||
      !validator.isAlphanumeric(value.companyName) ||
      companies.some((el) => el.company_name === value.companyName)
    ) {
      errors.companyName =
        "Please enter valid company name or company already exists";
    }
    if (!value.num || !validator.isMobilePhone(value.num)) {
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
          <Card.Title>Add Company</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={formValue.name}
                name="name"
                type="text"
                required
                placeholder="Enter name"
                onChange={handleValidation}
              />
              <Form.Text style={{ color: "red" }}>{formError.name}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicComapnyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                name="companyName"
                value={formValue.companyName}
                type="text"
                required
                placeholder="Enter company name"
                onChange={handleValidation}
              />
              <Form.Text style={{ color: "red" }}>
                {formError.companyName}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                name="num"
                placeholder="Enter Mobile number"
                value={formValue.num}
                type="number"
                required
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
                placeholder="Enter Budget"
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
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default AddCompany;
