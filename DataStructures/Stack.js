function stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek; 
    this.length = length;
}

/*增加一个元素*/
/*根据栈的特点，增加就是压进一个元素，就是在栈顶push一个*/
function push(element){
    this.dataStore[this.top++] = element;
}

/*减少一个元素*/
/*根据栈的特点，减少就是蹦出一个元素，就是在栈顶pop一个*/
function pop(element){
    return this.dataStore[--this.top];
}

/*只返回栈顶元素，不删除元素*/
function peek(){
    return this.dataStore[this.top-1]
}

/*返回栈的长度*/
/*根据栈的特点，返回栈顶的长度*/
function length(){
    return this.top;
}

/*清空栈*/
/*让栈顶的位置为0*/
function clear(){
    this.top = 0;
}

/*不同数制之间的相互转换*/
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