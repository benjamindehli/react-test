Input field example:

```js
<InputField id="textInput1" onChange={()=>{console.log('onchange')}}  />
<InputField id="textInput2" onChange={()=>{console.log('onchange')}} value="InputField with value" />
<InputField id="textInput3" onChange={()=>{console.log('onchange')}} value="InputField with label and value" label="InputField with label and value" />
<InputField id="textInput5" onChange={()=>{console.log('onchange')}} readOnly value="Read only InputField with label and value" label="Read only InputField with label and value" />
<InputField id="textInput5" onChange={()=>{console.log('onchange')}} disabled value="Disabled InputField with label and value" label="Disabled InputField with label and value" />
<InputField id="numberInput1" onChange={()=>{console.log('onchange')}} value="3" label="Number InputField with label and value" type="number" />
```
