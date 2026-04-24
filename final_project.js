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

function render() {
  container.innerHTML = ""

  for (let i = 0; i < index; i++) {
    container.innerHTML += `
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-2">
            <img src="${articles[i].image}" class="img-fluid rounded-start article-img">
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <h5 class="card-title">${articles[i].title}</h5>
              <p class="card-text">
                <small class="text-body-secondary">
                  published at: ${articles[i].time}
                </small>
              </p>
              <p class="card-text">${articles[i].content}</p>
              <button class="btn btn-danger" onclick="deleteArticle(${i})">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

function deleteArticle(pos) {
  for (let i = pos; i < index - 1; i++) {
    articles[i] = articles[i + 1]
  }

  index--

  render()
}
function myFunction() {
  var x = document.getElementById("Password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
