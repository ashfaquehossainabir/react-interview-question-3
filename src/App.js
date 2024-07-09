import "./styles.css";

export default function App() {
  const myDebounce = (callback, delay) => {
    let timer;
    return function (...args) {
      if(timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback(args);
      }, delay);
    };
  };

  const handleChange = myDebounce((e) => {
    console.log(e.target.value);
  }, 1000);

  return (
    <div className="App">
      <input onChange={handleChange} />
    </div>
  );
}
