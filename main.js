// Sample functions to be executed
function function1(args, callback) {
   console.log("Executing function 1 with args:", args);
   // Simulate async operation
   setTimeout(() => {
     callback("Result from function 1");
   }, 1000);
 }
 
 function function2(args, callback) {
   console.log("Executing function 2 with args:", args);
   // Simulate async operation
   setTimeout(() => {
     callback("Result from function 2");
   }, 1000);
 }
 
 function function3(args, callback) {
   console.log("Executing function 3 with args:", args);
   // Simulate async operation
   setTimeout(() => {
     callback("Result from function 3");
   }, 1000);
 }
 
 // Arguments for each function
 const args1 = [1, 2];
 const args2 = [3, 4];
 const args3 = [5, 6];
 
 // Array of operations
 const operations = [
   { func: function1, args: args1 },
   { func: function2, args: args2 },
   { func: function3, args: args3 },
 ];
 
 function excuteFunctionWithArgs(operation, callback) {
   const { func, args } = operation;
   
   func(args, callback);
 }


 function serialProcedure(operation) {
   if(!operation) return;

   excuteFunctionWithArgs(operation, (result) => {
      serialProcedure(operations.shift());
   });
 }

 serialProcedure(operations.shift());
