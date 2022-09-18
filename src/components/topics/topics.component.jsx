import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Topics = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default Topics;
