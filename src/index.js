import { taskFactory, testCon } from "./simpletask";

const firstTask = taskFactory("Something", "A thing I need to do", "Now", "very", "some stuff I need to do for this task", "no")

firstTask.returnInput();

testCon("hello!");