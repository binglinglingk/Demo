function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element){
    this.dataStore.push(element);
}

function dequeue(element){
    return this.dataStore.shift();
}

function front(){
    return this.dataStore[0];
}

function back(){
    return this.dataStore[dataStore.length - 1];
}

function toString(){
    var reStr = "";
    for(var i =0;i < this.dataStore.length;i++){
        reStr += this.dataStore[i] + "\n";
    }
    return reStr;
}

function empty(){
    if(this.dataStore.length === 0){
        return true;
    }else{
        return false;                                                              
    }
}
