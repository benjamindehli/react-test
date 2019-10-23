Radio button list item example:

```js
<div class="flex">
<RadioButtonInput onChange={()=>{console.log('onchange')}} inputValue="value 1" name="radio" id="100" checked={true}><span>Checked radio button</span></RadioButtonInput>
<RadioButtonInput onChange={()=>{console.log('onchange')}} inputValue="value 2" name="radio" id="200"><span>Unchecked radio button</span></RadioButtonInput>
</div>
```
