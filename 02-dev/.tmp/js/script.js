'use strict';

var test = 'This is a test';

console.log(test);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestClass = function () {
  function TestClass(msg) {
    _classCallCheck(this, TestClass);

    this.msg = msg;
  }

  _createClass(TestClass, [{
    key: 'getMsg',
    value: function getMsg() {
      return this.msg;
    }
  }]);

  return TestClass;
}();

var test = new TestClass('This is another test');

console.log(test.getMsg());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC0xLmpzIiwic2NyaXB0LTIuanMiXSwibmFtZXMiOlsidGVzdCIsImNvbnNvbGUiLCJsb2ciLCJUZXN0Q2xhc3MiLCJtc2ciLCJnZXRNc2ciXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQUlBLE9BQU8sZ0JBQVg7O0FBRUFDLFFBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQ0pBOzs7Ozs7SUFFTUc7QUFDSixxQkFBYUMsR0FBYixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDRDs7Ozs2QkFDUztBQUNSLGFBQU8sS0FBS0EsR0FBWjtBQUNEOzs7Ozs7QUFHSCxJQUFJSixPQUFPLElBQUlHLFNBQUosQ0FBYyxzQkFBZCxDQUFYOztBQUVBRixRQUFRQyxHQUFSLENBQVlGLEtBQUtLLE1BQUwsRUFBWiIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubGV0IHRlc3QgPSAnVGhpcyBpcyBhIHRlc3QnXG5cbmNvbnNvbGUubG9nKHRlc3QpXG4iLCIndXNlIHN0cmljdCdcblxuY2xhc3MgVGVzdENsYXNzIHtcbiAgY29uc3RydWN0b3IgKG1zZykge1xuICAgIHRoaXMubXNnID0gbXNnXG4gIH1cbiAgZ2V0TXNnICgpIHtcbiAgICByZXR1cm4gdGhpcy5tc2dcbiAgfVxufVxuXG5sZXQgdGVzdCA9IG5ldyBUZXN0Q2xhc3MoJ1RoaXMgaXMgYW5vdGhlciB0ZXN0JylcblxuY29uc29sZS5sb2codGVzdC5nZXRNc2coKSlcbiJdfQ==
