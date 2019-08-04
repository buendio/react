
  
let store = {
 state : {
   mesage_data : [
   {id:1 , name: 'blb bla bla'},
   {id:2 , name:'cy cy cy'},
   {id:3 , name: 'yo oy oy'},
   {id:4 , name:'1111'},
   ] ,

   dialog_data : [
   {id:1 , name:'vasya'},
   {id:2 , name:'sasha'},
   {id:3 , name:'sveta'},
   {id:4 , name:'yo'},
   ],
   friend : [
   {id:1 , name: 'Vlada'},
   {id:2 , name: 'Karina'},
   {id:3 , name: 'Maksim'},
   ],
   mesage : {
     post: [
     {id:1 , mesage : 'hola'},
     {id:2 , mesage : 'como estas'},
     {id:3 , mesage : 'gracias bien'},   
     ],
     newText : 'hola',
     
   }
 },
callsubscriber (){},
subscriber (observer)  {

          this.callsubscriber = observer;           
 },

 getState() {return this.state},
 


dispatch(action) {
  if ( action.type === 'add' ) {
     let newPost = {
    id: 4,
    mesage: this.state.mesage.newText,
  } 
 
  this.state.mesage.post.push(newPost);
  this.state.mesage.newText='';
  this.callsubscriber();
  }
  else if (action.type==='onChangeText') {
    this.state.mesage.newText=action.addMesage; 
    this.callsubscriber();
  }
},
};


export let action = () => {
  return {type: 'add'}
};
export let actionChange = (text) => {
  return {type: 'onChangeText' , addMesage: text}
};




export default store;