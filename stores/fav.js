import { defineStore } from "pinia";

export const useFav = defineStore('favs',{
    state:() =>({
        favList: JSON.parse(localStorage.getItem('favs'))  || []
    }),
    actions:{
        persist(){
            localStorage.setItem('favs',JSON.stringify(this.favList))
        },
        addFav(id){
            let indexItem = this.favList.indexOf(id);
            if(indexItem > -1){
                this.favList.splice(indexItem,1)
                this.persist()
            } else {
                this.favList.push(id)
                this.persist()
            }
        },
        toggle(id){
            return this.favList.indexOf(id) > -1
        }
    },
})