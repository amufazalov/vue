//Директива обычный объект
export default {
    //Вызвается при инициализации shadow dom
    //el - элемент к которому привязвается директива
    //bindings - передаваемые свойства
    //vnode - объект вирт дерева в котором будет храниться директива
    bind(el, bindings, vnode){
        const fontModifier = bindings.modifiers['font']

        if(fontModifier){
            el.style.fontSize = '60px';
        }

        let delay = 0;
        const delayModifier = bindings.modifiers['delay']
        if(delayModifier){
            delay = 2000;
        }

        setTimeout(() => {
            const arg = bindings.arg; //получаеп :аргумент
            el.style[arg] = bindings.value;
        }, delay)
    }
}