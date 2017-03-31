function stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek; //只返回栈顶元素，不删除元素
    this.length = length;
}

function push(element){
    this.dataStore[this.top++] = element;
}

function pop(element){
    return this.dataStore[--this.top];
}

function peek(){
    return this.dataStore[this.top-1]
}

function length(){
    return this.top;
}

function clear(){
    this.top = 0;
}

/*数之间的相互转换*/
function mulBase(num,base){
    var s = new stack();
    while(num > 0){
        s.push(num%base);
        num = Math.floor(num /= base);
    }

    var converd = "";
    while(s.length()>0){
        converd += s.pop();
    }
    return converd;
}

console.log(mulBase(32,2));

/*判断是否为回文字符串*/
function isPalindrome(word){
    var s = new stack();
    for(var i=0;i<word.length;++i){
        s.push(word[i]);
    }
    var rword="";
    while(s.length()>0){
        rword += s.pop();
    }
    if(word == rword){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome("racecar"));