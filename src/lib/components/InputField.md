Input field example:

```js
<InputField id="textInput1" onChange={()=>{console.log('onchange')}}  />
<InputField id="textInput2" onChange={()=>{console.log('onchange')}} value="InputField with value" />
<InputField id="textInput3" onChange={()=>{console.log('onchange')}} value="InputField with label and value" label="InputField with label and value" />
<InputField id="textInput4" onChange={()=>{console.log('onchange')}} value="InputField with link in label" label={['InputField with ', <a key="labelLink" href="#">link</a>, ' in label']} />
<InputField id="textInput5" onChange={()=>{console.log('onchange')}} readOnly value="Read only InputField with label and value" label="Read only InputField with label and value" />
<InputField id="textInput6" onChange={()=>{console.log('onchange')}} disabled value="Disabled InputField with label and value" label="Disabled InputField with label and value" />
<InputField id="numberInput1" onChange={()=>{console.log('onchange')}} value="3" label="Number InputField with label and value" type="number" />
<InputField id="textInput7" onChange={()=>{console.log('onchange')}} value="Value for inputField" label="InputField with label, value and contentOnly set to true" contentOnly={true} />
```
