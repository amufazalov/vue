//Директива обычный объект
export default {
    //Вызвается при инициализации shadow dom
    //el - элемент к которому привязвается директива
    //bindings - передаваемые свойства
    //vnode - объект вирт дерева в котором будет храниться директива
    bind(el, bindings, vnode){
        console.log('bind')
        //el.style.color = 'blue';
        el.style.color = bindings.value;
    }
}