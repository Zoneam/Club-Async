import React, { Fragment, useEffect, useContext } from "react";
import { UserContext } from "../../context";

const Basic = ({ history, match }) => {
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    let result = '';
    const check = () =>
      result = state.user.subscriptions[0] ? state.user.subscriptions[0].plan.nickname.toUpperCase(): '';
    check();

    const plan = match.path.split("/")[1].toUpperCase(); // premium
    console.log("MATCH", plan, result);
    if (result !== plan) {
      console.log("NO MATCH")
      history.push("/");
    }
  }, [state && state.user]);

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row py-5 bg-light text-center">
          <h1 className="display-4 fw-bold">Your Premium Subscription</h1>
          <p className="lead">Here are your 5 exclusive stocks of this month</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 p-5 rounded bg-dark text-light">
            <ul className="lead">
              <li>Tesla</li>
              <li>Microsoft</li>
              <li>PayPal</li>
              <li>Square</li>
              <li>Alibaba</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4>Market analysis</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ratione pariatur ab unde voluptatem ea, quae veniam
              aperiam sint porro aliquid animi eveniet, culpa id reiciendis vel
              nihil veritatis qui.
            </p>
            <h4>Email support</h4>
            <p>subscriptions@domain.com</p>
            <h4>Help center</h4>
            1300 123 456
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Basic;
