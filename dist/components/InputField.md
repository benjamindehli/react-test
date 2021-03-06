Input field example:

```js
<InputField id="textInput1" onChange={()=>{console.log('onchange')}} mandatory={true}  />
<InputField id="textInput2" onChange={()=>{console.log('onchange')}} value="InputField with value" />
<InputField id="textInput3" onChange={()=>{console.log('onchange')}} value="InputField with label and value" label="InputField with label and value" />
<InputField id="textInput4" onChange={()=>{console.log('onchange')}} value="InputField with link in label" label={['InputField with ', <a key="labelLink" href="#">link</a>, ' in label']} />
<InputField id="textInput5" onChange={()=>{console.log('onchange')}} value="InputField with label, value, errors and error message" label="InputField with label, value, errors and error message" hasErrors={true} errorMessage="Wrong value" />

<InputField id="textInput6" onChange={()=>{console.log('onchange')}} readOnly value="Read only InputField with label and value" label="Read only InputField with label and value" />
<InputField id="textInput7" onChange={()=>{console.log('onchange')}} disabled value="Disabled InputField with label and value" label="Disabled InputField with label and value" />
<InputField id="numberInput1" onChange={()=>{console.log('onchange')}} value="3" label="Number InputField with label and value" type="number" />
<InputField id="textInput7" onChange={()=>{console.log('onchange')}} value="Value for inputField" label="InputField with label, value and contentOnly set to true" contentOnly={true} />
<InputField id="textInput8" onChange={() => {console.log('onChange')}} label="InputField without value, contentOnly set to true and defaultContent" contentOnly={true} defaultContent="Please insert a value" />
<InputField id="fileInput1" onChange={()=>{console.log('onchange')}} type="file" label="InputField with label, value and type set to file" />
<InputField id="fileInput1" onChange={()=>{console.log('onchange')}} type="file" label="InputField with label, value, fileName, buttonContent and type set to file" selectedFileName="file.txt" buttonContent="Legg til fil" />
<InputField id="dateInput1" onChange={(date) => console.log("date", date)} type="date" label="Datepicker without value" value="" />
<InputField id="dateInput2" onChange={(date) => console.log("date", date)} type="date" label="Datepicker with value" value="2020-05-10T13:12:04" />
<InputField id="dateInput3" onChange={(date) => console.log("date", date)} type="date" label="Datepicker with value, errors and error message" value="2020-05-10T13:12:04" hasErrors={true} errorMessage="Wrong date value" />
<InputField id="dateInput4" onChange={(date) => console.log("date", date)} type="date" label="Datepicker with value and contentOnly set to true" value="2020-05-10T13:12:04" contentOnly={true} />
<InputField id="dateInput5" onChange={(date) => console.log("date", date)} type="date" label="Datepicker with value for start date" value="2020-05-10T13:12:04" selectsStart startDate="2020-05-10T13:12:04" endDate="2020-05-19T13:12:04" />
<InputField id="dateInput6" onChange={(date) => console.log("date", date)} type="date" label="Datepicker with value for end date" value="2020-05-19T13:12:04" selectsEnd startDate="2020-05-10T13:12:04" endDate="2020-05-19T13:12:04" />
<InputField id="dateInput7" onChange={(date) => console.log("date", date)} type="date" label="Datepicker with defaultContent and contentOnly set to true" contentOnly={true} defaultContent="Please insert a value" />
```

Themed Input field example:

```js
import customTheme from 'data/customTheme';
<React.Fragment>
    <InputField id="themedTextInput4" onChange={()=>{console.log('onchange')}} value="InputField with link in label" label={['InputField with ', <a key="labelLink" href="#">link</a>, ' in label']} theme={customTheme} />
    <InputField id="themedTextInput5" onChange={()=>{console.log('onchange')}} value="InputField with label, value, errors and error message" label="InputField with label, value, errors and error message" hasErrors={true} errorMessage="Wrong value" theme={customTheme} />
    <InputField id="themedFileInput1" onChange={()=>{console.log('onchange')}} type="file" label="InputField with label, value, fileName, buttonContent and type set to file" selectedFileName="file.txt" buttonContent="Legg til fil" theme={customTheme} />
    <InputField id="themedDateInput3" onChange={(date) => console.log("date", date)} type="date" label="Datepicker with value, errors and error message" value="2020-05-10T13:12:04" hasErrors={true} errorMessage="Wrong date value" theme={customTheme} />
</React.Fragment>
```
