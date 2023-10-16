function showTextYellowPage(query:string):any{
    let loading:any = document.getElementById(query);
    const getInterval:any = setInterval(()=>{
        setTimeout(()=>{
          loading.innerHTML = "<span id='yellow-page-text'>Hi There ✋😅!</span>";
          setTimeout(()=>{
            loading.innerHTML = "<span id='yellow-page-text'>I am Obed</span>";
            setTimeout(()=>{
              loading.innerHTML = "<span id='yellow-page-text'>A Software Engineer👨‍💻👨‍💻</span>";
              setTimeout(()=>{
                  loading.innerHTML = "<span id='yellow-page-text'>Welcome to my portfolio website😁😁</span>";
                  setTimeout(()=>{
                    loading.innerHTML = "<span id='yellow-page-text'>I am a TypeScript React Frontend Engineer🚀💪</span>";
                    setTimeout(()=>{
                        loading.innerHTML = "<span id='yellow-page-text'>I am also a TypeScript Node Backend Engineer🚀💪</span>";
                    }, 250);
                  },250);
              },250);
            }, 250)
          },250);
        },250);
      }, 1000);

      return getInterval;
};

export default showTextYellowPage;