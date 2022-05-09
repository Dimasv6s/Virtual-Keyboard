export default function getKeyboard(x) {
  return `
  <div class="wrapper">
  <textarea autofocus></textarea>
  <div class="keyboard">
    <div class="row">
      <div class="key backquote" data-index="Backquote"><span>${x[0]}</span></div>
      <div class="key" data-index="Digit1"><span>${x[1]}</span></div>
      <div class="key" data-index="Digit2"><span>${x[2]}</span></div>
      <div class="key" data-index="Digit3"><span>${x[3]}</span></div>
      <div class="key" data-index="Digit4"><span>${x[4]}</span></div>
      <div class="key" data-index="Digit5"><span>${x[5]}</span></div>
      <div class="key" data-index="Digit6"><span>${x[6]}</span></div>
      <div class="key" data-index="Digit7"><span>${x[7]}</span></div>
      <div class="key" data-index="Digit8"><span>${x[8]}</span></div>
      <div class="key" data-index="Digit9"><span>${x[9]}</span></div>
      <div class="key" data-index="Digit0"><span>${x[10]}</span></div>
      <div class="key" data-index="Minus"><span>${x[11]}</span></div>
      <div class="key" data-index="Equal"><span>${x[12]}</span></div>
      <div class="key backspace" data-index="Backspace"><span>${x[13]}</span></div>
      <div class="key delete" data-index="Delete"><span>${x[14]}</span></div>
    </div>
    <div class="row">
      <div class="key tab" data-index="Tab"><span>${x[15]}</span></div>
      <div class="key" data-index="KeyQ"><span>${x[16]}</span></div>
      <div class="key" data-index="KeyW"><span>${x[17]}</span></div>
      <div class="key" data-index="KeyE"><span>${x[18]}</span></div>
      <div class="key" data-index="KeyR"><span>${x[19]}</span></div>
      <div class="key" data-index="KeyT"><span>${x[20]}</span></div>
      <div class="key" data-index="KeyY"><span>${x[21]}</span></div>
      <div class="key" data-index="KeyU"><span>${x[22]}</span></div>
      <div class="key" data-index="KeyI"><span>${x[23]}</span></div>
      <div class="key" data-index="KeyO"><span>${x[24]}</span></div>
      <div class="key" data-index="KeyP"><span>${x[25]}</span></div>
      <div class="key" data-index="BracketLeft"><span>${x[26]}</span></div>
      <div class="key" data-index="BracketRight"><span>${x[27]}</span></div>
      <div class="key backslash" data-index="Backslash"><span>${x[28]}</span></div>
    </div>
    <div class="row">
      <div id="caps" class="key caps-lock" data-index="CapsLock"><span>${x[29]}</span></div>
      <div class="key" data-index="KeyA"><span>${x[30]}</span></div>
      <div class="key" data-index="KeyS"><span>${x[31]}</span></div>
      <div class="key" data-index="KeyD"><span>${x[32]}</span></div>
      <div class="key" data-index="KeyF"><span>${x[33]}</span></div>
      <div class="key" data-index="KeyG"><span>${x[34]}</span></div>
      <div class="key" data-index="KeyH"><span>${x[35]}</span></div>
      <div class="key" data-index="KeyJ"><span>${x[36]}</span></div>
      <div class="key" data-index="KeyK"><span>${x[37]}</span></div>
      <div class="key" data-index="KeyL"><span>${x[38]}</span></div>
      <div class="key" data-index="Semicolon"><span>${x[39]}</span></div>
      <div class="key" data-index="Quote"><span>${x[40]}</span></div>
      <div class="key enter" data-index="Enter"><span>${x[41]}</span></div>
    </div>
    <div class="row">
      <div class="key shift-left" data-index="ShiftLeft"><span>${x[42]}</span></div>
      <div class="key" data-index="KeyZ"><span>${x[43]}</span></div>
      <div class="key" data-index="KeyX"><span>${x[44]}</span></div>
      <div class="key" data-index="KeyC"><span>${x[45]}</span></div>
      <div class="key" data-index="KeyV"><span>${x[46]}</span></div>
      <div class="key" data-index="KeyB"><span>${x[47]}</span></div>
      <div class="key" data-index="KeyN"><span>${x[48]}</span></div>
      <div class="key" data-index="KeyM"><span>${x[49]}</span></div>
      <div class="key" data-index="Comma"><span>${x[50]}</span></div>
      <div class="key" data-index="Period"><span>${x[51]}</span></div>
      <div class="key" data-index="Slash"><span>${x[52]}</span></div>
      <div class="key up" data-index="ArrowUp"><span>${x[53]}</span></div>
      <div class="key shift-right" data-index="ShiftRight"><span>${x[54]}</span></div>
    </div>
    <div class="row">
      <div class="key ctrl-left" data-index="ControlLeft"><span>${x[55]}</span></div>
      <div class="key win" data-index="Windows"><span>${x[56]}</span></div>
      <div class="key alt-left" data-index="AltLeft"><span>${x[57]}</span></div>
      <div class="key space" data-index="Space"><span>${x[58]}</span></div>
      <div class="key alt-right" data-index="AltRight"><span>${x[59]}</span></div>
      <div class="key left" data-index="ArrowLeft"><span>${x[60]}</span></div>
      <div class="key down" data-index="ArrowDown"><span>${x[61]}</span></div>
      <div class="key right" data-index="ArrowRight"><span>${x[62]}</span></div>
      <div class="key ctrl-right" data-index="ControlRight"><span>${x[63]}</span></div>
    </div>
    </div>
    <p>Виртуальная клавиатура создана на ОС Windows</p>
    </div>
  </div>
  </div>`;
}
