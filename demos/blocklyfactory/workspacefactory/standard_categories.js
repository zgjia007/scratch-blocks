/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Contains a map of standard Blockly categories used to load
 * standard Blockly categories into the user's toolbox. The map is keyed by
 * the lower case name of the category, and contains the Category object for
 * that particular category.
 *
 * @author Emma Dauterman (evd2014)
 */

WorkspaceFactoryController.prototype.standardCategories = Object.create(null);

WorkspaceFactoryController.prototype.standardCategories['logic'] =
    new ListElement(ListElement.TYPE_CATEGORY, 'Logic');
WorkspaceFactoryController.prototype.standardCategories['logic'].xml =
    Blockly.Xml.textToDom(
    '<xml>' +
    '<block type="controls_if"></block>' +
    '<block type="logic_compare"></block>' +
    '<block type="logic_operation"></block>' +
    '<block type="logic_negate"></block>' +
    '<block type="logic_boolean"></block>' +
    '<block type="logic_null"></block>' +
    '<block type="logic_ternary"></block>' +
    '</xml>');
WorkspaceFactoryController.prototype.standardCategories['logic'].color =
    '#5C81A6';

WorkspaceFactoryController.prototype.standardCategories['loops'] =
    new ListElement(ListElement.TYPE_CATEGORY, 'Loops');
WorkspaceFactoryController.prototype.standardCategories['loops'].xml =
    Blockly.Xml.textToDom(
    '<xml>' +
    '<block type="controls_repeat_ext">' +
      '<value name="TIMES">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="controls_whileUntil"></block>' +
    '<block type="controls_for">' +
      '<value name="FROM">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="TO">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="BY">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="controls_forEach"></block>' +
    '<block type="controls_flow_statements"></block>' +
    '</xml>');
WorkspaceFactoryController.prototype.standardCategories['loops'].color =
    '#5CA65C';

WorkspaceFactoryController.prototype.standardCategories['math'] =
    new ListElement(ListElement.TYPE_CATEGORY, 'Math');
WorkspaceFactoryController.prototype.standardCategories['math'].xml =
    Blockly.Xml.textToDom(
    '<xml>' +
    '<block type="math_number"></block>' +
    '<block type="math_arithmetic">' +
      '<value name="A">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="B">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="math_single">' +
      '<value name="NUM">' +
        '<shadow type="math_number">' +
          '<field name="NUM">9</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="math_trig">' +
      '<value name="NUM">' +
        '<shadow type="math_number">' +
          '<field name="NUM">45</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="math_constant"></block>' +
    '<block type="math_number_property">' +
      '<value name="NUMBER_TO_CHECK">' +
        '<shadow type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="math_change">' +
      '<value name="DELTA">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="math_round">' +
      '<value name="NUM">' +
        '<shadow type="math_number">' +
          '<field name="NUM">3.1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="math_on_list"></block>' +
    '<block type="math_modulo">' +
      '<value name="DIVIDEND">' +
        '<shadow type="math_number">' +
          '<field name="NUM">64</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="DIVISOR">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>'+
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="math_constrain">' +
      '<value name="VALUE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">50</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="LOW">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="HIGH">' +
        '<shadow type="math_number">' +
          '<field name="NUM">100</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="math_random_int">' +
      '<value name="FROM">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="TO">' +
        '<shadow type="math_number">' +
          '<field name="NUM">100</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="math_random_float"></block>' +
    '</xml>');
WorkspaceFactoryController.prototype.standardCategories['math'].color =
    '#5C68A6';

WorkspaceFactoryController.prototype.standardCategories['text'] =
    new ListElement(ListElement.TYPE_CATEGORY, 'Text');
