#pragma once
class Nwd
{
	public:
	
	// Function to calculate the greatest common divisor (GCD) using the Euclidean algorithm
	static int nwdIter(int a, int b) {
		while (b != 0) {
			int temp = b;
			b = a % b;
			a = temp;
		}
		return a;
	}
	// Function to calculate the least common multiple (LCM)
	static int nwdRec(int a, int b) {
		if(b==0) {
			return a;
		} else {
			return nwdRec(b, a % b);
		}
	}
};

