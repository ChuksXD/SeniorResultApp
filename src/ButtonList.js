import { useState } from 'react'
import { useHistory } from "react-router-dom";

export default function ButtonList({ result, showResult, gradeData, schoolInfo }) {
    const history = useHistory();
    const [search, setSearch] = useState('');

    if (!showResult || !result) return null;

    const filtered = result.students.filter(data =>
        data[1] && data[1].toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                className="student-search"
                placeholder="Search student name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {filtered.length === 0 && <p>No students match your search.</p>}
            {filtered.map((data, i) => (
                <div key={i}>
                    <button
                        type="button"
                        onClick={() =>
                            history.push({
                                pathname: `/${data[1]}`,
                                state: {
                                    data,
                                    gradeData,
                                    subjects: result.subjects,
                                    schoolInfo,
                                },
                            })
                        }
                    >
                        {data[1]}
                    </button>
                </div>
            ))}
        </div>
    );
}
