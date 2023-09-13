var blockDefs = [
  {
    "type": "block_tydg",
    "message0": "",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
]

//ここより上記でブロックの定義を行う

Blockly.defineBlocksWithJsonArray(blockDefs);//ここでブロックの定義を追加する

//***************************************************************************** */
//<category>を用いてブロックの整理をすることができる
//上記で追加したブロックを<block>を用いて追加することでブロックの利用が可能になる
//***************************************************************************** */

const toolbox =`
  <xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none">       
  <category name="制御ブロック">                
    <block type="controls_if"></block>
    <block type="controls_repeat_ext"></block>
    <block type="logic_compare"></block>
  </category>
  <category name="他のブロック">
    <block type="math_number"></block>
    <block type="math_arithmetic"></block>
    <block type="text"></block>
    <block type="text_print"></block>
    <block type="block_tydg"></block>
  </category>
  </xml>
  `;



var workspace = Blockly.inject('blocklyDiv',                                                 
{toolbox: toolbox});





//ブロックで生成したプログラミングコードを表示するためのメソッド
function showCode() {
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  const pre = document.getElementById('jsCode');
  pre.innerHTML = Blockly.JavaScript.workspaceToCode(workspace);
}

document.getElementById('showCode').addEventListener('click', showCode, false);