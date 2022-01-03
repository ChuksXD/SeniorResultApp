import React, { useState} from "react";
import "./App.css";
import readXlsxFile from "read-excel-file";
import { BrowserRouter as Router, Route} from "react-router-dom";
import ButtonList from "./ButtonList";
import ResultDisplay from './ResultDisplay'

function App() {
  // const [selectedFile, setSelectedFile ] = useState(null)
  const [result, setResult] = useState();
  const [showResult, setShowResult] = useState(false);
  const [reload, shouldReload] = useState(false)
  const [filename,setFilename] = useState();
  const [length,setLength] = useState(0)
  var thisResult = [];
  
  var name
  const onFileChange = (e) => {
    name = e.target.files[0].name.split(/[\s_.]+/)
    
    readXlsxFile(e.target.files[0]).then((rows) => {
      var rowIndex;
      const sub_property = ["C.A", "exam", "TotalScore"];
      var value;
      var x;
      var i;
      var newIndex;
      var index;
      var property;
      for (rowIndex = 3; rowIndex <= 50; rowIndex++) {
        if (rows[rowIndex][1] == null) break;
        property = ["S/N","NAME"];
        value = [];
        newIndex = 0;
        index = 2;
        x = 0;
        i = 0;
        for (let z = 0; z <rows[rowIndex].length; z++) {
          value.push(rows[rowIndex][newIndex]);
          newIndex += 1;
        }
        //To get the column subject headers
        while (rows[1][index] != null) {
          if (
            rows[1][index] === "TOTAL" ||
            rows[1][index] === "AVERAGE" ||
            rows[1][index] === "REMARK"
          ) {
            property.push(rows[1][index]);
            index += 1;
          } else {
            property.push(rows[1][index]);
            index += 3;
          }
        }
        for (let i = 0; i < property.length; i++) {
          if (
            property[i] === "TOTAL" ||
            property[i] === "AVERAGE" ||
            property[i] === "REMARK" ||
            property[i] === "POSITION" ||
            property[i] === "NAME"  ||
            property[i] === "S/N"
          ) {
            property[i] = null;
          } else {
            property[i] = { sub_property };
          }
        }

        while (i < value.length && x < property.length) {
          if (property[x] === null) {
            property[x] = value[i];
            x += 1;
            i += 1;
          } else {
            property[x] = [value[i], value[i + 1], value[i + 2]];
            x += 1;
            i += 3;
          }
        }

        thisResult.push(property);
        // console.log(property)
      }
    });

    setResult(thisResult);
    setFilename(name)
  };

  const reloadResult =()=>{
    shouldReload(!reload)
  }

  const handleResultFile = () => {
    if (result) {
      setLength(result.length)
      setShowResult(true);
      reloadResult()
      

    } else {
      setShowResult(false);
    }
  }

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <h1> Result App for Senior Students</h1>
          <h3> Upload Continuous Assessment sheet</h3>
          <div>
            <input type="file" onChange={onFileChange} />
            {/* <button type="button" onClick={onFileUpload}>Upload</button> */}
            {/* <button onClick={onFileSubmit}>Upload</button> */}
          </div>
          <button type="button" onClick={handleResultFile}>
            Generate result Data
          </button>
          <hr/>
          <div className="buttonList">
            <ButtonList result = {result} showResult = {showResult}/>
          </div>
        </Route>
        <Route path="/:name">
              <React.Fragment>
                <ResultDisplay filename = {filename} length = {length} />
              </React.Fragment>
            </Route>
      </div>
    </Router>
  );
}

export default App;

