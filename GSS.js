const button = document.querySelector('button')

button.addEventListener('click', getMethod)

function getMethod() {

  console.log('getMethod go')
  let name = document.querySelector('.name').value
  let time = document.querySelector('.time').value
  let jobName = document.querySelector('.jobName').value

  $.ajax({
    url: "https://script.google.com/macros/s/AKfycby50ecszgvMhc5zuIolKty5AxV8q5zoHRarMecHYdFC9ViH9GgC/exec",
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
