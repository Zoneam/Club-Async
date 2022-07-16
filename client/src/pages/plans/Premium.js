import React, { Fragment, useEffect, useContext, useState } from "react";
import { UserContext } from "../../context";
import axios from "axios";

const Basic = ({ history, match }) => {
  const [state, setState] = useContext(UserContext);
  const [link, setLink] = useState("");

  useEffect(() => {
    let result = "";
    const check = () =>
      (result = state.user.subscriptions[0]
        ? state.user.subscriptions[0].plan.nickname.toUpperCase()
        : "");
    check();

    async function getLink() {
      const link = await axios.get("/getlink");
      setLink(link.data.link);
    }
    getLink();

    const plan = match.path.split("/")[1].toUpperCase(); // premium
    console.log("MATCH", plan, result);
    if (result !== plan) {
      console.log("NO MATCH");
      history.push("/");
    }
  }, [state && state.user]);

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row py-5 bg-light text-center">
          <h1 className="display-4 fw-bold">Your Premium Subscription</h1>
          <p className="lead">Here is your Zoom link</p>
        </div>
      </div>
      {link ? (
        <div>
          <ul class="list-group">
            <a href={link} class="badge badge-info">
              <li class="list-group-item list-group-item-primary">{link}</li>
            </a>
          </ul>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Basic;
