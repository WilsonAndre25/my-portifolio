


const btn = document.getElementById('menuButton');
const sidebar=document.getElementById('sidebar');

// button is a cross if class is 'cross'
// button is a burger if class is 'burger'

btn.addEventListener('click',function(){
    const btnClassList=btn.classList;
    const sidebarClassList=sidebar.classList;

if(btnClassList.contains('cross')){
btnClassList.remove('cross');
btnClassList.add('burger');


sidebarClassList.remove('visible');
sidebarClassList.add('hidden');


}else {
    btnClassList.remove('burger');
    btnClassList.add('cross');

    sidebarClassList.remove('hidden')
    sidebarClassList.add('visible');
}
});

