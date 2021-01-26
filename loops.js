//Prediction 1:

for(var num = 0; num < 15; num++){
    console.log(num);
}

/* I predicted that the console output would be:
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14 */

//Prediction 2:

for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}

// I predicted the output would be:
// 3
// 9

//Prediction 3:

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

/* This one gave me some problems.  I predicted:
2
3
5
8
9
10
13
16

NOTE: I ran this code in pythontutor.com and it makes a bit more sense. */