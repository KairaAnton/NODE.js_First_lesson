const fs = require("fs");

function readJson() {
  fs.readFile("./user.json", "utf-8", (error, data) => {
    if (error) {
      throw error;
    }
    const arr = JSON.parse(data);
    console.log(arr);

    arr.forEach((obj) => {
      obj.surename = "surename";
    });

    fs.writeFile("./user.json",JSON.stringify(arr),()=>{
     if(error){
         throw error;
     }
    }); 
  });
}

 async function readTest (){ await readJson();}
console.log(readTest());

