Radio button input example:

```js
<div className="flex">
<RadioButtonInput onChange={()=>{console.log('onchange')}} inputValue="value 1" name="radio" id="100" checked={true}><span>Checked radio button</span></RadioButtonInput>
<RadioButtonInput onChange={()=>{console.log('onchange')}} inputValue="value 2" name="radio" id="200"><span>Unchecked radio button</span></RadioButtonInput>
</div>
```

Themed Radio button input example:

```js
import customTheme from 'data/customTheme';
<div className="flex">
  <RadioButtonInput onChange={()=>{console.log('onchange')}} inputValue="value 1" name="radio" id="100" checked={true} theme={customTheme}>
    <span>Checked radio button</span>
  </RadioButtonInput>
  <RadioButtonInput onChange={()=>{console.log('onchange')}} inputValue="value 2" name="radio" id="200" theme={customTheme}>
    <span>Unchecked radio button</span>
  </RadioButtonInput>
</div>
```
