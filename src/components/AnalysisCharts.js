import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Chart as ChartJs, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";

ChartJs.register(Tooltip, Title, ArcElement, Legend);

const AnalysisCharts = () => {
  const [stores, setStores] = useState(0);
  const [distributors, setDistributors] = useState(0);
  const [productions, setProductions] = useState(0);
  const [groceries, setGroceries] = useState(0);
  const [electronics, setElectronics] = useState(0);
  const [stationeries, setStationeries] = useState(0);
  const [furnitures, setFurnitures] = useState(0);
  const [constructions, setConstructions] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:8000/api/analytics/");
      console.log("data", data);
      setStores(data[0].val);
      setDistributors(data[1].val);
      setProductions(data[2].val);
      setGroceries(data[3].val);
      setElectronics(data[4].val);
      setStationeries(data[5].val);
      setFurnitures(data[6].val);
      setConstructions(data[7].val);
    };
    fetchData();
  }, []);

  return (
    <div style={{ marginTop: "30px" }}>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "70%",
          margin: "20px auto",
          justifyContent: "center",
        }}
      >
        <Row>
          <div style={{ height: "300px", width: "400px" }}>
            <Pie
              data={{
                labels: ["Stores", "Distributors", "Productions"],
                datasets: [
                  {
                    label: "# of Votes",
                    data: [stores, distributors, productions],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                plugins: {
                  datalabels: {
                    formatter: (value, ctx) => {
                      return `${value}%`;
                    },
                  },
                  legend: { position: "top" },
                  title: { display: "flex", text: "CompanyType V/S Budget" },
                },
              }}
            />
          </div>

          <div style={{ height: "300px", width: "400px" }}>
            <Pie
              data={{
                labels: [
                  "Groceries",
                  "Electronics",
                  "Stationeries",
                  "Furnitures",
                  "Constructions",
                ],
                datasets: [
                  {
                    label: "# of Votes",
                    data: [
                      groceries,
                      electronics,
                      stationeries,
                      furnitures,
                      constructions,
                    ],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: { position: "top" },
                  title: { display: "flex", text: "Category V/S Budget" },
                },
              }}
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default AnalysisCharts;
