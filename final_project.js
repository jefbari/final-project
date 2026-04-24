let articles = []
let index = 0

let form = document.querySelector("form")
let inputs = document.querySelectorAll("input")
let textarea = document.querySelector("textarea")
let container = document.getElementById("article-section")

form.addEventListener("submit", function(event) {
  event.preventDefault()
  handleSubmit()
})

function handleSubmit() {
  let title = inputs[0].value
  let image = inputs[1].value
  let content = textarea.value

  if (title === "" || image === "" || content === "") {
    alert("Semua field harus diisi")
    return
  }

  let article = {
    title: title,
    image: image,
    content: content,
    time: new Date()
  }

  articles[index] = article
  index++

  render()

  inputs[0].value = ""
  inputs[1].value = ""
  textarea.value = ""
}



