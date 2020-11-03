Radio button list item example:

```js
<RadioButtonListItem onChange={()=>{console.log('onchange')}} inputValue="value 1" name="radio" id="1000" checked={true}>Checked radio button</RadioButtonListItem>
<RadioButtonListItem onChange={()=>{console.log('onchange')}} inputValue="value 2" name="radio" id="2000">Checked radio button </RadioButtonListItem>
```

Themed Radio button list item example:

```js
import customTheme from 'data/customTheme';
<React.Fragment>
  <RadioButtonListItem onChange={()=>{console.log('onchange')}} inputValue="value 1" name="radio" id="1000" checked={true} theme={customTheme}>
    Checked radio button
  </RadioButtonListItem>
  <RadioButtonListItem onChange={()=>{console.log('onchange')}} inputValue="value 2" name="radio" id="2000" theme={customTheme}>
    Checked radio button
  </RadioButtonListItem>
</React.Fragment>
```
