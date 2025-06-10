#include "pch.h"
#include "CppUnitTest.h"
#include "../Console_App/Nwd.h"
using namespace Microsoft::VisualStudio::CppUnitTestFramework;

namespace UnitTest
{
	TEST_CLASS(UnitTest)
	{
	public:
		
		TEST_METHOD(TestMethod1)
		{
			int result = Nwd::nwdIter(48, 18);
			Assert::AreEqual(6, result, L"Spodziewana dla 48 i 18 jest 6");
		}
		TEST_METHOD(TestMethod2)
		{
			int result = Nwd::nwdRec(48, 18);
			Assert::AreEqual(6, result, L"Spodziewana dla 48 i 18 jest 6");
		}
	};
}
