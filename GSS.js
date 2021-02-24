const button = document.querySelector('button')

button.addEventListener('click', getMethod)

function getMethod() {

  console.log('getMethod go')
  let name = document.querySelector('.name').value
  let time = document.querySelector('.time').value
  let jobName = document.querySelector('.jobName').value

  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwlZVY2oY8XpgZggvJnmHG2nOrVzK50MN4e8wmN97Y5pYNLVMtrG7huZQ/exec",
    data: {
      "name": name,
      "time": time,
      "jobName": jobName
    },
    success: function (response) {
      if (response == "成功") {
        alert("成功");
      }
    },
  });


}