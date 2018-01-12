import {h} from "hyperapp"

export default ({loading, shop}, {init, setTypeBoxValue, saveCourse}) =>
  <div class="reminder-container" oncreate={init}>
      {/*<form id="input-form">*/}
          <input oncreate={element => element.focus()} oninput={e => setTypeBoxValue(e.target.value)} type="text" placeholder="Course name..."/>
          <input type="submit" value="Add" onclick={saveCourse}>Add</input>
      {/*</form>*/}

      <div class="container">
          <ul class="reminders">

          </ul>
      </div>

      <footer>

          <div style="font-size: small" class=""><span class="year">© 2017 </span>Elad Keyshawn</div>

      </footer>
  </div>;


