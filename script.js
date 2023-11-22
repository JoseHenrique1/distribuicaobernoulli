let ctx = document.getElementById('chart');

function handleLoadGraphic(sample, success) {
    ctx.remove();
    ctx = document.createElement('canvas');
    ctx.setAttribute("id", "chart");
    document.querySelector("#divchart").appendChild(ctx);
    ctx = document.querySelector("#chart");
    

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sucesso', 'Fracasso'],    
            datasets: [{
                label: '# of Votes',
                borderColor: '#ffffff',
                backgroundColor: ['#38b010', '#ff4000'],
                data: [ success/sample, (sample - success)/sample],
                borderWidth: 1
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function refreshCanva() {
    
}

let form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let success = Number(e.target.sucesso.value);
    let sample = Number(e.target.amostral.value);
    if (sample <= 0) {
        alert("Espaço amostral não pode ter tamanho 0 ou ser negativo");
    }
    else if (success < 0) {
        alert("A quantidade de sucesso nao pode ser negativa")
    }
    else if (success > sample) {
        alert('A quantidade de sucesso não pode ser maior que o espaço amostral')
    }
    else {
        handleLoadGraphic(sample, success);
    }

})