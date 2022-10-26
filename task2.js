const ReactContent = document.getElementById("root");

const Element = () =>{
    return(
        <div>
            <h2 align="center">FRUITS</h2>
            <ul>
              <li>MANGA</li>
              <li>MUNTHIRI</li>
              <li>NARANGA</li>
              <li>APPLE</li>
              <li>BATHAKKA</li>
            </ul>
        </div>
    )
}
ReactDOM.render(<Element />,ReactContent)