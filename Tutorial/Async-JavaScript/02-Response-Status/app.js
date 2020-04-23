// Let's make a request object using XMLHttpRequest
const request = new XMLHttpRequest();

// Track the state change 
request.addEventListener('readystatechange',() =>{
    if(request.readyState === 4 && request.status === 200){
        console.log(request , request.responseText);
    } else if(request.readyState === 4){
        console.log('Could Not Fetch The Data');
    }
});
//.open('typeOfRequest' , 'endPoint');

// Request setup
request.open('GET' , 'https://jsonplaceholder.typicode.com/todos/');
// Send the request
request.send();