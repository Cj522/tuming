function fn(){
    const btn = document.querySelector('#btn')
    const textarea = document.querySelector('textarea')
    const messages = document.querySelector('.messages')

    const value = textarea.value.trim()

    const xhr = new XMLHttpRequest()

    xhr.open('post', 'http://www.tuling123.com/openapi/api')

    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

    xhr.send(`key=2baed7b69598431b8fc4ee9425522de6&info=${value}&userid=335220`)

    xhr.onreadystatechange = function () {
        console.log(11);
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                const result = JSON.parse(xhr.responseText)
                if (result.code === 100000) {
                    const str = `<div class="other">
                                    <h5>骚逼</h5>
                                    <p>${result.text}</p>
                                </div>`
                    messages.innerHTML += str

                }
                if(result.code ===200000){
                    // console.log(xhr.responseText);
                    const result = JSON.parse(xhr.responseText)
                    const str = `<div class="other">
                                    <h5>骚逼</h5>
                                    <a href = '${result.url}'>${result.text}</a>
                                </div>`
                    messages.innerHTML += str
                    
                }
                if(result.code === 300000){

                }
                if(result.code ===  40004){
                    const result = JSON.parse(xhr.responseText)
                    const str = `<div class="other">
                                    <h5>骚逼</h5>
                                    <p>对不起主人，我去卖身赚钱了</p>
                                </div>`
                    messages.innerHTML += str
                }

                if (result.code === 40002) {
                    const str = `<div class="other">
                                    <h5>骚逼</h5>
                                    <p>${result.text}</p>
                                </div>`
                    messages.innerHTML += str

                }
                const last = messages.lastElementChild
                last.scrollIntoView()
            }

        }
    }

}