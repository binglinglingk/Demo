#3-1 查找以下值Inf、NA、NaN 和"" 的类、类型、模式及存储模式
#Inf
class(Inf)
typeof(Inf)
mode(Inf)
storage.mode(Inf)
#NA
class(NA)
typeof(NA)
mode(NA)
storage.mode(NA)
#NaN
class(NaN)
typeof(NaN)
mode(NaN)
storage.mode(NaN)
#""
class("")
typeof("")
mode("")
storage.mode("")

#3-2 随机从“dog”、“cat”、“hamster”和“goldfish”中以相等的概率生成1000 个宠物名。
#显示所得变量的前几个值，并计算每种宠物的数量
pets <- sample((c("dog","cat","hamster","goldfish")),1000,replace = TRUE)
pets
summary(factor(pets))

#3-3 创建一些以蔬菜命名的变量。列出用户工作区中所有包含字母“a”的变量.
potato <- 1
cabbage <- 1
tomato <- 1
bean <- 1
carrot <- 1
eggplant <- 1
ls(pattern = "a")