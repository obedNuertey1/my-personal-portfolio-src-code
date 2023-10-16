function loadingAnimation(query:string):any{
    const loading:any = document.querySelector(query);
    const myInterval:any = setInterval(()=>{
      setTimeout(()=>{
        loading.innerText = "Loading";
        setTimeout(()=>{
          loading.innerText = "Loading.";
          setTimeout(()=>{
            loading.innerText = "Loading..";
            setTimeout(()=>{
                loading.innerText = "Loading..."
            },250);
          }, 250)
        },250);
      },250);
    }, 1000);
    
    return myInterval;
}
export default loadingAnimation;