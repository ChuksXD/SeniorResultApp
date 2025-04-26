import React from 'react'
import  {useLocation} from 'react-router-dom'
import './ResultDisplay.css'

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function ResultDisplay({filename,length}) {
    const location = useLocation();
    const result =location.state.data;
    const subjects = location.state.subjects;
    const gradeData = location.state.gradeData;
    
    
    return (
<table className="tg">
<thead>
  <tr>
    <th className="tg-fuxe" colSpan="12" rowSpan="10">                                    <span style={{fontWeight:"bold",fontSize:"larger", marginLeft: "250px", fontFamily:"monospace"}}>Bethel College Aboh Urban</span><br/>          <br/>                       <span style={{fontWeight:"bold",fontStyle:"italic",fontSize: "smaller",marginLeft: "250px"}}>Ezinihitte Mbaise L.GA Imo State Nigeria</span><br/>  <br/>Report for <p style={{borderBottom:"1.5px currentColor dotted", width:"30%", display:"inline-block" ,marginBottom:"0px"}}><span>{filename[1]}</span> </p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                    Term................  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Year.........<br/>Name of Student: <p style={{borderBottom:"1.5px currentColor dotted", width:"30%", display:"inline-block" ,marginBottom:"0px"}}><span>{result[1]}</span></p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sex  ...................... <br/>Class: <p style={{borderBottom:"1.5px currentColor dotted", width:"30%", display:"inline-block" ,marginBottom:"10px"}}><span>{filename[0]}</span> </p>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                   Admission No: <p style={{borderBottom:"1.5px currentColor dotted", width:"15%", display:"inline-block" ,marginBottom:"10px"}}><span>{result[0]}</span> </p><br/>Class Average Age......................................                                                                      </th>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
</thead>
<tbody>
  <tr>
    <td className="tg-0pky" colSpan="8" rowSpan="2"><br/><span style={{fontWeight:"bold"}}>     KEY TO GRADE:</span><br/></td>
    <td className="tg-0pky" colSpan="2" rowSpan="2" style={{textAlign:"center"}}><span style={{fontWeight:"bold"}}>Social Observation</span><br/><span style={{fontWeight:"bold"}}>&amp;</span><br/><span style={{fontWeight:"bold"}}>General Attitude</span></td>
    <td className="tg-0pky" colSpan="2" rowSpan="2">Key to Rating Scale</td>
  </tr>
  <tr>
  </tr>
  <tr>
  <td className="tg-0pky" colSpan="8" rowSpan="7"><span style={{fontWeight:"bold",textDecoration:"underline"}}>GRADES</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontWeight:"bold",textDecoration:"underline"}}>RANGE OF MARKS</span><br/>Outstanding&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;90% - 100%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>Excellent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;75% - 89%<br/>Very Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;65% - 74%<br/>Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;55% - 64%<br/>Fair&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40% - 54%<br/>Poor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0%&nbsp;&nbsp;- 39%</td>
    <td className="tg-0pky" colSpan="2" rowSpan="7"></td>
    <td className="tg-0pky" colSpan="2" rowSpan="7">5 - Excellent<br/>4 - Good<br/>3 -Fair<br/>2 - Poor<br/>1 - V. Poor</td>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
    <td className="tg-0pky" rowSpan="2"><br/>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontWeight:"bold"}}>Subjects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></td>
    <td className="tg-0pky" rowSpan="2">&nbsp;&nbsp;Test<br/> Score<br/>&nbsp;&nbsp;&nbsp;40%</td>
    <td className="tg-0pky" rowSpan="2">&nbsp;&nbsp;Exam<br/>&nbsp;&nbsp;Score<br/>&nbsp;&nbsp;&nbsp;60%</td>
    <td className="tg-lboi" rowSpan="2">Total<br/></td>
    <td className="tg-lboi" rowSpan="2">Grade<br/></td>
    <td className="tg-lboi" rowSpan="2">Class<br/>Average<br/><br/></td>
    <td className="tg-lboi" rowSpan="2">Position</td>
    <td className="tg-lboi" rowSpan="2">Remarks</td>
    <td className="tg-0pky" colSpan="2" rowSpan="2"></td>
    <td className="tg-lboi" colSpan="2" rowSpan="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rating</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td className="tg-0pky">{toTitleCase(subjects[0])}</td>
    <td className="tg-0pky">{result[2][0]}</td>
    <td className="tg-0pky">{result[2][1]}</td>
    <td className="tg-0pky">{checkIfSubjectWasOffered(result[2][0],result[2][1],result[2][2])}</td>
    <td className="tg-0pky">{checkGrade(result[2][2], gradeData)}</td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky">{checkRemark(result[2][2], gradeData)}</td>
    <td className="tg-0pky" colSpan="2">Regularity</td>
    <td className="tg-0pky" colSpan="2"></td>
  </tr>
  <tr>
    <td className="tg-0pky">{toTitleCase(subjects[1])}</td>
    <td className="tg-0pky">{result[3][0]}</td>
    <td className="tg-0pky">{result[3][1]}</td>
    <td className="tg-0pky">{checkIfSubjectWasOffered(result[3][0],result[3][1],result[3][2])}</td>
    <td className="tg-0pky">{checkGrade(result[3][2], gradeData)}</td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky">{checkRemark(result[3][2], gradeData)}</td>
    <td className="tg-0pky" colSpan="2">Punctuality</td>
    <td className="tg-0pky" colSpan="2"></td>
  </tr>
  <tr>
    <td className="tg-0pky">{toTitleCase(subjects[2])}</td>
    <td className="tg-0pky">{result[4][0]}</td>
    <td className="tg-0pky">{result[4][1]}</td>
    <td className="tg-0pky">{checkIfSubjectWasOffered(result[4][0],result[4][1],result[4][2])}</td>
    <td className="tg-0pky">{checkGrade(result[4][2], gradeData)}</td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky">{checkRemark(result[4][2], gradeData)}</td>
    <td className="tg-0pky" colSpan="2">Assignment</td>
    <td className="tg-0pky" colSpan="2"></td>
  </tr>
  <tr>
    <td className="tg-0pky">{toTitleCase(subjects[3])}</td>
    <td className="tg-0pky">{result[5][0]}</td>
    <td className="tg-0pky">{result[5][1]}</td>
    <td className="tg-0pky">{checkIfSubjectWasOffered(result[5][0],result[5][1],result[5][2])}</td>
    <td className="tg-0pky">{checkGrade(result[5][2], gradeData)}</td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky">{checkRemark(result[5][2], gradeData)}</td>
    <td className="tg-0pky" colSpan="2">Self Control</td>
    <td className="tg-0pky" colSpan="2"></td>
  </tr>
  <tr>
    <td className="tg-0pky">{toTitleCase(subjects[4])}</td>
    <td className="tg-0pky">{result[6][0]}</td>
    <td className="tg-0pky">{result[6][1]}</td>
    <td className="tg-0pky">{checkIfSubjectWasOffered(result[6][0],result[6][1],result[6][2])}</td>
    <td className="tg-0pky">{checkGrade(result[6][2], gradeData)}</td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky">{checkRemark(result[6][2], gradeData)}</td>
    <td className="tg-0pky" colSpan="2">Leadership</td>
    <td className="tg-0pky" colSpan="2"></td>
  </tr>
  <tr>
    <td className="tg-0pky">{toTitleCase(subjects[5])}</td>
    <td className="tg-0pky">{result[7][0]}</td>
    <td className="tg-0pky">{result[7][1]}</td>
    <td className="tg-0pky">{checkIfSubjectWasOffered(result[7][0],result[7][1],result[7][2])}</td>
    <td className="tg-0pky">{checkGrade(result[7][2], gradeData)}</td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky">{checkRemark(result[7][2], gradeData)}</td>
    <td className="tg-0pky" colSpan="2">Obedience</td>
    <td className="tg-0pky" colSpan="2"></td>
  </tr>
  <tr>
    <td className="tg-0pky">{toTitleCase(subjects[6])}</td>
    <td className="tg-0pky">{result[8][0]}</td>
    <td className="tg-0pky">{result[8][1]}</td>
    <td className="tg-0pky">{checkIfSubjectWasOffered(result[8][0],result[8][1],result[8][2])}</td>
    <td className="tg-0pky">{checkGrade(result[8][2], gradeData)}</td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky">{checkRemark(result[8][2], gradeData)}</td>
    <td className="tg-0pky" colSpan="2">Honesty</td>
    <td className="tg-0pky" colSpan="2"></td>
  </tr>
  <tr>
    <td className="tg-0pky">{toTitleCase(subjects[7])}</td>
    <td className="tg-0pky">{result[9][0]}</td>
    <td className="tg-0pky">{result[9][1]}</td>
    <td className="tg-0pky">{checkIfSubjectWasOffered(result[9][0],result[9][1],result[9][2])}</td>
    <td className="tg-0pky">{checkGrade(result[9][2], gradeData)}</td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky">{checkRemark(result[9][2], gradeData)}</td>
    <td className="tg-0pky" colSpan="2">Industry</td>
    <td className="tg-0pky" colSpan="2"></td>
  </tr>
  <tr>
    <td className="tg-0pky">{toTitleCase(subjects[8])}</td>
    <td className="tg-0pky">{result[10][0]}</td>
    <td className="tg-0pky">{result[10][1]}</td>
    <td className="tg-0pky">{checkIfSubjectWasOffered(result[10][0],result[10][1],result[10][2])}</td>
    <td className="tg-0pky">{checkGrade(result[10][2], gradeData)}</td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky">{checkRemark(result[10][2], gradeData)}</td>
    <td className="tg-0pky" colSpan="2">Neatness</td>
    <td className="tg-0pky" colSpan="2"></td>
  </tr>
  <tr>
    <td className="tg-0pky">{toTitleCase(subjects[9])}</td>
    <td className="tg-0pky">{result[11][0]}</td>
    <td className="tg-0pky">{result[11][1]}</td>
    <td className="tg-0pky">{checkIfSubjectWasOffered(result[11][0],result[11][1],result[11][2])}</td>
    <td className="tg-0pky">{checkGrade(result[11][2], gradeData)}</td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky">{checkRemark(result[11][2], gradeData)}</td>
    <td className="tg-0pky" colSpan="2">Rela. with others</td>
    <td className="tg-0pky" colSpan="2"></td>
  </tr>
  <tr>
    <td className="tg-0pky">{toTitleCase(subjects[10])}</td>
    <td className="tg-0pky">{result[12][0]}</td>
    <td className="tg-0pky">{result[12][1]}</td>
    <td className="tg-0pky">{checkIfSubjectWasOffered(result[12][0],result[12][1],result[12][2])}</td>
    <td className="tg-0pky">{checkGrade(result[12][2], gradeData)}</td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky">{checkRemark(result[12][2], gradeData)}</td>
    <td className="tg-0pky" colSpan="2">Class Participation</td>
    <td className="tg-0pky" colSpan="2"></td>
  </tr>
  <tr>
    <td className="tg-0pky">{toTitleCase(subjects[11])}</td>
    <td className="tg-0pky">{result[13][0]}</td>
    <td className="tg-0pky">{result[13][1]}</td>
    <td className="tg-0pky">{checkIfSubjectWasOffered(result[13][0],result[13][1],result[13][2])}</td>
    <td className="tg-0pky">{checkGrade(result[13][2], gradeData)}</td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky">{checkRemark(result[13][2], gradeData)}</td>
    <td className="tg-0pky" colSpan="2">Initiative</td>
    <td className="tg-0pky" colSpan="2"></td>
  </tr>
  <tr>
    <td className="tg-0pky">{toTitleCase(subjects[12])}</td>
    <td className="tg-0pky">{result[14][0]}</td>
    <td className="tg-0pky">{result[14][1]}</td>
    <td className="tg-0pky">{checkIfSubjectWasOffered(result[14][0],result[14][1],result[14][2])}</td>
    <td className="tg-0pky">{checkGrade(result[14][2], gradeData)}</td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky">{checkRemark(result[14][2], gradeData)}</td>
    <td className="tg-0pky" colSpan="2">Games/Sports</td>
    <td className="tg-0pky" colSpan="2"></td>
  </tr>
  <tr>
    <td className="tg-0pky">{toTitleCase(subjects[13])}</td>
    <td className="tg-0pky">{result[15][0]}</td>
    <td className="tg-0pky">{result[15][1]}</td>
    <td className="tg-0pky">{checkIfSubjectWasOffered(result[15][0],result[15][1],result[15][2])}</td>
    <td className="tg-0pky">{checkGrade(result[15][2], gradeData)}</td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky">{checkRemark(result[15][2], gradeData)}</td>
    <td className="tg-0pky" colSpan="2"></td>
    <td className="tg-0pky" colSpan="2"></td>
  </tr>
  <tr>
    <td className="tg-0pky">{toTitleCase(subjects[14])}</td>
    <td className="tg-0pky">{result[16][0]}</td>
    <td className="tg-0pky">{result[16][1]}</td>
    <td className="tg-0pky">{checkIfSubjectWasOffered(result[16][0],result[16][1],result[16][2])}</td>
    <td className="tg-0pky">{checkGrade(result[16][2], gradeData)}</td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky">{checkRemark(result[16][2], gradeData)}</td>
    <td className="tg-0pky" colSpan="2"></td>
    <td className="tg-0pky" colSpan="2"></td>
  </tr>
  <tr>
    <td className="tg-0pky">{toTitleCase(subjects[15])}</td>
    <td className="tg-0pky">{result[17][0]}</td>
    <td className="tg-0pky">{result[17][1]}</td>
    <td className="tg-0pky">{checkIfSubjectWasOffered(result[17][0],result[17][1],result[17][2])}</td>
    <td className="tg-0pky">{checkGrade(result[17][2], gradeData)}</td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky">{checkRemark(result[17][2], gradeData)}</td>
    <td className="tg-0pky" colSpan="2"></td>
    <td className="tg-0pky" colSpan="2"></td>
  </tr>
  <tr>
    <td className="tg-0pky">{toTitleCase(subjects[16])}</td>
    <td className="tg-0pky">{result[18][0]}</td>
    <td className="tg-0pky">{result[18][1]}</td>
    <td className="tg-0pky">{checkIfSubjectWasOffered(result[18][0],result[18][1],result[18][2])}</td>
    <td className="tg-0pky">{checkGrade(result[18][2], gradeData)}</td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky">{checkRemark(result[18][2], gradeData)}</td>
    <td className="tg-0pky" colSpan="2"></td>
    <td className="tg-0pky" colSpan="2"></td>
  </tr>
  <tr>
    <td className="tg-0pky">{toTitleCase(subjects[17])}</td>
    <td className="tg-0pky">{result[19][0]}</td>
    <td className="tg-0pky">{result[19][1]}</td>
    <td className="tg-0pky">{checkIfSubjectWasOffered(result[19][0],result[19][1], result[19][2])}</td>
    <td className="tg-0pky">{checkGrade(result[19][2], gradeData)}</td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky"></td>
    <td className="tg-0pky">{checkRemark(result[19][2], gradeData)}</td>
    <td className="tg-0pky" colSpan="2"></td>
    <td className="tg-0pky" colSpan="2"></td>
  </tr>
  
  <tr>
      
    <td className="tg-0pky" colSpan="12" rowSpan="6">Total Score <p style={{borderBottom:"1.5px currentColor dotted", width:"15%", display:"inline-block" ,marginBottom:"0px"}}><span>{result[20]}</span></p>&nbsp;&nbsp;&nbsp;&nbsp;Out of ............. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Health Report......................................<br/>Student Average <p style={{borderBottom:"1.5px currentColor dotted", width:"15%", display:"inline-block" ,marginBottom:"0px"}}><span>{result[21]}</span></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Form Master's Report..............................<br/>Position <p style={{borderBottom:"1.5px currentColor dotted", width:"15%", display:"inline-block" ,marginBottom:"10px"}}><span>{checkResultGrade(result[21], gradeData)}</span></p>&nbsp;&nbsp;&nbsp;&nbsp;Out of <p style={{borderBottom:"1.5px currentColor dotted", width:"8%", display:"inline-block" ,marginBottom:"10px"}}><span>{length}</span></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hostel Master's Report.....................................<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;G/C Report.............................................<br/><p>Next Term Begins...............................................</p><br/>Form Master's Sign..........................................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Principal's Sign...............</td>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
