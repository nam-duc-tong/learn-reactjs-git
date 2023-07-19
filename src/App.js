import styles from './App.module.css';

function App() {
  const age = 19;
  return (
   <div className={styles.App}>
    {age>=18 ? <h1>Thit duoc roi</h1>: <h1>Chua thit duoc</h1>}
   </div>
  );
}
export default App;