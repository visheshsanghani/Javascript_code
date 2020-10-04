let input = "my name is vishesh";
x   
if(input){
    let s = input.split(" ");
    for(let i = 0 ;i<s.length;i++){
        if(i+1 %2 !== 0){
            s[i]=reverseOf(s[i]);
        }
    }
    let ans = reverseOfArray(s).join(" ");
    
}

function reverseOf(s){
             let s1='';
            for(let j= s.length-1 ; j !=-1 ; j-- ){
                s1 = s1+s[j];
            }
            return s1;
}

funtion reverseOfArray(arr){
    let count = 0;
    let ans = [];
    for(let j = arr.length-1; j!=-1;j--){
        ans.push(arr[j]);
    }
    return ans;
}