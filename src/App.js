import React, { useState, useEffect } from "react";
import "./App.css";
import readXlsxFile from "read-excel-file";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ButtonList from "./ButtonList";
import ResultDisplay from './ResultDisplay';
import Papa from "papaparse";

function App() {
  const initialGradeValues = {
    passMark: 50,
    outstandingScore: 90,
    excellentScore: 80,
    veryGoodScore: 70,
    goodScore: 60,
    fairScore: 50,
  };

  const defaultSchoolInfo = {
    name: 'Bethel College Aboh Urban',
    location: 'Ezinihitte Mbaise L.G.A Imo State Nigeria',
    principal: '',
  };

  const getStored = (key, fallback) => {
    try {
      const saved = localStorage.getItem(key);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return fallback;
  };

  const stored = getStored('bethel_result', null);

  const [result, setResult] = useState(stored?.result || null);
  const [filename, setFilename] = useState(stored?.filename || null);
  const [length, setLength] = useState(stored?.length || 0);
  const [showResult, setShowResult] = useState(false);
  const [reload, shouldReload] = useState(false);
  const [gradeData, setGradeData] = useState(() => getStored('bethel_gradeData', initialGradeValues));
  const [schoolInfo, setSchoolInfo] = useState(() => getStored('bethel_schoolInfo', defaultSchoolInfo));
  const [showGradeSettings, setShowGradeSettings] = useState(false);
  const [showSchoolSettings, setShowSchoolSettings] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('bethel_gradeData', JSON.stringify(gradeData));
  }, [gradeData]);

  useEffect(() => {
    localStorage.setItem('bethel_schoolInfo', JSON.stringify(schoolInfo));
  }, [schoolInfo]);

  const handleGradeChange = (e) => {
    setGradeData({ ...gradeData, [e.target.name]: e.target.value });
  };

  const handleSchoolChange = (e) => {
    setSchoolInfo({ ...schoolInfo, [e.target.name]: e.target.value });
  };

  const onFileChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setError("No file selected. Please upload a file.");
      return;
    }

    const file = e.target.files[0];
    const fileExtension = file.name.split(".").pop().toLowerCase();

    setError(null);
    setLoading(true);
    setShowResult(false);

    if (fileExtension === "xlsx") {
      readXlsxFile(file)
        .then((rows) => processRows(rows, file))
        .catch(() => {
          setError("Could not read the Excel file. Make sure it is a valid .xlsx file.");
          setLoading(false);
        });
    } else if (fileExtension === "csv") {
      Papa.parse(file, {
        complete: (parsed) => processRows(parsed.data, file),
        error: () => {
          setError("Could not read the CSV file. Make sure it is a valid .csv file.");
          setLoading(false);
        },
      });
    } else {
      setError("Unsupported file format. Please upload a .xlsx or .csv file.");
      setLoading(false);
    }
  };

  const processRows = (rows, file) => {
    try {
      const thisResult = [];
      const subjectNames = [];

      if (!rows[1]) throw new Error("File is missing the header row. Check the file format.");

      // Collect subject names once from header row
      let headerIdx = 2;
      while (rows[1][headerIdx] != null) {
        if (["TOTAL", "AVERAGE", "REMARK"].includes(rows[1][headerIdx])) {
          headerIdx += 1;
        } else {
          const subjectName = [rows[1][headerIdx], rows[1][headerIdx + 1], rows[1][headerIdx + 2]]
            .filter((cell) => cell !== null && cell !== undefined && String(cell).trim() !== "")
            .join(" ")
            .trim();
          subjectNames.push(subjectName);
          headerIdx += 3;
        }
      }

      // Process student rows
      for (let rowIndex = 3; rowIndex <= 50; rowIndex++) {
        if (!rows[rowIndex] || rows[rowIndex][1] == null) break;

        let property = ["S/N", "NAME"];
        let value = [];
        let newIndex = 0;

        for (let z = 0; z < rows[rowIndex].length; z++) {
          value.push(rows[rowIndex][newIndex]);
          newIndex += 1;
        }

        let index = 2;
        while (rows[1][index] != null) {
          if (["TOTAL", "AVERAGE", "REMARK"].includes(rows[1][index])) {
            property.push(rows[1][index]);
            index += 1;
          } else {
            property.push(rows[1][index]);
            index += 3;
          }
        }

        for (let i = 0; i < property.length; i++) {
          if (["TOTAL", "AVERAGE", "REMARK", "POSITION", "NAME", "S/N"].includes(property[i])) {
            property[i] = null;
          } else {
            property[i] = { sub_property: ["C.A", "exam", "TotalScore"] };
          }
        }

        let vi = 0, pi = 0;
        while (vi < value.length && pi < property.length) {
          if (property[pi] === null) {
            property[pi] = value[vi];
            pi++; vi++;
          } else {
            property[pi] = [value[vi], value[vi + 1], value[vi + 2]];
            pi++; vi += 3;
          }
        }

        thisResult.push(property);
      }

      if (thisResult.length === 0) {
        throw new Error("No students found. Make sure you are uploading the correct result sheet.");
      }
      if (subjectNames.length === 0) {
        throw new Error("No subjects found. Make sure you are uploading the correct result sheet.");
      }

      const newResult = { students: thisResult, subjects: subjectNames };
      const newFilename = file.name.split(/[\s_.]+/);
      const newLength = thisResult.length;

      setResult(newResult);
      setFilename(newFilename);
      setLength(newLength);
      setError(null);

      localStorage.setItem('bethel_result', JSON.stringify({
        result: newResult,
        filename: newFilename,
        length: newLength,
      }));

    } catch (e) {
      setError(e.message || "Could not read file. Please check the format and try again.");
      setResult(null);
      setShowResult(false);
      localStorage.removeItem('bethel_result');
    } finally {
      setLoading(false);
    }
  };

  const reloadResult = () => {
    shouldReload(!reload);
  };

  const handleResultFile = () => {
    if (result) {
      setLength(result.students.length);
      setShowResult(true);
      setShowGradeSettings(false);
      setShowSchoolSettings(false);
      reloadResult();
    } else {
      setShowResult(false);
    }
  };

  const closeAllPanels = () => {
    setShowGradeSettings(false);
    setShowSchoolSettings(false);
    setShowResult(false);
  };

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <h1>Result App for Senior Students</h1>
          <h3>Upload Continuous Assessment sheet</h3>
          <div className="toolbar">
            <input type="file" onChange={onFileChange} disabled={loading} />
            <button
              type="button"
              onClick={() => {
                closeAllPanels();
                setShowGradeSettings(!showGradeSettings);
              }}
            >
              Grade Settings
            </button>
            <button
              type="button"
              onClick={() => {
                closeAllPanels();
                setShowSchoolSettings(!showSchoolSettings);
              }}
            >
              School Settings
            </button>
          </div>

          {loading && <p className="status-loading">Reading file...</p>}
          {error && <p className="status-error">{error}</p>}
          {result && !error && (
            <p className="status-success">
              {result.students.length} student{result.students.length !== 1 ? 's' : ''} loaded.
            </p>
          )}

          <button type="button" onClick={handleResultFile}>
            Generate Result Data
          </button>
          <hr />

          <div className="buttonList">
            <ButtonList result={result} showResult={showResult} gradeData={gradeData} schoolInfo={schoolInfo} />
          </div>

          {showGradeSettings && (
            <div className="settings-panel">
              <h4>Grade Settings</h4>
              <div className="GradeSetting">
                <p>
                  <label htmlFor="passMark">Pass Mark</label>
                  <input
                    placeholder="enter pass mark"
                    value={gradeData.passMark}
                    name="passMark"
                    id="passMark"
                    type="number"
                    min="0"
                    onChange={handleGradeChange}
                  />
                </p>
                <p>
                  <label htmlFor="outstandingScore">Outstanding Score</label>
                  <input
                    placeholder="enter outstanding score"
                    value={gradeData.outstandingScore}
                    name="outstandingScore"
                    id="outstandingScore"
                    type="number"
                    min="0"
                    onChange={handleGradeChange}
                  />
                </p>
                <p>
                  <label htmlFor="excellentScore">Excellent Score</label>
                  <input
                    placeholder="enter excellent score"
                    value={gradeData.excellentScore}
                    name="excellentScore"
                    id="excellentScore"
                    type="number"
                    min="0"
                    onChange={handleGradeChange}
                  />
                </p>
              </div>
              <div className="GradeSetting">
                <p>
                  <label htmlFor="veryGoodScore">Very Good Score</label>
                  <input
                    placeholder="enter very good score"
                    value={gradeData.veryGoodScore}
                    name="veryGoodScore"
                    id="veryGoodScore"
                    type="number"
                    min="0"
                    onChange={handleGradeChange}
                  />
                </p>
                <p>
                  <label htmlFor="goodScore">Good Score</label>
                  <input
                    placeholder="enter good score"
                    value={gradeData.goodScore}
                    name="goodScore"
                    id="goodScore"
                    type="number"
                    min="0"
                    onChange={handleGradeChange}
                  />
                </p>
                <p>
                  <label htmlFor="fairScore">Fair Score</label>
                  <input
                    placeholder="enter fair score"
                    value={gradeData.fairScore}
                    name="fairScore"
                    id="fairScore"
                    type="number"
                    min="0"
                    onChange={handleGradeChange}
                  />
                </p>
              </div>
            </div>
          )}

          {showSchoolSettings && (
            <div className="settings-panel">
              <h4>School Settings</h4>
              <div className="GradeSetting">
                <p>
                  <label htmlFor="school-name">School Name</label>
                  <input
                    id="school-name"
                    name="name"
                    type="text"
                    value={schoolInfo.name}
                    onChange={handleSchoolChange}
                  />
                </p>
                <p>
                  <label htmlFor="school-location">Location</label>
                  <input
                    id="school-location"
                    name="location"
                    type="text"
                    value={schoolInfo.location}
                    onChange={handleSchoolChange}
                  />
                </p>
                <p>
                  <label htmlFor="school-principal">Principal's Name</label>
                  <input
                    id="school-principal"
                    name="principal"
                    type="text"
                    placeholder="e.g. Mr. John Doe"
                    value={schoolInfo.principal}
                    onChange={handleSchoolChange}
                  />
                </p>
              </div>
            </div>
          )}
        </Route>

        <Route path="/:name">
          <React.Fragment>
            <ResultDisplay filename={filename} length={length} schoolInfo={schoolInfo} />
          </React.Fragment>
        </Route>
      </div>
    </Router>
  );
}

export default App;
