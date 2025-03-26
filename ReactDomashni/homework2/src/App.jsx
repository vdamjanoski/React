import './App.css'
import ListItem from './components/ListItem'
import Parent from './components/Parent'
import UserProfileClass from './components/UserProfileClass'
import UserProfileFunction from './components/UserProfileFunction'

const family = {
  name: "John (Parent)",
  children: [
      {
          name: "Alex (Child)",
          age: 30,
          grandchildren: [
              { name: "Liam (Grandchild)", hobby: "Playing Soccer" },
              { name: "Sophia (Grandchild)", hobby: "Drawing" },
          ],
      },
      {
          name: "Emma (Child)",
          age: 28,
          grandchildren: [{ name: "Noah (Grandchild)", hobby: "Reading" }],
      },
  ],
}

function App() {
  
  return (
     <div className="card-container">
    <UserProfileClass name="Alex" age="23" hobby="Reading" />
      <UserProfileClass name="Noah" age="20" hobby="Writing"/>
      <UserProfileClass name="Sophia" age="19" hobby="Sport"/>
      <UserProfileFunction />
        <ListItem/>
        <Parent name={family.name} children={family.children}/>
      </div> 
  )
}

export default App