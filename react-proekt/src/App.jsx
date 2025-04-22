import { useState } from "react";
import "./App.css";
import Header from "./examples/lecture 8/components/header";
import UserProvider from "./examples/lecture 8/context/userContext";
import ParentCounter from "./examples/lecture 8/components/parentCounter";
import { CounterProvider } from "./examples/lecture 8/context/counterContext";
import { UsersProvider } from "./examples/lecture 8/components/usersProvider";
import { UsersManagmentApp } from "./examples/lecture 8/components/usersManagmentApp";

function App() {
  // const [user] = useState({name: "Michael", age: 30})
  return (
    <>
    {/* <UserProvider>
    <Header/>
    </UserProvider> */}
    {/* <CounterProvider>
      <ParentCounter/>
    </CounterProvider> */}
    <UsersProvider>
      <UsersManagmentApp/>
    </UsersProvider>
    </>
  );
}
export default App;
