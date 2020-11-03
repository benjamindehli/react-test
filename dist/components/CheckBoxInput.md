Checkbox input example:

```js
<div className="flex">
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-1" checked={true}>
  <span>Label for checked checkbox</span>
</CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-2">
  <span>Label for unchecked checkbox</span>
</CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-3" checked={true} contentOnly={true}>
  <span>Checked checkbox with content only</span>
</CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-4" contentOnly={true}>
  <span>Unchecked checkbox with content only</span>
</CheckBoxInput>
</div>
```


Themed Checkbox input example:

```js
import customTheme from 'data/customTheme';
<div className="flex">
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="themed-checkbox" id="themed-checkBoxInput-1" checked={true} theme={customTheme}>
  <span>Label for checked checkbox</span>
</CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="themed-checkbox" id="themed-checkBoxInput-2" theme={customTheme}>
  <span>Label for unchecked checkbox</span>
</CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="themed-checkbox" id="themed-checkBoxInput-3" checked={true} contentOnly={true} theme={customTheme}>
  <span>Checked checkbox with content only</span>
</CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="themed-checkbox" id="themed-checkBoxInput-4" contentOnly={true} theme={customTheme}>
  <span>Unchecked checkbox with content only</span>
</CheckBoxInput>
</div>
```
