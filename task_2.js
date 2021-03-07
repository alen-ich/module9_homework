const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
const data = JSON.parse(jsonString);
const resultObj = {
    list: []
}
  for (let i=0; i < 2; i++){
    const list = data.list[i];
    const studentObj = {
      name: list.name,
      age: Number(list.age),
      prof: list.prof
    };
    resultObj.list.push(studentObj);
 }
  
  console.log('resultObj', resultObj);