for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        document.write("*");
    }
    document.write("<br>");
}

for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
      if(i==j || i+j==6){
        document.writeln("*");
      }else{
        document.writeln("&nbsp;&nbsp;");
      }
    }
    document.writeln("<br>");
}