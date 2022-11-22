function steps(n){
    for(let i=0; i<n; i++){
        let stairs="";
        for(let j=0; j<i; j++){
            stairs+="#";
        }
        console.log(stairs);
        // console.log();
    }
}
steps(4);