function showTextYellowPage(query:string, chunkTimes:number):any{
    let loading:any = document.querySelector(query);
    let compiledTime:number = chunkTimes * 6;
    loading.innerHTML = '<span class="ml-6">Hi There ✋😅!</span>';
    const getInterval:any = setInterval(()=>{
        setTimeout(()=>{
                loading.innerHTML = '<span id="yellow-page-text" class="ml-7">I am Obed</span>';
            setTimeout(()=>{
                    loading.innerHTML = "<span id='yellow-page-text'>A Software Engineer👨‍💻👨‍💻</span>";
                setTimeout(()=>{
                        loading.innerHTML = "<span id='yellow-page-text'>Welcome to my portfolio website😁😁</span>";
                    setTimeout(()=>{
                            loading.innerHTML = "<span id='yellow-page-text'>I am a TypeScript React Frontend Engineer🚀💪</span>";
                        setTimeout(()=>{
                                loading.innerHTML = "<span id='yellow-page-text'>I am also a TypeScript Node Backend Engineer🚀💪</span>";
                            setTimeout(()=>{
                                loading.innerHTML = '<span id="yellow-page-text" class="ml-6">Hi There ✋😅!</span>';
                    }, chunkTimes);
                  },chunkTimes);
              },chunkTimes);
            }, chunkTimes)
          },chunkTimes);
        },chunkTimes);
      }, compiledTime);

      return getInterval;
};

export default showTextYellowPage;