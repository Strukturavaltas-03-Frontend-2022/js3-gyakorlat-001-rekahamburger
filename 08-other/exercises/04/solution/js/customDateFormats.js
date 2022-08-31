const customDateFormats= (date) => {
    const obj= new Object();
   obj.short=date.toLocaleDateString('hu-HU', { year:"numeric", month: 'short', day: 'numeric' , hour:'2-digit', minute:'2-digit' });
    

obj.long=date.toLocaleDateString('hu-HU', { year:"numeric", month: 'long', day: 'numeric' , hour:'2-digit', minute:'2-digit',second:'2-digit' });
 
 return  obj;  
}





export default customDateFormats;
