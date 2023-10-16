export default (time:number):Promise<any>=>{
    return new Promise((resolve:any):void=>{
        setTimeout(resolve, time);
    });
};