document.addEventListener('DOMContentLoaded', function() {
    let close = document.getElementById('close')
    let error = document.getElementById('error')
    let begin = document.getElementById('continue')
    let CopyError = document.getElementById('CopyError')
    let CopyMessage = document.getElementById('CopyMessage')
    let back = document.getElementById('back')
    let FrontPage = document.getElementById('FrontPage')
    let NextPage = document.getElementById('NextPage')


    let text;

    function CloseError() {
        error.style.display = "none";
    }

    function ContinueError() {
        FrontPage.style.display = 'none';
        NextPage.style.display = 'block';
    }

    function BackError() {
        FrontPage.style.display = 'block';
        NextPage.style.display = 'none';
    }

    function CopyWindowError() {
        text = 'वेश्या कमबख्त जोकर बैंकों 🤡 मंदबुद्धि बच्चे गधे भाड़ में जाओ मूर्ख डिक गंदगी गधा पूप मदफक बेवकूफ गधा'

        navigator.clipboard.writeText(text)
        .then((response)=>{
            CopyMessage.innerHTML = "Error Copied ✅!"
            CopyMessage.style.display = 'block';

            setTimeout(() => {
                CopyMessage.style.display = "none";
            }, 2000);
        })
        .catch((error)=>{
            return;
        })

    }

    close.addEventListener('click', CloseError)
    begin.addEventListener('click', ContinueError)
    CopyError.addEventListener('click', CopyWindowError)
    back.addEventListener('click', BackError)
})