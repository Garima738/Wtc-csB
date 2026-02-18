void main(){
  int a = 2;
  int b = 3;
  int smaller = a<b ? a:b;
  print("$smaller");


  // 2.   exp1 ?? exp2
	// If expr1 is non-null, returns its value; otherwise, evaluates and
	// returns the value of expr2.

	String name = null;

	String nameToPrint = name ?? "Guest User";
	print(nameToPrint);
}