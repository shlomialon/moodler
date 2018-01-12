import {h} from "hyperapp"

export default ({loading, shop}, {init}) =>
  <div class="reminder-container">
      <form id="input-form">
          <input type="text" id="text" placeholder="Course name..."/>
          <input type="submit" value="Add"/>
      </form>

      <div class="container">
          <ul class="reminders">

          </ul>
      </div>

      <footer>

          <div style="font-size: small" class=""><span class="year">© 2017 </span>Elad Keyshawn</div>

      </footer>
  </div>;


