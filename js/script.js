//      ex

// var studentNum = prompt("how many students are there?")
// var arr =[ ]
// for (var i=0  ; i< studentNum  ;i++ ){
//     var studentName =prompt ("student :")
//     arr[i]=studentName
// }
// console.log(arr)

////////////////////////////////////////////////////////////////////////////////////////////

           //date type

// console.log ("osama")
// console.log(typeof("osama"))  //  string  " " mean it is not an order
// console.log(typeof(5000))    //number   no " "
// console.log(typeof [10,20,"ahmed",500])  //array type object
// console.log(typeof{name:"eman" ,age:24 ,city:"mansoura"})  //object object key:"value"
// console.log(typeof(true))  //true ,false     boolean
// console.log(typeof(+true))   // 1 number 
// console.log(typeof(null)) // type object 
// console.log(null)  //null =empty
// console.log(typeof(undefined))  //type undefined
// var x  //just x no value
// console.log(x) //   undefined

// /////////////////////////////////////////////////////////////////////////////////////////////////

//   variables

// variable syntax (keyword(var),variable name,assignment operator(=),variable value)
//                         var        mohamed                =          eman
// var x=1  declare first            important
//console.log(x) then console print
// p.s: hello.innerHTML="Option";   change hello in div in html doc to option 
///////////////////////////////////////////////////////////////////////////////////////
//   identifiers name    var name 

// uncorect (start with numbers ,symbols, usedwords in js like var if ,,  name with mean   )
// camel Case (first word:small last:first latter always capital)  

////////////////////////////////////////////////////////////////////////////////////

            // escape    +   line Continue

   // console.log('eman "abdelqawy"')
    //console.log("eman 'abdelqawy'")
   // console.log("eman \"abdelqawy\"")   if ""  string"" use \"   back \ escape mean its mine    \"
   //console.log("\\") print \ back\ escape (\\) mean \ is mine
//    console.log("eman\
// abdel\
// qawy");  \ ignore enter + line continue
// console.log("eman\nabdelqawy\ntawfeeq")           \n mean new line = enter 

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//concatenation

//var a =  "we love"
//var b = "eman"
//document.write(a+   ""  +b + "" +a)  " "  distance مسافه
//console.log(a, b)   a distance b
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Arthimatic operators  +   -  /   *   %  المعاملات الحسابيه

// console.log(10+"eman")    10eman هيعتبر ال 10 مضافه لايمان 
// console.log(10-"eman")    هنا - مينفعش تضاف فهيكون مش عارف يقراها   هيطلع NaN  typeof number
// console.log(3**3)   الاس 
// console.log(13%3)  باقي القسمه 1

                      //////////////////////////////////////////////////////////////////////
//increment        decrement    [pre(++x)(--x)  قبل/   post (x++)(x--)بعد]

// var num=1;
// console.log(num++)      1   الزياده بعد الرقم مبتضفش غير لو طبعت تاني   post
// console.log(++num)      2   الزياده قبل الرقم فبتضاف قبل الطباعه    pre
// console.log(num--) 1-1  1   post النفص ميطبعش    
// console.log(--num)   1-1   0  pre تتطبع

//////////////////////////////////////////////////////////////////////////////////////////////
//Unaty plus +  بيحول لرقم 
//string number
//Unaty negative -

// console.log(+100)      100
// console.log(+"100")    100
// console.log(+"-100")    -100
// console.log(+"eman")     NaN
// console.log(+"15.5")     15.5
// console.log(+0xff)       255
// console.log(+null)         0 
// console.log(+true)          1
// console.log(+false)         0 
              ///////////////////////////////
//negative -
// console.log(-100)          -100 
// console.log(-"100")        -100
// console.log(-"-100")        100 
// console.log(-"eman")        NaN
// console.log(-"15.5")        -15.5
// console.log(-0xff)           -255
// console.log(-null)          -0
// console.log(-true)          -1
// console.log(-false)         -0

