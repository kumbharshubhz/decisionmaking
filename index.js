//Q.1 CALCULATOR

const Calculator = (A, B, C) => 
{
	switch(A){
	  case '+':{
	    return B+C;
	  }break;
	   case '-':{
	    return B-C;
	  }break;
	   case '*':{
	    return B*C;
	  }break;
	   case '/':{
	    return B/C;
	  }break;
	}
    
    
};
//Q.2 FULL FILLED OR NOT

const Check_divisibility = (N) => {
    if((N%6 == 0) && (N%9 == 0)){
      return 'divisible by both';
    }else{
      return 'not divisible by both';
    }  
};


// Q.3 VOTES
const isEligible = (a) => {
    if(a<18){
   return "Not Eligible for Voting"
 }else{
   return "Eligible for Voting"
 } 
};
//Q.4 FIND RELATION
if(x<y){
    return x+ " is smaller than " +y;
  }else if(x>y){
    return x+" is greater than "+y;
  }else{
    return x+" is equal to "+y;
  }

//Q.5 FIND GRADES
if(a<=10){
    return 'E'
  }else if((a>=11)&& (a<=20)){
    return 'D'
  }else if((a>=21)&&(a<=30)){
    return 'C'
  }else if((a>=31)&&(a<=40)){
    return 'B'
  }else if((a>=41)&&(a<=50)){
    return 'A'
  }
//Q.6 GET VALUE
switch(a){
    case 'P':{
      return "PrepBytes"
    }
    case 'p':{
      return "PrepBytes"
    }
    case 'Z':{
      return 'Zenith'
    }
    case 'z':{
      return "Zenith"
    }
    case 'E':{
      return 'Expert Coder'
    }
    case 'e':{
      return 'Expert Coder'
    }
    case 'D':{
      return "Data Structure"
    }
    case 'd':{
      return 'Data Structure'
    }
  }
//Q.7 MAX OUT OF THREE

const Max_out_of_three = (A,B,C) => {
    if(A>B && B>C) {
      return A;
    }
    
    if(A>C && C>B) {
      return A;
    }
     
    if(B>A && A>C) {
      return B;
    }
    
    if(B>C && C>A) {
      return B;
    }
      
    if(C>A && A>B) {
      return C;
    }
    
    if(C>B && B>A) {
      return C;
    }
    
    if(A==B && B==C) {
      return -1;
    }

};


//Q.8 SMALLEST

const findSndSmallest = (x,y,z) => {
    if(x>y && y>z) {
    return y;
  }
  
  if(x>z && z>y) {
    return z;
  }
  
  if(y>x && x>z) {
    return x;
  }
  
  if(y>z && z>x) {
    return z;
  }
    
  if(z>x && x>y) {
    return x;
  }
  
  if(z>y && y>x) {
    return y;
  }
  
};


