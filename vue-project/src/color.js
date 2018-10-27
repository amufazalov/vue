//Директива обычный объект
export default {
    //Вызвается при инициализации shadow dom
    //el - элемент к которому привязвается директива
    //bindings - передаваемые свойства
    //vnode - объект вирт дерева в котором будет храниться директива
    bind(el, bindings, vnode){
        console.log('bind')
        el.style.color = 'blue';
    },

    inserted(el, bindings, vnode){
        console.log('inserted')
    },

    updated(el, bindings, vnode, oldVnode){
        console.log('updated');
    },

    componentUpdated(el, bindings, vnode, oldVnode){
        console.log('componentUpdated');
    },

    unbind(){
        console.log('unbind');
    }
}