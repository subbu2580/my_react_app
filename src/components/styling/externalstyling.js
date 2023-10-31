 
 // import "./external.css"
  import styles from "./externalmodule.css"


  function External(){
    return(
        <div>
         <h1 className="name">what are you doing</h1>
        <h2 className={styles.as}>where are you from</h2>
        </div>
    )
  }
  export default  External;