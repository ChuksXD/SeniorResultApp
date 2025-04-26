import React from 'react'
import { useHistory } from "react-router-dom";

export default function Button({result, showResult, gradeData}) {
    const history = useHistory();
    return (
        showResult &&
            result.students.map((data, i) => (
              <div>
                <button type="button"
                onClick={() =>
                    history.push({
                      pathname: `/${data[1]}`,
                      state: {data,
                        gradeData,
                        subjects: result.subjects,
                      },
                    })
                  }
                >{data[1]}</button>
              </div>
            ))
    )
}
