const fs = require('fs');

fs.rmdir('novaPasta', {recursive:true}, err=>{
    if(err) throw err;
    console.log('Pasta excluída');
});