import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DoneRegister from "./pages/DoneRegister";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/cadastro" exact component={Register} />
        <Route path="/concluido" exact component={DoneRegister} />
        <Route path="/home" exact component={Landing} />
        <Route path="/estudar" component={TeacherList} />
        <Route path="/dar-aulas" component={TeacherForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;