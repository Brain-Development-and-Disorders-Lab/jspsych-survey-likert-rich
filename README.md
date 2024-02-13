# jspsych-survey-likert-rich

> An extended version of the jsPsych Likert survey plugin, adding rich text fields optionally below questions. Adapted from Josh de Leeuw's existing `jspsych-survey-likert` plugin.

## Requirements

* jsPsych v6.0+ (Note: this plugin is not compatible with jsPsych v7.0+)

## Parameters

`questions`

* `prompt`
  * **Required:** Yes
  * **Type:** `String`
  * **Description:** Questions that are associated with the slider.
* `labels`
  * **Required:** Yes
  * **Type:** `String`
  * **Description:** Labels to display for individual question.
* `required`
  * **Required:** No
  * **Type:** `bool`
  * **Description:** Makes answering the question required. Default `false`.
* `name`
  * **Required:** No
  * **Type:** `String`
  * **Description:** Controls the name of data values associated with this question. Default `''`.

`randomize_question_order`

* **Required:** No
* **Type:** `bool`
* **Description:** If true, the order of the questions will be randomized. Default `false`.

`preamble`

* **Required:** Yes
* **Type:** `String`
* **Description:** String to display at top of the page.

`feedback_placeholder`

* **Required:** No
* **Type:** `String`
* **Description:** String to as a placeholder in the feedback boxes. Default is `''`.

`scale_width`

* **Required:** Yes
* **Type:** `int`
* **Description:** Width of the likert scales in pixels.

`button_label`

* **Required:** No
* **Type:** `String`
* **Description:** Label of the button.

`autocomplete`

* **Required:** No
* **Type:** `bool`
* **Description:** Setting this to true will enable browser auto-complete or auto-fill for the form.

## License

<!-- CC BY-NC-SA 4.0 License -->
<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
  <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
</a>
<br />
This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

## Issues and Feedback

Please contact **Henry Burgess** <[henry.burgess@wustl.edu](mailto:henry.burgess@wustl.edu)> for all code-related issues and feedback.
