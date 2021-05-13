const  name=document.getelementById('name')
const  password=document.getelementById('password')
const  form=document.getelementById('form')
const  errorelement=document.getelementById('error')
form.addEventListener('submit',(e)=>{
let message=[]
if(name.value===''||name.value==null){
message.push("name is required")}
if(message.length>0){
e.preventDefault()
errorelement.innerText=message.join(',')
}
})