// console.log(Number("100"))   بيحول النص لرقم  100
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//type coercion (type casting)
//+
//""-2
//false true
// var a = "10"
// var b = 20
// var c = true 
// // console.log(b + a)   2010
// // console.log(b + +a)  30               +"10" هتحوله لرقم
// // console.log(+a +b)      30
// // console.log(b + c)    20+1
// // console.log(b - a)       10  هيتعامل كرقم عادي  20 -10 
// // console.log("" + 2)     2
// // console.log(""-2)
// // console.log(2 - +"")        2            +""= +0    +فاضي
// // console.log(true-false)      1
// // console.log(a + b + c)   1020true
// // console.log(+a + b + c)  10+20+1  = 31

// // ///////////////////////////////////////////////////////////////////////////////////////////////

//Asignment Operatories

// let a = 10 ;
// a += 5;   هي هي    a = a+5  زود ع a القديمه        اضافه قيم لبعض
// a -= 4   =  a=a-4    اشيل قيم جديده من قديمه
// a/=2    5     a=a/2
// console.log(a)

// ///////////////////////////////////////////////////////////////////////////////

//challenge 1

// var a =10; 
// var b ="20";
// var c= 80;
// console.log(++a + +b++ + +c++ - +a++   )    //11+20+80-11     //100       true
// console.log(++a + -b +  +c++ - -a++ + +a  )    //11-20+80+11+12  //94        true
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);   //79+20+9*20-21*9+8-1=97       //97      true

//challenge2
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;
// console.log(-d * +e)
// console.log(-d + ++e * ++g + ++f) // 100+21*2+31
// /////////////////////////////////////////////////////////////////////

//number

// /////////////////////////////////////////////////////////////////////

// == Equal
// != Not Equal
// console.log(10=="10"); //compare value only not type      //   is 10 = "10"? //true
// console.log(10!="10")        //  is 10 not equilto "10"?    //false
// console.log(10==="10")  //=== compare value+type  identical    //false
// console.log(10!=="10")   //true         الشرط اتحقق 
// console.log(10!==10)    //false        الشرط ما اتحققش

// console.log(10>20)  //f
// console.log(10>10)  //f
// console.log(10>=10) //t

// console.log(10<20) // t
// console.log(10<10)  //f
// console.log(10<=10) //t

// console.log("osama"==="ahmed")   //f
// console.log(typeof"osama"===typeof"ahmed")  //t
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//LOGICAL OPERATORIES
  // ! NOT
  // && AND
  // || OR

//   console.log(!(10=="10"))   //false
// console.log(10=="10" && 10<50 && 10>80) //false  لازم كل الشروط تتحقق
// console.log(10=="10" || 10<50 || 10>80) //true لو شرط واحظ اتحقق خلاص

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// IF CONDITION
//CONTROL FLOW يمشي مع الشرط خطوه خطوه اتحقق تمام متحققش يشوف الي بعده
//IF
//ELSE IF
//ELSE

//  if (condition){
//    block of code
// }

// var price = 100;
// var discount = true;
// var discountAmount = 30;
// var country = "syria";
// var city= "cairo";

// if(discount = false){
//    price -=discountAmount
// }else if(country==="egypt"){
//     price-=20
// }else if(city==="mansoura"){
//     price +=100
// }else{
//    price-=10
// }
// console.log(price)
// /////////////////////////////////////////////////////////////////////////////////
 
//Conditional (Ternary) operator

// let Name = "eman";
// let Gender = "female";
// let Age = "25";
// if(Gender === "male"){
//   console.log(Name)
// }else if(Gender==="male"){
//   console.log(Age)
// }else{
//   console.log("unknown")
// }
// Gender === "male"?  console.log(Name) :Gender==="male"?console.log(Age) : console.log("unknown")

// ////////////////////////////////////////////////////////////////////////////////////////////

//Challenge
// let a= 10;
// a<10 ?console.log(10) : a >=10 && a<= 40 ?console.log("10 to 40"):

// // ////////////////////////////////////////////////////