</tbody>
</table>
    )
}

function checkGrade(score, gradeData) {
  if ((score >= gradeData.outstandingScore) & (score <= 100)) {
    return "Outs";
  } else if (score >= gradeData.excellentScore) {
    return "Exce";
  } else if (score >= gradeData.veryGoodScore) {
    return "V Gd";
  } else if (score >= gradeData.goodScore) {
    return "Good";
  } else if (score >= gradeData.fairScore) {
    return "Fair";
  } else if (score > 0) {
    return "Poor";
  } else {
    return null;
  }
}

function checkResultGrade(score, gradeData){
  if ((score >= gradeData.outstandingScore) & (score <= 100)) {
    return "Outstanding";
  } else if (score >= gradeData.excellentScore) {
    return "Excellent";
  } else if (score >= gradeData.veryGoodScore) {
    return "Very Good";
  } else if (score >= gradeData.goodScore) {
    return "Good";
  } else if (score >= gradeData.fairScore) {
    return "Fair";
  } else {
    return "Poor";
  }
}

function checkRemark(score, gradeData){
  if ((score >= gradeData.passMark) & (score <= 100)) {
    return "Pass";
  } else if (score > 0) {
    return "Fail";
  } else {
    return null;
  }
}

function checkIfSubjectWasOffered(testScore, examScore, totalScore){
  if ((testScore == null) && (examScore == null)){
    return 'NA'
  }
  else {
    return totalScore
  }
}