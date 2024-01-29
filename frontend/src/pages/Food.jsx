import React, { useEffect, useState } from "react";
import CommonFood from "../components/shared/CommonFood";
import "../styles/tour.css";
import { Container, Row, Col } from "reactstrap";
import FoodCard from "../components/shared/FoodCard";

import Newsletter from "../components/shared/Newsletter";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Food = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: Food, loading, error } = useFetch(`${BASE_URL}/foods?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/foods/search/getFoodCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0,0)
  }, [page, tourCount, Food]);

  return (
    <>
      <CommonFood title={"All Food"} />
     
      <section className="pt-5">
        <Container>
          {
            loading && <h4 className="text-center pt-5">Loading.......</h4>
          }
          {
            error && <h4 className="text-center pt-5">{error}</h4>
          }
          {!loading && !error && (
            <Row>
              {Food?.map((food) => (
                <Col lg="3" className="mb-4" key={food._id}>
                  <FoodCard food={food} />
                </Col>
              ))}
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active_page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Food;
