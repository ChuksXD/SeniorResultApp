import React, { useState} from "react";
import "./App.css";
import readXlsxFile from "read-excel-file";
import { BrowserRouter as Router, Route} from "react-router-dom";
import ButtonList from "./ButtonList";
import ResultDisplay from './ResultDisplay'
import Papa from "papaparse";

function App() {
  const initialValues = {
    passMark: 50,
    outstandingScore: 90,
    excellentScore: 80,
    veryGoodScore: 70,
    goodScore: 60,
    fairScore: 50,
  };
  const [result, setResult] = useState();
  const [showResult, setShowResult] = useState(false);
  const [reload, shouldReload] = useState(false)
  const [filename,setFilename] = useState();
  const [length,setLength] = useState(0)
    const [gradeData, setGradeData] = useState(initialValues);
    const [showGradeSettings, setShowGradeSettings] = useState(false);
    const handleChange = (e) => {
      setGradeData({ ...gradeData, [e.target.name]: e.target.value });
    };
  const onFileChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      alert("No file selected. Please upload a file.");
      return;
    }

    const file = e.target.files[0];
    const fileExtension = file.name.split(".").pop().toLowerCase();
    console.log(fileExtension);

    if (fileExtension === "xlsx") {
      // Handle XLSX file
      readXlsxFile(file)
        .then((rows) => {
          processRows(rows, file);
        })
        .catch((error) => {
          console.error("Error reading XLSX file:", error);
          alert("Invalid XLSX file format. Please upload a valid .xlsx file.");
        });
    } else if (fileExtension === "csv") {
      // Handle CSV file
      Papa.parse(file, {
        complete: (result) => {
          const rows = result.data;
          processRows(rows, file);
        },
        error: (error) => {
          console.error("Error reading CSV file:", error);
          alert("Invalid CSV file format. Please upload a valid .csv file.");
        }
      });
    } else {
      alert("Unsupported file format. Please upload a .xlsx or .csv file.");
    }
  };

  const processRows = (rows, file) => {
    const thisResult = [];
    const subjectNames = [];
    let rowIndex;
    const sub_property = ["C.A", "exam", "TotalScore"];
    var value;
    var x;
    var i;
    var newIndex;
    var index;
    var property;

    for (rowIndex = 3; rowIndex <= 50; rowIndex++) {
      if (!rows[rowIndex] ||rows[rowIndex][1] == null) break;
      property = ["S/N", "NAME"];
      value = [];
      newIndex = 0;
      index = 2;
      x = 0;
      i = 0;
      for (let z = 0; z < rows[rowIndex].length; z++) {
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
          const subjectName = [
            rows[1][index],
            rows[1][index + 1],
            rows[1][index + 2]
          ]
            .filter(
              (cell) =>
                cell !== null && cell !== undefined && cell.trim() !== ""
            )
            .join(" ")
            .trim();
          subjectNames.push(subjectName);
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
          property[i] === "NAME" ||
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
    }

    setResult({ students: thisResult, subjects: subjectNames });
    setFilename(file.name.split(/[\s_.]+/));
  };
    
  

  const reloadResult =()=>{
    shouldReload(!reload)
  }

  const handleResultFile = () => {
    if (result) {
      setLength(result.length)
      setShowResult(true);
      setShowGradeSettings(false);
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
            <button
              type="button"
              onClick={() => {
                setShowGradeSettings(!showGradeSettings);
                setShowResult(false);
              }}
            >
              {" "}
              Show Grade Settings
            </button>
          </div>
          <button type="button" onClick={handleResultFile}>
            Generate result Data
          </button>
          <hr/>
          <div className="buttonList">
            <ButtonList result = {result} showResult = {showResult} gradeData={gradeData}/>
          </div>
          {showGradeSettings && (
            <>
              <div className="GradeSetting">
                <p>
                  <label htmlFor="passMark">Enter Pass Mark </label>
                  <input
                    placeholder="enter pass mark"
                    value={gradeData.passMark}
                    name="passMark"
                    id="passMark"
                    type="number"
                    min="0"
                    oninput="validity.valid||(value='')"
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <label htmlFor="outstandingScore">
                    Enter Outstanding Score{" "}
                  </label>
                  <input
                    placeholder="enter outstanding score"
                    value={gradeData.outstandingScore}
                    name="outstandingScore"
                    id="outstandingScore"
                    type="number"
                    min="0"
                    oninput="validity.valid||(value='')"
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <label htmlFor="excellentScore">Enter Excellent Score </label>
                  <input
                    placeholder="enter excellent score"
                    value={gradeData.excellentScore}
                    name="excellentScore"
                    id="excellentScore"
                    type="number"
                    min="0"
                    oninput="validity.valid||(value='')"
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className="GradeSetting">
                <p>
                  <label htmlFor="veryGoodScore">Enter Very Good Score </label>
                  <input
                    placeholder="enter very good score"
                    value={gradeData.veryGoodScore}
                    name="veryGoodScore"
                    id="veryGoodScore"
                    type="number"
                    min="0"
                    oninput="validity.valid||(value='')"
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <label htmlFor="goodScore">Enter Good Score </label>
                  <input
                    placeholder="enter good score"
                    value={gradeData.goodScore}
                    name="goodScore"
                    id="goodScore"
                    type="number"
                    min="0"
                    oninput="validity.valid||(value='')"
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <label htmlFor="fairScore">Enter Fair Score </label>
                  <input
                    placeholder="enter fair score"
                    value={gradeData.fairScore}
                    name="fairScore"
                    id="fairScore"
                    type="number"
                    min="0"
                    oninput="validity.valid||(value='')"
                    onChange={handleChange}
                  />
                </p>
              </div>
            </>
          )}
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

