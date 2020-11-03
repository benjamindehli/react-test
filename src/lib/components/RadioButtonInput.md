Radio button input example:

```js
<div className="flex">
<RadioButtonInput onChange={()=>{console.log('onchange')}} inputValue="value 1" name="radio-button-input" id="radio-button-input-1" checked={true}><span>Checked radio button</span></RadioButtonInput>
<RadioButtonInput onChange={()=>{console.log('onchange')}} inputValue="value 2" name="radio-button-input" id="radio-button-input-2"><span>Unchecked radio button</span></RadioButtonInput>
</div>
```

Themed Radio button input example:

```js
import customTheme from 'data/customTheme';
<div className="flex">
  <RadioButtonInput onChange={()=>{console.log('onchange')}} inputValue="value 1" name="themed-radio-button-input" id="themed-radio-button-input-1" checked={true} theme={customTheme}>
    <span>Checked radio button</span>
  </RadioButtonInput>
  <RadioButtonInput onChange={()=>{console.log('onchange')}} inputValue="value 2" name="themed-radio-button-input" id="themed-radio-button-input-2" theme={customTheme}>
    <span>Unchecked radio button</span>
  </RadioButtonInput>
</div>
```
