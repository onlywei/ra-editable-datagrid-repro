# ra-editable-datagrid-repro
Bug reproduction for ra-editable-datagrid

To see the bug in action:

1. Make sure you have access to the React-Admin Enterprise packages.
2. Do `npm install`.
3. Run `npm start`
4. Open your browser and point it to the URL displayed by Vite in your terminal.
5. Wait click on the "Create" button in the upper right hand corner.

## Expected behavior:

A new row is created that can be edited.

## Actual behavior:

Nothing happens except that the URL changes to append "/create" to the end.
