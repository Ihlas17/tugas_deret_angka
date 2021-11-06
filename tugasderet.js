function deretAngka(n) {
    let tamp = ''
    // tulis code jawabanmu di sini
    for(let i=1; i<=n; i++){
        if(i%3==0 && i!=15){
            tamp+='NIO'
            tamp+=' '
        }else if(i%5==0 && i!=15){
            tamp+='MIC'
            tamp+=' '
        }else if(i%15==0){
            tamp+='NIOMIC'
            tamp+=' '
        }else{
            tamp+=i
            tamp+=' '
        }
    }return tamp
   }
   
   
   console.log(deretAngka(10))
   console.log(deretAngka(20))
   console.log(deretAngka(30))