import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { country } from "./action";
import { Row } from "reactstrap";
import { useParams } from "react-router-dom";

const Home = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, stats } = useSelector((state) => ({
    loading: state.HomeReducers.loading,
    stats: state.HomeReducers.stats,
  }));

  useEffect(() => {
    dispatch(country(id));
  }, [dispatch, id]);

  console.log(stats);

  return (
    <>
      {loading ? (
        <div className="loading"> loading....</div>
      ) : (
        <>
          {stats !== null && (
            <Row className="row">
              <div className="inner">
                <ul>
                  {stats.articles.map((article, index) => (
                    <li key={index} className="li">
                      <div className="api">
                        <div className="number">{index + 1}</div>
                        <div className="name">{article.source.name}</div>
                        <br />
                        <div className="descriptionn">
                          {article.description}
                        </div>
                        <div className="readmore">
                          <a href={article.url} target="show1">
                            Read more
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <iframe src="" name="show1" className="iframe"></iframe>
            </Row>
          )}
        </>
      )}
    </>
  );
};
export default Home;
