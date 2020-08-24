Check box list item example:

```js
<CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="checkbox" id="checkboxListItem-1">Label for checked checkbox</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} name="checkbox" id="checkboxListItem-2">Label for unchecked checkbox</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="checkbox" id="checkboxListItem-3" contentOnly={true}>Label for checked checkbox with content only</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} name="checkbox" id="checkboxListItem-4" contentOnly={true}>Label for unchecked checkbox with content only</CheckBoxListItem>
```
