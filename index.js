const http = require(`http`);

// function to get the required day as per the hyperlink
function getDay(day) {
  var date = new Date();
  var today = date.getDay();
  var requiredDay = new Date();
  if (date.getDay() == day) {
    return date.toString();
  } else {
    requiredDay.setDate(date.getDate() - (today - day));
  }

  return requiredDay.toString();
}

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": `text/html` }); // http header
    var url = req.url;
    if (url === `/monday`) {
      res.write(getDay(1)); //write a response
      res.end(); //end the response
    } else if (url === `/tuesday`) {
      res.write(getDay(2)); //write a response
      res.end(); //end the response
    } else if (url === `/wednesday`) {
      res.write(getDay(3)); //write a response
      res.end(); //end the response
    } else if (url === `/thursday`) {
      res.write(getDay(4)); // write a response
      res.end(); //end the response
    } else if (url === `/friday`) {
      res.write(getDay(5)); // write a response
      res.end(); //end the response
    } else if (url === `/saturday`) {
      res.write(getDay(6)); // write a response
      res.end(); //end the response
    } else if (url === `/sunday`) {
      res.write(getDay(0)); // write a response
      res.end(); //end the response
    } else if (url === `/` || url === `/home`) {
      res.write(`<h1>home page</h1>
      <a href='monday'>
      Monday</a>
      <br>
      <a href='tuesday'>
      Tuesday</a>
      <br><a href='wednesday'>
      Wednesday</a>
      <br><a href='thursday'>
      Thursday</a>
      <br><a href='friday'>
      Friday</a>
      <br><a href='saturday'>
      Saturday</a>
      <br><a href='sunday'>
      Sunday</a>
      `); //write a response
      res.end(); //end the response
    } else {
      res.writeHead(404, { "Content-Type": `text/html` }); // http header
      res.end(`<h1>404 Error: Page Does not Exist <h1>`);
    }
  })
  .listen(8000);
