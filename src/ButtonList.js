import React from 'react'
import { useHistory } from "react-router-dom";

export default function Button({result, showResult}) {
    const history = useHistory();
    return (
        showResult &&
            result.map((data, i) => (
              <div>
                <button type="button"
                onClick={() =>
                    history.push({
                      pathname: `/${data[1]}`,
                      state: {data},
                    })
                  }
                >{data[1]}</button>
              </div>
            ))
    )
}