WorkspaceFactoryController.prototype.standardCategories['text'].xml =
    Blockly.Xml.textToDom(
    '<xml>' +
    '<block type="text"></block>' +
    '<block type="text_join"></block>' +
    '<block type="text_append">' +
      '<value name="TEXT">' +
        '<shadow type="text"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="text_length">' +
      '<value name="VALUE">' +
        '<shadow type="text">' +
          '<field name="TEXT">abc</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="text_isEmpty">' +
      '<value name="VALUE">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="text_indexOf">' +
      '<value name="VALUE">' +
        '<block type="variables_get">' +
          '<field name="VAR">text</field>' +
        '</block>' +
      '</value>' +
      '<value name="FIND">' +
        '<shadow type="text">' +
          '<field name="TEXT">abc</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="text_charAt">' +
      '<value name="VALUE">' +
        '<block type="variables_get">' +
          '<field name="VAR">text</field>' +
        '</block>' +
      '</value>' +
    '</block>' +
    '<block type="text_getSubstring">' +
      '<value name="STRING">' +
        '<block type="variables_get">' +
          '<field name="VAR">text</field>' +
        '</block>' +
      '</value>' +
    '</block>' +
    '<block type="text_changeCase">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">abc</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="text_trim">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">abc</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="text_print">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">abc</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="text_prompt_ext">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">abc</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '</xml>');
WorkspaceFactoryController.prototype.standardCategories['text'].color =
    '#5CA68D';

WorkspaceFactoryController.prototype.standardCategories['lists'] =
    new ListElement(ListElement.TYPE_CATEGORY, 'Lists');
WorkspaceFactoryController.prototype.standardCategories['lists'].xml =
    Blockly.Xml.textToDom(
    '<xml>' +
    '<block type="lists_create_with">' +
      '<mutation items="0"></mutation>' +
    '</block>' +
    '<block type="lists_create_with"></block>' +
    '<block type="lists_repeat">' +
      '<value name="NUM">' +
        '<shadow type="math_number">' +
          '<field name="NUM">5</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="lists_length"></block>' +
    '<block type="lists_isEmpty"></block>' +
    '<block type="lists_indexOf">' +
      '<value name="VALUE">' +
        '<block type="variables_get">' +
          '<field name="VAR">list</field>' +
        '</block>' +
      '</value>' +
    '</block>' +
    '<block type="lists_getIndex">' +
      '<value name="VALUE">' +
        '<block type="variables_get">' +
          '<field name="VAR">list</field>' +
        '</block>' +
      '</value>' +
    '</block>' +
    '<block type="lists_setIndex">' +
      '<value name="LIST">' +
        '<block type="variables_get">' +
          '<field name="VAR">list</field>' +
        '</block>' +
      '</value>' +
    '</block>' +
    '<block type="lists_getSublist">' +
      '<value name="LIST">' +
        '<block type="variables_get">' +
          '<field name="VAR">list</field>' +
        '</block>' +
      '</value>' +
    '</block>' +
    '<block type="lists_split">' +
      '<value name="DELIM">' +
        '<shadow type="text">' +
          '<field name="TEXT">,</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="lists_sort"></block>' +
    '</xml>');
WorkspaceFactoryController.prototype.standardCategories['lists'].color =
    '#745CA6';

WorkspaceFactoryController.prototype.standardCategories['colour'] =
    new ListElement(ListElement.TYPE_CATEGORY, 'Colour');
WorkspaceFactoryController.prototype.standardCategories['colour'].xml =
    Blockly.Xml.textToDom(
    '<xml>' +
    '<block type="colour_picker"></block>' +
    '<block type="colour_random"></block>' +
    '<block type="colour_rgb">' +
      '<value name="RED">' +
        '<shadow type="math_number">' +
          '<field name="NUM">100</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="GREEN">' +
        '<shadow type="math_number">' +
          '<field name="NUM">50</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="BLUE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="colour_blend">' +
      '<value name="COLOUR1">' +
        '<shadow type="colour_picker">' +
          '<field name="COLOUR">#ff0000</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="COLOUR2">' +
        '<shadow type="colour_picker">' +
          '<field name="COLOUR">#3333ff</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="RATIO">' +
        '<shadow type="math_number">' +
          '<field name="NUM">0.5</field>' +
       '</shadow>' +
      '</value>' +
    '</block>' +
    '</xml>');
WorkspaceFactoryController.prototype.standardCategories['colour'].color =
    '#A6745C';

WorkspaceFactoryController.prototype.standardCategories['functions'] =
    new ListElement(ListElement.TYPE_CATEGORY, 'Functions');
WorkspaceFactoryController.prototype.standardCategories['functions'].color =
    '#9A5CA6'
WorkspaceFactoryController.prototype.standardCategories['functions'].custom =
    'PROCEDURE';

WorkspaceFactoryController.prototype.standardCategories['variables'] =
    new ListElement(ListElement.TYPE_CATEGORY, 'Variables');
WorkspaceFactoryController.prototype.standardCategories['variables'].color =
    '#A65C81';
WorkspaceFactoryController.prototype.standardCategories['variables'].custom =
    'VARIABLE';
