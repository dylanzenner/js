const task3Element = document.getElementById('task-3');
function func1(){
    alert('woah more JS, cool!')
}

function func2(name){
    alert(name)
}

func1()
func2('JS is the name. Programming is the game')

task3Element.addEventListener('click', func1)

function func3(param1, param2, param3){
    return param1 + param2 + param3

}
alert(func3('This', ' is ', 'easy'))
