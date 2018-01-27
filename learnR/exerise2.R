#2-1 1
#计算1~1000 所有整数的倒数的反正切（即arctan）
atan(1/(1:1000))

#2-1 2
#给变量x 分配从1 到1000 的数字向量。
#计算x 的倒数的反正切值，如2-1所示，
#然后将其分配给变量y。
#现在逆转此操作，计算y 的切线的倒数，
#然后把值赋给变量z。
x <- 1:1000
y <- atan(1/(1:1000))
z <- 1/tan(y)

#2-2
#使用== 符号、identical 和all.equal 函数
#比较练习2-1 第2 题中的x 和z 变量

x == z
identical(x,z)
all.equal(x,z)

all.equal(x,z,0)

?all.equal
isTRUE(all.equal(x,z,0))


#2-3
#定义下面的向量。
#(1) 把true_and_missing 赋值为TRUE 和NA（至少其中一个，不限顺序）。
#(2) 把false_and_missing 赋值为FALSE 和NA。
#(3) 把mixed 赋值为TRUE、FALSE 和NA。
#将any 和all 函数应用于以上每个向量
true_and_missing <- (c(TRUE,NA))
false_and_missing <- (c(FALSE,NA))
mixed <- (c(TRUE,FALSE,NA))
any(true_and_missing)
any(false_and_missing)
any(mixed)
all(true_and_missing)
all(false_and_missing)
all(mixed)
