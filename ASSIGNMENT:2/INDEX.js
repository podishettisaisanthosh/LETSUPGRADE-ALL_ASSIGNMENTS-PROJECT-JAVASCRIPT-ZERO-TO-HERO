//By podishetti saisanthosh
//assignment -2(q2)
// program to find palindromes in a given sentence(string)
//LETSUPGRADE JAVASCRIPT ZERO TO HERO

 s = "madam knows malayalam"
  

word = ""
for( t of s){
  
  if(t!=" "){
    word = word +t
  }
  else{
    rev =""
    for(i of word){
      rev = i+rev
    }
    if(rev == word){
      console.log(word)
      
    }
    word = ""
  }
}
