import { createApp, h, ref } from "vue";
import Dialog from './Dialog.vue'

interface Options {
    title?: string;
    content?: string;
    onHandleOk?: () => void;
    onHandleCancel?: () => void;
}
export const openDialog = (options: Options) => {
    const {title, content, onHandleOk, onHandleCancel} = options
    
    const div = document.createElement("div")
    document.body.appendChild(div)

    const close = () => {
        app.unmount()
        div.remove
    }

    const app = createApp({
        render(){
            return h(Dialog, {
                visible: true,
                title,
                "onUpdate:visible": (newVisible: boolean) => {
                    if(newVisible === false){
                        close()
                    }
                },

                // 事件监听器应以 onXxx 的形式书写
                onHandleOk,
                onHandleCancel,
            },{default: () => h("div", {innerHTML:content})})
        }
    })
    app.mount(div)
    
}