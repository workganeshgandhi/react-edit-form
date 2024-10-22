# react-edit-form
react edit form example

You are provided with a React application that includes a form for entering user details (First Name, Last Name, and Occupation) and a table to display the entered details. The application also includes search functionality to filter the displayed entries. Your task is to complete the following three functions to make the application fully functional:

-> handleSubmit(e):

- This function should handle the form submission.
- When the form is submitted, the input values for First Name, Last Name, and Occupation should be added as a new entry to the table.
- Ensure that all input fields are filled before adding the entry. If any field is empty, display an alert indicating that all fields are required.
- If an entry is being edited (i.e., editIndex is not null), update the existing entry instead of adding a new one.
- After adding or updating an entry, reset the input fields to be empty.

-> handleEdit(index):

- This function should handle the edit action for a specific entry.
- When the "Edit" button is clicked for a particular entry, the input fields should be populated with the existing values of that entry.
- Set the editIndex state to the index of the entry being edited.

-> handleDelete(index):

- This function should handle the delete action for a specific entry.
- When the "Delete" button is clicked for a particular entry, remove that entry from the table.



Expected Behavior

Adding a New Entry:

- Fill out the input fields with First Name, Last Name, and Occupation.
- Click the "Submit" button.
- The new entry should appear in the table below the form.
- The input fields should be cleared after submission.

Editing an Existing Entry:

- Click the "Edit" button next to an existing entry in the table.
- The input fields should be populated with the current values of the entry.
- Modify the values in the input fields.
- Click the "Update" button.
- The table should reflect the updated values for the entry.
- The input fields should be cleared after updating.

Deleting an Entry:

- Click the "Delete" button next to an existing entry in the table.
- The entry should be removed from the table.

Validation:

- If the form is submitted with any empty input fields, an alert should be displayed indicating that all fields are required.

Search Functionality:

- Use the search input to filter the entries in the table by First Name, Last Name, or Occupation.
- The table should update to only show entries that match the search term.
