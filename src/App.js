import React from "react";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/EmployeeTable";
// import employees from "./employees.json";
import Main from "./components/EmployeeTable";
import "./App.css";

function App() {
  return (
    <Wrapper>
      <Jumbotron />
      <Main />
    </Wrapper>
  );
}

// export default App;
// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Wrapper>
//           <Route exact path="/" component={About} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/discover" component={Discover} />
//           <Route exact path="/search" component={Search} />
//         </Wrapper>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

export default App;
