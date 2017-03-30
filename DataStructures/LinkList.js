function List(){
    this.listSize = 0; //属性 列表的元素个数
    this.pos = 0; //属性 列表的当前位置
    this.dataStore = [];//初始化一个空数组来保存列表元素
    this.clear = clear;//方法 清空列表中的所有元素
    this.find = find;//方法 从列表中找到元素
    this.toString = toString;//方法 返回列表的字符串形式
    this.insert = insert;//方法 在现有元素后插入新元素
    this.append = append;//方法 在列表的末尾添加新元素
    this.remove = remove;//方法 从列表中删除元素
    this.front = front;//方法 将列表的当前位置移动到第一个元素
    this.end = end;//方法 将列表的当前位置移动到最后一个元素
    this.prev = prev;//方法 将当前位置后移一位
    this.next = next;//方法 将当前位置前移一位
    this.length = length;//属性 返回列表中元素的个数
    this.currPos = currPos;//方法 返回列表的当前位置
    this.moveTo = moveTo;//方法 将当前位置移动到指定位置
    this.getElement = getElement;//
    this.contains = contains;//方法 判断给定值是否在列表中
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

/*遍历列表*/
function front(){
    this.pos = 0;
}

function end(){
    this.pos = this.listSize - 1;
}

function prev(){
    if(this.pos > 0 ){
        --this.pos;
    }
}

function next(){
    if(this.pos < this.listSize-1){
        ++this.pos;
    }
}

function currPos(){
    return this.pos;
}

function moveTo(position){
    this.pos = position;
}

function getElement(){
    return this.dataStore[this.pos];
}