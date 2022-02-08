const btn = document.querySelector('.btn')
const boxs = document.querySelectorAll('.box')
const toast = document.querySelector('#toast')
const alertText = document.querySelector('#CopiedTextAlert')

const colorString = ['A','B','C','D','E','F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

btn.addEventListener('click', () => {

    // console.clear()
    
    for(let x = 0; x < boxs.length; x++){

        let hex = '#'

        for(let i = 0; i < 6; i++){

            let random = Math.floor(Math.random() * colorString.length)
            hex += colorString[random]
            // console.log(hex);
        }

        boxs[x].style.background = hex
        boxs[x].innerText = hex
    }
})

boxs.forEach((box) => {
    box.addEventListener('click', () => {
        navigator.clipboard.writeText(box.innerText)
        let storedText = box.innerText
        showToast()
        box.innerText = 'Copied!'
        setTimeout(() => {
            box.innerText = storedText
        }, 1300)
    })

    let showToast = () => {
        toast.classList.add('showToast')
        alertText.innerText = `${box.innerText} Copied to Clipboard`
        setTimeout(() => {
            toast.classList.remove('showToast')
        }, 1300);
    }
})