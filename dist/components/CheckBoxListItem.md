Check box list item example:

```js
<CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="checkbox" id="checkboxListItem-1">
  Label for checked checkbox
</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} name="checkbox" id="checkboxListItem-2">
  Label for unchecked checkbox
</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="checkbox" id="checkboxListItem-3" contentOnly={true}>
  Label for checked checkbox with content only
</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} name="checkbox" id="checkboxListItem-4" contentOnly={true}>
  Label for unchecked checkbox with content only
</CheckBoxListItem>
```

Themed Check box list item example:
```js
import customTheme from 'data/customTheme';
<React.Fragment>
  <CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="themed-checkbox" id="themed-checkboxListItem-1" theme={customTheme}>
    Label for checked checkbox
  </CheckBoxListItem>
  <CheckBoxListItem onChange={()=>{console.log('onchange')}} name="themed-checkbox" id="themed-checkboxListItem-2" theme={customTheme}>
    Label for unchecked checkbox
  </CheckBoxListItem>
  <CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="themed-checkbox" id="themed-checkboxListItem-3" contentOnly={true} theme={customTheme}>
    Label for checked checkbox with content only
  </CheckBoxListItem>
  <CheckBoxListItem onChange={()=>{console.log('onchange')}} name="themed-checkbox" id="themed-checkboxListItem-4" contentOnly={true} theme={customTheme}>
    Label for unchecked checkbox with content only
  </CheckBoxListItem>
</React.Fragment>
```
