import Mock from "mockjs";
import test from "./test";

// Mock.mock(/\/yearlog\/yearlog/, "get", test.test1);
Mock.mock(/\/yearlog\/1/, "get", test.testGet());
Mock.mock(/\/yearlog\/1/, "post", test.testPost());
Mock.mock(/\/yearlog\/1/, "put", test.testPut());
Mock.mock(/\/yearlog\/1/, "delete", test.testDelete());
Mock.mock(/\/yearlog\/delay1/, test.testGet);
Mock.mock(/\/yearlog\/delay2/, test.testGet);
Mock.mock(/\/yearlog\/delay3/, test.testGet);
Mock.mock(/\/yearlog/, test.testGet);

export default Mock;
