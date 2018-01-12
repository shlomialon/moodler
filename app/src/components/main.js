import {h} from "hyperapp"

export default ({loading, courseList, typeBox}, {init, setTypeBoxValue, saveCourse, deleteCourse}) =>
  <div class="reminder-container" oncreate={init}>
      <input oncreate={element => element.focus()} oninput={e => setTypeBoxValue(e.target.value)} type="text"
             placeholder="Course name..." value={typeBox}
             onkeyup={e => {e.keyCode === 13 ? saveCourse() : null}}/>
      <input type="submit" value="Add" onclick={saveCourse}>Add</input>

      <div class="container">
          <ul class="reminders">

              {
                  courseList.map((course, idx) => {
                      return <li class="new-item" id={idx}> {course}

                          <button onclick={deleteCourse.bind(null, idx)}
                                  class="icon-trash delete-button"/>
                      </li>
                  })
              }

          </ul>
          {
              !courseList.length ? <h3>No courses added yet.</h3> : null
          }

      </div>
  </div>;


