//void main(){
  // int a = 2;
  // int b = 3;
  // int smaller = a<b ? a:b;
  // print("$smaller");


  // 2.   exp1 ?? exp2
	// If expr1 is non-null, returns its value; otherwise, evaluates and
	// returns the value of expr2.

// 	String? name = null;

// 	String nameToPrint = name ?? "Guest User";
// 	print(nameToPrint);
// }

import 'dart:io';

void main() {
  stdout.write("Enter your name: ");
  String name = stdin.readLineSync() ?? "Guest";

  stdout.write("Enter your age: ");
  int age = int.parse(stdin.readLineSync() ?? "0");

  if (age >= 18) {
    print("Hi $name, you are an adult.");
  } else {
    print("Hi $name, you are a minor.");
  }
}