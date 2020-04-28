import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singapore } from "./action";
// import { Images } from "../../components";
import { Row } from "reactstrap";

const Singapore = () => {
  const dispatch = useDispatch();
  const { loading, stats } = useSelector((state) => ({
    loading: state.HomeReducers.loading,
    stats: state.HomeReducers.stats,
  }));

  useEffect(() => {
    dispatch(singapore());
  }, [dispatch]);

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
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Row>
          )}
        </>
      )}
    </>
  );
};
export default Singapore;
