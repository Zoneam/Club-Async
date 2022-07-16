import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const linkSubmit = () => {
  const [value, setValue] = useState("");
  const [link, setLink] = useState("");

  useEffect(function () {
    async function getLink() {
      const link = await axios.get("/getlink");
      setLink(link.data.link);
    }
    getLink();
  }, []);

  const submitLink = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/submitlink", {
        value,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success(`${data.link} is added to the database`);
        setLink(data.link);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Try again");
    }
  };

  return (
    <div
      style={{ margin: "20px 20%", display: "flex", flexDirection: "column" }}
    >
      <div className="input-group mb-3">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="form-control"
          placeholder="Zoom Link"
          aria-label="Zoom Link"
        />
        <div className="input-group-append">
          <Link onClick={submitLink}>
            <button className="btn btn-outline-secondary" type="button">
              Submit
            </button>
          </Link>
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
    </div>
  );
};

export default linkSubmit;
