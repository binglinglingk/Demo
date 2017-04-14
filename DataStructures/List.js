function List(){
    this.listSize = 0; 
    this.pos = 0; 
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

/*在列表的末尾添加新元素*/
function append(element){
    this.dataStore[this.listSize++] = element;
}

/*在列表中查找一个元素*/
function find(element){
    for(var i=0;i<this.dataStore.length;i++){
        if(this.dataStore[i] == element){
            return i;
        }
    }
    return -1;
}

/*在列表的删除元素*/
function remove(element){
    var foundAt = this.find(element);
    if(foundAt > -1){
      this.dataStore.splice(foundAt,1);
      --this.listSize;
      return true;  
    }
    return false;
}

/*返回列表中元素的个数*/
function length(){
    return this.listSize;
}

/*显示列表中的元素*/
function toString(){
    return this.dataStore;
}

/*向列表中插入一个元素*/
function insert(element,after){
    var inserPos = this.find(after);
    if(inserPos > -1){
        this.dataStore.splice(inserPos+1,0,element);
        ++this.listSize;
        return true;
    }
    return false;
}

/*清空列表中的所有元素*/
function clear(){
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0; //新的空列表
}

/*判断给定值是否在列表中*/
function contains(element){
    for(var i = 0;i<this.dataStore.length;i++){
        if(this.dataStore[i] == element){
            return true;
        }
    }
    return false;
}

/*列表的第一个位置*/
function front(){
    this.pos = 0;
}

/*列表的最后一个位置*/
function end(){
    this.pos = this.listSize - 1;
}

/*当前位置的前一个*/
function prev(){
    if(this.pos > 0 ){
        --this.pos;
    }
}

/*当前位置的下一个*/
function next(){
    if(this.pos < this.listSize-1){
        ++this.pos;
    }
}

/*返回当前位置*/
function currPos(){
    return this.pos;
}

/*移动到指定位置*/
function moveTo(position){
    this.pos = position;
}

/*获取当前位置节点的值*/
function getElement(){
    return this.dataStore[this.pos];
}