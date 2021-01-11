import React from "react";
import {h1,p1,obj1} from "./jumbotron"
function Layout() {

    return (
        <>
 p

            <div class="jumbotron">
  <h1 class="display-4">{h1}</h1>
  <p class="lead">{p1}</p>
  <hr class="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
 </>
    );
}
export default Layout;
