import AddTransaction from "./components/AddTransaction"
import Balance from "./components/Balance"
import EncomeExpensise from "./components/EncomeExpensise"
import Header from "./components/Header"
import TransactionList from "./components/TransactionList"
import "./index.css"
import { GlobalProvider } from "./context/GlobalState"
function App() {

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <EncomeExpensise />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
