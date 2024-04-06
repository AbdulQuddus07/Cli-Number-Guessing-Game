#! /usr/bin/env node
import inquier from "inquirer";
import chalk from "chalk";
let todoList: string[] = [];
let conditions = true;

// Print wellcome message:
console.log(
  chalk.bold.rgb(
    204,
    204,
    204
  )("\n \t\t <<<===================================================>>>\n")
);
console.log(
  chalk.bold.rgb(
    204,
    204,
    204
  )(
    `<<<=======>>> ${chalk.bold.italic.hex("#9999FF")(
      "Wellcome to 'Code with Abdul Quddus -:My-Todo-Application"
    )}:- <<<=======>>>`
  )
);
console.log(
  chalk.bold.rgb(
    204,
    204,
    204
  )("\n \t\t <<<===================================================>>>\n")
);
// while (conditions) {
//   let addTask = await inquier.prompt([
//     {
//       name: "task",
//       type: "input",
//       message: chalk.green("Enter your New Task"),
//     },
//   ]);
//   todoList.push(addTask.task);
//   console.log(`${addTask.task} Task added in Todo-List successfully`);

//   let addMoreTask = await inquier.prompt([
//     {
//       name: "addmore",
//       type: "confirm",
//       message: "Do you want to add more task ?",
//       default: "false",
//     },
//   ]);
//   conditions = addMoreTask.addmore;
// }
// console.log("Your updated Todo-List:", todoList);

let main = async () => {
  while (conditions) {
    let option = await inquier.prompt([
      {
        name: "choice",
        type: "list",
        message: "Select an option you want to do:",
        choices: [
          "Add Task",
          "Delete Task",
          "Update Task",
          "View Todo-List",
          "Exit",
        ],
      },
    ]);
    if (option.choice === "Add Task") {
      await addTask();
    } else if (option.choice === "Delete Task") {
      await deleteTask();
    } else if (option.choice === "Update Task") {
      await updateTask();
    } else if (option.choice === "View Todo-List") {
      viewTask();
    } else if (option.choice === "Exit") {
      conditions = false;
    }
  }
};
// Fuction to add new task to the lsit,
let addTask = async () => {
  let newTask = await inquier.prompt([
    {
      name: "task",
      type: "input",
      message: "Enter your new task:",
    },
  ]);
  todoList.push(newTask.task);
  console.log(`\n ${newTask.task} this task added successfully in Todo-List`);
};
// Fuction to view all Todo-List Task,
let viewTask = () => {
  console.log(`\n Your Todo-List: \n`);
  todoList.forEach((task, index) => {
    console.log(`${index+1}: ${task}`);
  });
  console.log('\n');
};
// Function to delete task from Todo-List,
let deleteTask = async () => {
  viewTask();
  let taskIndex = await inquier.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the 'index no.' of the task you want to delete:",
    },
  ]);
  let deletedTask = todoList.splice(taskIndex.index-1, 1);
  console.log(
    `\n ${deletedTask} this task has been deleted successfully from your Todo-List`
  );
};
// Function to Update a task,
let updateTask = async () => {
  viewTask();
  let update_task_index = await inquier.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the 'index no.' of the task you want to update:",
    },
    {
      name: "new_task",
      type: "input",
      message: "Now Enter the new task name:",
    },
  ]);
  todoList[update_task_index.index-1] = update_task_index.new_task;
  console.log(
    `\n Task at index no. ${update_task_index.index-1} updated successfully [For updated list check option: View Todo-List]`
  );
};
main();
