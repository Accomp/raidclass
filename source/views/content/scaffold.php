<section class="c-section c-section--content">
  <h1>Scaffolding</h1>
  <p>This page is intended to serve as a reference for base scaffolding, showing the foundational styles for each of the listed elements. If an element is not listed here, it will fall back to the default &ldquo;reset&rdquo; styles.</p>
  <h2>Heading</h2>
  <h3>Sub-heading</h3>
  <h4>Tertiary heading</h4>
  <p>Lorem ipsum dolor sit amet, <a href="" title="">consectetur adipiscing</a> elit. Pellentesque sed ligula vitae nunc convallis tincidunt. Nullam justo justo, <strong>vehicula non laoreet in</strong>, iaculis id enim. Etiam elementum, felis ac euismod porttitor, orci nibh malesuada lectus, eget suscipit quam dui id lectus. <em>Nunc non elementum purus</em>. Integer vel magna facilisis, fermentum massa eu, elementum sapien.</p>
  <p>In hac habitasse platea dictumst. Aenean ac erat quis sapien ullamcorper accumsan ac eget ante. Etiam placerat efficitur nisi, vitae euismod libero blandit eu. Nullam vitae tempus libero.</p>
  <h3>Unordered List</h3>
  <ul>
    <li>This is an unordered list item.</li>
    <li>And another list item that may or may not be longer than the previous list item, but definitely longer than the next list item. This should also wrap multiple lines to show the different between line-height spacing and list item spacing.
      <ul>
        <li>This is a nested unordered list item.</li>
      </ul>
    </li>
    <li>This is the last list item.</li>
  </ul>
  <h3>Ordered List</h3>
  <ol>
    <li>This is an ordered list item.</li>
    <li>And another list item that may or may not be longer than the previous list item, but definitely longer than the next list item. This should also wrap multiple lines to show the different between line-height spacing and list item spacing.
      <ol>
        <li>This is a nested ordered list item.</li>
      </ol></li>
    <li>This is the last list item.</li>
  </ol>
  <h3>Description List</h3>
  <dl>
    <div class="u-dg">
      <dt>Description Term</dt>
      <dd>This is a description definition</dd>
    </div><!-- /.u-dg -->
    <div class="u-dg">
      <dt>Description Term</dt>
      <dd>This is a description definition</dd>
    </div><!-- /.u-dg -->
  </dl>
  <h3>Tables</h3>
  <table>
    <caption>Characteristics with positive and negative sides</caption>
    <thead>
      <tr>
        <th>Characteristic</th>
        <th>Negative</th>
        <th>Positive</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Mood</th>
        <td>Sad</td>
        <td>Happy</td>
      </tr>
      <tr>
        <th>Grade</th>
        <td>Failing</td>
        <td>Passing</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Characteristic</th>
        <th>Negative</th>
        <th>Positive</th>
      </tr>
    </tfoot>
  </table>
  <h3>Blockquote</h3>
  <blockquote>
    <p>Wherever smart people work, doors are unlocked.</p>
    <footer>— <cite>Steve Wozniak</cite></footer>
  </blockquote>
  <h3>Images</h3>
  <figure>
    <img src="http://placehold.it/180x180" alt="" />
    <figcaption>This figcaption is supplementary content to the image.</figcaption>
  </figure>
  <h2>Interactive Elements</h2>
  <h3>Forms</h3>
  <form class="l-form">
    <div class="l-form__row l-form-radio">
      <h4>Radio Input</h4>
      <fieldset class="l-form-radio__fieldset">
        <legend class="l-form-radio__legend">The game <cite>Duck Hunt</cite> was originally designed for:</legend>
        <input type="radio" id="dh-coleco" name="duckhunt" checked="checked" value="a" class="l-form-radio__input">
        <label for="dh-coleco" class="l-form-radio__label">ColecoVision</label>
        <input type="radio" id="dh-mac" name="duckhunt" value="b" class="l-form-radio__input">
        <label for="dh-mac" class="l-form-radio__label">Macintosh II</label>
        <input type="radio" id="dh-nes" name="duckhunt" value="c" class="l-form-radio__input">
        <label for="dh-nes" class="l-form-radio__label">Nintendo Entertainment System</label>
        <input type="radio" id="dh-sega" name="duckhunt" value="d" class="l-form-radio__input">
        <label for="dh-sega" class="l-form-radio__label">Sega Genesis</label>
      </fieldset>
    </div><!-- /.l-form__row -->
    <div class="l-form__row">
      <h4>Checkbox Input</h4>
      <fieldset>
        <legend>I am interested in the following (check all that apply):</legend>
        <input type="checkbox" id="sport-hockey" name="sports" value="hockey">
        <label for="sport-hockey">Hockey</label>
        <input type="checkbox" id="sport-football" name="sports" checked="checked" value="football">
        <label for="sport-football">Football</label>
        <input type="checkbox" id="sport-baseball" name="sports" checked="checked" value="baseball">
        <label for="sport-baseball">Baseball</label>
      </fieldset> 
    </div><!-- /.l-form__row -->
    <div class="l-form__row">
      <h4>Text Input</h4>
      <fieldset>
        <legend>Residential Address</legend>
        <label for="residential-name">Name:</label>
        <input type="text" id="residential-name" name="residential-name" placeholder="{full-name}"/>
        <label for="residential-address">Address:</label>
        <input type="text" id="residential-address" name="residential-address" placeholder="{address}" />
        <label for="residential-zip">Postal/Zip Code:</label>
        <input type="text" id="residential-zip" name="residential-address" placeholder="{zip}" />
      </fieldset>
    </div><!-- /.l-form__row -->
    <div class="l-form__row">
      <h4>Textarea</h4>
      <label for="residential-zip">Additional Comments:</label>
      <textarea name="user-comments" id="user-comments" placeholder="{comments}" rows="5"></textarea>
    </div><!-- /.l-form__row -->
    <div class="l-form__row">
      <h4>Select Field</h4>
      <label for="preferred-auto">What is your preferred auto manufacturer? <i class="fa fa-car"></i></label>
      <select name="preferred-auto" id="preferred-auto">
        <option value="auto-ford">Ford</option>
        <option value="auto-honda">Honda</option>
        <option value="auto-nissan" selected>Nissan</option>
        <option value="auto-toyota">Toyota</option>
      </select>
    </div><!-- /.l-form__row -->
    <div class="l-form__row">
      <button>This is a button</button>
    </div><!-- /.l-form__row -->
  </form><!-- /.l-form -->
</section><!-- /.c-section -->