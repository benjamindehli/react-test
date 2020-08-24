Checkbox input example:

```js
<div className="flex">
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-1" checked={true}><span>Label for checked checkbox</span></CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-2"><span>Label for unchecked checkbox</span></CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-3" checked={true} contentOnly={true}><span>Checked checkbox with content only</span></CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-4" contentOnly={true}><span>Unchecked checkbox with content only</span></CheckBoxInput>
</div>
```
