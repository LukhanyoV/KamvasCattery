# Create a weeklyWage function

Create the `weeklyWage` function (in the `weekly_wages.js` file) that calculates the weekly wages for workers at the Kamva's cattery. It takes in a list of daily hours worked and needs **7 entries** in the timesheet comma delimited parameter. If not the functions returns 'missing days'. If all the days are specified the weekly wage is returned for the specified parameters.

There are three user bands `A`, `B` & `C` each with a different hourly rate.

 Band  | Description   |  Hourly Rate
---|---|----
  A | New casuals | 23
  B | Established casuals  | 37
  C | Supervisors | 51
  
If an invalid user band is returned this function should return 0.
  
Calling the function looks like this: `weeklyWage('A', '0,0,3,4,4,4,6');`
This is an invalid call to the function as there are not 7 days in the 2nd parameter: `weeklyWage('D', '0,0,3,4,4');`

Look at the code in the [unit test](https://github.com/codex-academy/KamvasCattery/blob/gh-pages/weekly_wages/test/weekly_wages.tests.js) to see what is required.

Write the `weeklyWage` function to make the tests pass.
