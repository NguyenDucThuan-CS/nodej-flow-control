let count = 0;
let success = 0;

const failed = []

const recipients = [
  { name: "John", email: "john@example.com" },
  { name: "Jane", email: "jane@example.com" },
  { name: "Doe", email: "doe@example.com" },
];

function dispatch(recipient, callback) {
 sendMail({
   subject: "Dinner tonight",
   message: "We have lots of carbages on the plate. You coming?",
   smtp: recipient.email,
 }, callback)
}


function final(result) {
   console.log(`Result: ${result.count} attempts \
      & ${result.success} succeeded emails`);
  if (result.failed.length)
    console.log(`Failed to send to: \
        \n${result.failed.join('\n')}\n`);
}


recipients.forEach(function (recipient) {
   dispatch(recipient, function(err) {
      if(!err) {
         success += 1;
      }
      else {
         failed.push(recipient.name)
      }

      count += 1;

      if(count === recipient.length) {
         final({
            count,
            success,
            failed,
         })
      }
   })
})