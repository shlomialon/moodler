import {h} from "hyperapp"

export default ({loading, courseList, typeBox}, {init, setTypeBoxValue, saveCourse, deleteCourse}) =>
    <div class="reminder-container" oncreate={init}>
        <div className={"row"}>
            <center>
                <input oncreate={element => element.focus()} oninput={e => setTypeBoxValue(e.target.value)} type="text"
                       placeholder="הקלד שם הקורס.." value={typeBox}
                       onkeyup={e => {
                           e.keyCode === 13 ? saveCourse() : null
                       }}/>

                <input value={"הוספה"} type="submit" onclick={saveCourse} className={"button-primary"}>
                </input>
            </center>
        </div>
        <div class="container">
            <ul>{
                courseList.map((course, idx) => {
                    return <div class="row" id={idx}>
                        <div class="one-third column">
                            <button onclick={deleteCourse.bind(null, idx)}
                                    class="icon-trash delete-button">הסר
                            </button>
                        </div>
                        <div class="two-thirds column">{course}</div>

                    </div>
                })
            }
                {
                    !courseList.length ? <h3>No courses added yet.</h3> : null
                }
            </ul>
        </div>
    </div>
;


