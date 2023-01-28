'use strict'

let datas = [
    {
        id:1,
        desc:'Create a video for youtube',
        complated: false
    },
    {
        id:2,
        desc:'Yeni data',
        complated: true
    },
    {
        id:3,
        desc:'Write a blog about new trends',
        complated: false
    },
    {
        id:4,
        desc:'Yeni data',
        complated: true
    },
    {
        id:5,
        desc:'Create a video for youtube',
        complated: false
    }
]

let ul = document.getElementById('datas');

// console.log(datas[datas.length-1].id+1)
function lastId(){
    return datas[datas.length-1].id+1;
}

function filter(param){
    let child = ul.children;
    let index = 0;
    while(child.length > index){
        child = ul.children;
        child[index].remove()
    }
    if(param == 'all'){
        for(let i of datas){
            var data = `
                <li>
                    <input type="checkbox">
                    <p>${i.desc}</p>
                </li>
            `
            ul.insertAdjacentHTML('beforeend', data)
        }
    }
    else if(param == 'pending'){
        for(let i of datas){
            if(!i.complated){
                var data = `
                    <li>
                        <input type="checkbox">
                        <p>${i.desc}</p>
                    </li>
                `
                ul.insertAdjacentHTML('beforeend', data)
            }
        }
    }
    else{
        for(let i of datas){
            if(i.complated){
                var data = `
                    <li>
                        <input type="checkbox">
                        <p>${i.desc}</p>
                    </li>
                `
                ul.insertAdjacentHTML('beforeend', data)
            }
        }
    }
}

function add(){
    let input = document.getElementById('newTask');
    var data = `
    <li>
        <input type="checkbox">
        <p>${input.value}</p>
    </li>
    `
    ul.insertAdjacentHTML('beforeend', data);
    datas.push({id: lastId(), desc: input.value, complated: false})
    input.value = '';
    console.log(datas)
}


for(let i of datas){
    var data = `
        <li>
            <input type="checkbox">
            <p>${i.desc}</p>
        </li>
    `
    ul.insertAdjacentHTML('beforeend', data)
}