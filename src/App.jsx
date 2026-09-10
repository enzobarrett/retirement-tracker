import "./App.css";
import accounts from "./Accounts";

const MAX_VALUE = 6000;

function App() {
  return (
    <main className="app">
		  <h1 className="title">The challenge is on!</h1>
      <div className="competition">
        {accounts.map((account) => (
          <div className="competitor" key={account.name}>
            <div
              className="bar"
              style={{
                height: `${(account.value / MAX_VALUE) * 100}vh`,
                backgroundColor: account.color,
              }}
            >
              <div className="bar-top">
                <img
                  className="character"
                  src={account.image}
                  alt=""
                />

                <span className="value">
                  ${account.value.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;