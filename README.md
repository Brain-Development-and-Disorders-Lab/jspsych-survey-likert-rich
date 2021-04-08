# jspsych-survey-likert-rich
_An extended version of the jsPsych Likert survey plugin, adding rich text fields optionally below questions. Adapted from Josh de Leeuw's existing jspsych-survey-likert plugin._

## Parameters
`questions`
- `prompt`
  - **Required:** Yes
  - **Type:** `String`
  - **Description:** Questions that are associated with the slider.
- `labels`
  - **Required:** Yes
  - **Type:** `String`
  - **Description:** Labels to display for individual question.
- `required`
  - **Required:** No
  - **Type:** `bool`
  - **Description:** Makes answering the question required. Default `false`.
- `name`
  - **Required:** No
  - **Type:** `String`
  - **Description:** Controls the name of data values associated with this question. Default `''`.

`randomize_question_order`
- **Required:** No
- **Type:** `bool`
- **Description:** If true, the order of the questions will be randomized. Default `false`.

`preamble`
- **Required:** Yes
- **Type:** `String`
- **Description:** String to display at top of the page.

`feedback_placeholder`
- **Required:** No
- **Type:** `String`
- **Description:** String to as a placeholder in the feedback boxes. Default is `''`.

`scale_width`
- **Required:** Yes
- **Type:** `int`
- **Description:** Width of the likert scales in pixels.

`button_label`
- **Required:** No
- **Type:** `String`
- **Description:** Label of the button.

`autocomplete`
- **Required:** No
- **Type:** `bool`
- **Description:** Setting this to true will enable browser auto-complete or auto-fill for the form.
