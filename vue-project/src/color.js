//Директива обычный объект
export default {
    //Вызвается при инициализации shadow dom
    //el - элемент к которому привязвается директива
    //bindings - передаваемые свойства
    //vnode - объект вирт дерева в котором будет храниться директива
    bind(el, bindings, vnode){
        console.log('bind')
        const arg = bindings.arg; //получаеп :аргумент
        el.style[arg] = bindings.value;
    }
}