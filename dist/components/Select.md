Select example:

```js
<Select id="select1" onChange={()=>{console.log('onchange')}} options={['option 1', 'option 2', {key: 'option 3', value: 'value 3'}]} />
<Select id="select2" onChange={()=>{console.log('onchange')}} label="Select with label" options={['option 1', 'option 2', {key: 'option 3', value: 'value 3'}]} />
<Select id="select2" onChange={()=>{console.log('onchange')}} label="Select with label and selected value" value="value 3" options={['option 1', 'option 2', {key: 'option 3', value: 'value 3'}]} />
<Select id="select2" onChange={()=>{console.log('onchange')}} label={['Select with ', <a key="labelLink" href="#">link</a>, ' in label']} value="value 3" options={['option 1', 'option 2', {key: 'option 3', value: 'value 3'}]} />
<Select id="select2" label="Select with label, selected value and contentOnly set to true" value="value 3" options={['option 1', 'option 2', {key: 'option 3', value: 'value 3'}]} contentOnly={true} />
```
