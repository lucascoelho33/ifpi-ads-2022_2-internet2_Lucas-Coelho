

function app(){

    const btn_calculate = document.getElementById('btn_calculate')
    const input_weight = document.getElementById('weight')
    const input_height = document.getElementById('height')

    const result = document.getElementById('result')
    const bmi_span = document.getElementById('bmi')


    btn_calculate.onclick = () => {
        const weight = Number(input_weight.value)
        const height = Number(input_height.value)

        const bmi = weight / (height*height)        

        bmi_span.innerHTML = bmi.toFixed(1)
        
        const my_h1 = document.createElement('h1')

        my_h1.innerText = 'Prof. Dr. Bruno Castro'

        bmi_span.appendChild(my_h1)

        result.style.display = 'flex'

        result.classList.add('visivel')

        result.classList.remove('visivel')

        // alert(`BMI: ${bmi.toFixed(1)}`)
    }

}

app()