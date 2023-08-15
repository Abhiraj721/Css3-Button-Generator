const covertfromCamelcase=(e)=>{
    let prev="";
    let next="";
    for(let i=0;i<e.length;i++)
    {
    if(e[i]==e[i].toUpperCase())
    {
      prev=e.substring(0,i)
      next=e.substring(i,e.length);
      next=next.toLowerCase();
      return prev+"-"+next;
    }
    }
    return e;
    }
    export default covertfromCamelcase;