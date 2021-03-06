| Name        | Type               | Required | Description                                        |
| ----------- | ------------------ | -------- | -------------------------------------------------- |
| table_class | string             | false    | Classes to add to the table component              |
| id          | string             | false    | ID to add to the table component                   |
| caption     | string             | false    | The caption for the table component                |
| hideCaption | boolean            | false    | Visually hides the caption                         |
| scrollable  | boolean            | false    | Sets the component to render as a scrollable table |
| sortable    | boolean            | false    | Sets the component to render as a sortable table   |
| ths         | Array`<th>`        | true     | An array of `th` elements for table                |
| trs         | Array`<tr>`        | true     | An array of `tr` elements for table                |
| tfoot       | Array`<tfootCell>` | false    | An array of `td` elements for `tdfoot`             |

## th

| Name      | Type   | Required | Description                                            |
| --------- | ------ | -------- | ------------------------------------------------------ |
| class     | string | false    | Classes to add to the `th` element                     |
| aria_sort | string | false    | Default is "none". Accepts "ascending" or "descending" |
| value     | string | true     | The content for the `th` cell                          |

## tr

| Name        | Type        | Required | Description                                        |
| ----------- | ----------- | -------- | -------------------------------------------------- |
| tds         | Array`<td>` | true     | An array of `td` elements for each `tr`            |
| trHighlight | boolean     | false    | Adds a class to the table row to highlight the row |

## td

| Name      | Type    | Required | Description                                                         |
| --------- | ------- | -------- | ------------------------------------------------------------------- |
| class     | string  | false    | Classes to add to the `td` element                                  |
| name      | string  | false    | Name to add to the `td` element                                     |
| data      | string  | false    | The corresponding `th` for the `td` for responsive tables           |
| data_sort | integer | false    | numerical ordering of a column of `td` elements for sortable table  |
| value     | string  | false    | The content for the `td` cell                                       |
| form      | object  | false    | Form attributes information for `method`, `action` and the `button` |

## form

| Name   | Type                                   | Required | Description                               |
| ------ | -------------------------------------- | -------- | ----------------------------------------- |
| method | string                                 | false    | Default is `post` if no value is provided |
| action | string                                 | true     | The `action` for the form                 |
| button | `Button` [_(ref)_](/components/button) | false    | Configuration object for the form button  |

## tfootCell

| Name  | Type   | Required | Description                               |
| ----- | ------ | -------- | ----------------------------------------- |
| value | string | true     | The content for the `td` cell of `tdfoot` |
