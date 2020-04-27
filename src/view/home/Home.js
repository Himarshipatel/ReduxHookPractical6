import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStats } from "./action";
// import { Images } from "../../components";
import { Row, Card, Container } from "reactstrap";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, stats } = useSelector((state) => ({
    loading: state.HomeReducers.loading,
    stats: state.HomeReducers.stats,
  }));

  useEffect(() => {
    dispatch(fetchStats());
  }, [dispatch]);

  console.log(stats);
  return (
    <>
      {loading ? (
        <div>loading....</div>
      ) : (
        <>
          {stats !== null && (
            <Row className="row">
              <ul>
                {stats.articles.map((article, index) => (
                  <li key={index}>{article.source.name}</li>
                ))}
              </ul>
            </Row>
          )}
        </>
      )}
    </>
  );
};

export default Home;
